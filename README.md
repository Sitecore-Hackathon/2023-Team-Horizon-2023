![Hackathon Logo](docs/images/hackathon.png?raw=true "Hackathon Logo")
# Sitecore Hackathon 2023

- MUST READ: **[Submission requirements](SUBMISSION_REQUIREMENTS.md)**
- [Entry form template](ENTRYFORM.md)
  
### ⟹ [Insert your documentation here](ENTRYFORM.md) <<
# Team
Team Horizon 2023

# Category
2.	Best Enhancement to XM Cloud

# Our Solution Summary

- Latest Sitecore 10.3 and XM Cloud introduced a new management and administration APIs and webhooks capabilities. Our hackathon idea is to develop best enhancement to XM Cloud leveraging the new webhooks capabilities. Our fictitious global marketing company, Horizon has faced challenges managing the transcreation of our global content to all our markets. 
 - __Globa, our global content producer__ needs to assign content transcreation orders efficiently, notify her team to action, translate content to various localized languages to meet our business needs. 
 - __Nicola, the localization specialist__ needs to leverage modern AI tooling to help with transcreation process efficiently to meet tight deadlines. 
 - __Rupert, our reporting guru__ loves visibility and wants to communicate with global campaign managers on transcreation orders. 
 - __Brenda, our marketing brand manager__ wants content available to omni-channels for all locales to meet global demands.

# Solution Design

1.	We leverage the  __Sitecore XM webhooks__ functionality to trigger transcreation work orders raised by Globa, our global content producer. She does this by creating new versions, in Sitecore XM, of content for different languages to meet global needs.  
2.	Our __Notifications Hub__ will process the webhooks from Sitecore XM using Serverless Functions hosted on our managed Azure cloud. This will push direct messages and notifications to our team of transcreation analysts, lead by Nicola. 
3.	It also logs all transcreation orders in __Cosmos DB repository__, which acts as store tracking changes done during transcreation processes and content strategy workflows. 
4.	We have a __JamStack web portal__ which Nicola and her team will be used to pick the logged transcreation orders, proces them through agreed workflows. 
5.	We leverage the __Open AI API__ integration to efficiently localize and translate content as per the requests. All approved content will then be fed back into Sitecore XM Cloud using the REST APIs  
6.	Brenda will then work with Globa to review the final content in XM Cloud, publish this to a global CDN (Sitecore Delivery Platform) to meet the omni-channel needs for our business

<img width="1507" alt="Sitecore Hackathon-2023 - Team Horizon 2023" src="https://user-images.githubusercontent.com/48400867/222894599-fcc2e6ac-6eb4-4e10-9102-a224a8e094b5.png">


## Video link
⟹ Provide a video highlighing your Hackathon module submission and provide a link to the video. You can use any video hosting, file share or even upload the video to this repository. _Just remember to update the link below_

⟹ [Replace this Video link](#video-link)



## Pre-requisites and Dependencies

⟹ Does your module rely on other Sitecore modules or frameworks?

- Sitecore XM 10.3 with Webhook configuration
- We are using Azure Function App (Windows, Node Js 18:LTS) as Notification Hub
- Azure Cosmos DB with No SQL as a repository to track our transcreation work orders
- JamStack web portal to pick the transcreation orders
- OpenAI API integration to translate the content


## Installation instructions
⟹ Write a short clear step-wise instruction on how to install your module.  

1. Download and install the Sitecore package `./docs/Team-horizon-2023-package-1.zip` into your Sitecore 10.3 instance. 
We have a sitecore template 'Horizon' with the condition _Content under 'Global' or one of its descendants created using the Template 'Horizon'_. _Configured webhook to trigger whenever the new item added or item saved or item created  new version._
3. Create a SendGrid Account from Azure Marketplace and create a SendGrid API key with Full access
4. Create an Azure Function App (Windows, Node Js 18:LTS). Create an HTTP Trigger function `./src/Azure/IngestContent-HTTP Trigger/` Which adds the transcreation order to Cosmos DB & Queue Trigger function `./src/Azure/IngestMail-Queue Trigger/` to send Email notification.
5. Copy the Azure Function App URL and configure Webhook in your `Sitecore/System/Webhooks`
6. Create a Cosmos DB with NO SQL
![CosmosDB](https://user-images.githubusercontent.com/48400867/222911962-512cc446-6ad6-429b-a546-a47743049c6f.jpg)
6. Create a OpenAI free account and create API Key

## Usage instructions
⟹ Provide documentation about your module, how do the users use your module, where are things located, what do the icons mean, are there any secret shortcuts etc.

Once you have done with all the above setup,

1. Add/Update any content in Sitecore Content Editor
![Item Added](https://user-images.githubusercontent.com/48400867/222923686-ee1b38fb-d02e-4ba6-a515-346da83b9286.jpg)

2. Webhooks will get triggered whenever the new item added/saved/new version updates under the Global Node. It also logs the data in Cosmos DB
![Item Queued to Cosmos DB](https://user-images.githubusercontent.com/48400867/222923848-1106a34d-58d1-4279-a1ea-638d91e95d30.jpg)
![Item Queued to Cosmos DB 2](https://user-images.githubusercontent.com/48400867/222923899-0965f34e-d6fb-49bb-b78d-80cf1c0b1ecc.jpg)
![Item Queued to Cosmos DB 3](https://user-images.githubusercontent.com/48400867/222924146-0ea3df2a-3399-4af5-8e96-772f88b45c1a.jpg)
![Item Queued to Cosmos DB 4](https://user-images.githubusercontent.com/48400867/222924175-7e442ce4-b355-4816-8cfa-8b508e3e3fca.jpg)

3. Email Notification triggered
<img width="944" alt="Email Notification" src="https://user-images.githubusercontent.com/48400867/222921055-97afa92d-d825-4a0e-85ed-574640776e2e.png">

4.We have integrated with OpenAI API which translates the content as per the request
