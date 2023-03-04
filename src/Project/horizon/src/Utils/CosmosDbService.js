const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const cosmosPort = 1234; // replace with your port
const dbName = 'your-cosmos-db-name-goes-here';
const key = 'your-key-goes-here';

const workOrderSchema = new Schema(
    {
      itemId: { type: String, required: true, unique: true },
      language: String,
      datecreated: Date,
      payload: String
    },
    { autoIndex: false }
  );

  export const WorkOrder = mongoose.model('WorkOrder', workOrderSchema);

  export const getWorkOrder = (req, res) => {
    const docquery = WorkOrder.find({}).read(ReadPreference.NEAREST);
    docquery
      .exec()
      .then(workOrders => {
        res.json(workOrders);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
  
  export const createWorkOrder = (req, res) => {
    const { itemId, language, datecreated, payload } = req.body;
  
    const workOrder = new WorkOrder({ itemId, language, datecreated, payload });
    workOrder
      .save()
      .then(() => {
        res.json(workOrder);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
  
  export const updateWorkOrder = (req, res) => {
    const { itemId, language, datecreated, payload } = req.body;
  
    WorkOrder.findOne({ itemId })
      .then(workOrder => {
        workOrder.language = language;
        workOrder.datecreated = datecreated;
        workOrder.save().then(res.json(workOrder));
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }
  
  export const destroyWorkOrder = (req, res) => {
    const { id } = req.params;
  
    WorkOrder.findOneAndRemove({ id })
      .then(workOrder => {
        res.json(workOrder);
      })
      .catch(err => {
        res.status(500).send(err);
      });
  }