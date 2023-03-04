module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');
    const { EventName, Item, Id } = (req.body);
    const workOrder = {
        itemId: Item.Id,
        itemLanguage: Item.Language,
        itemEventName: EventName,
        timestamp: new Date().toISOString(),
        payload: req.body
    };

    // Set the output binding data from the query object.
    context.bindings.workorderDocument = workOrder;
    context.bindings.outputQueueItem = "work order ID: " + workOrder.itemId;           

    context.res = {
         status: 200,
        body: "Success"
    };
}