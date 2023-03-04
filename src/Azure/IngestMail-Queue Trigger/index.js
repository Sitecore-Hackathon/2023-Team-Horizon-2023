var util = require('util');

// The 'From' and 'To' fields are automatically populated with the values specified by the binding settings.
//
// You can also optionally configure the default From/To addresses globally via host.config, e.g.:
//
// {
//   "sendGrid": {
//      "to": "user@host.com",
//      "from": "Azure Functions <samples@functions.com>"
//   }
// }
module.exports = async function (context, order) {
    context.log('JavaScript queue trigger function processed order', order.orderId);

    context.bindings.message = {
        subject: util.format('Horizon- New Workorder notification'),
        content: [{
            type: 'text/plain',
            value: util.format("You have been assigned a new transcreational work order. Please access the portal for detail")
        }]
    };
}