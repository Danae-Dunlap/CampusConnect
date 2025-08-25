import express from "express";

// This will help us connect to the database
import db from "./connection.js";

// This help convert the id from string to ObjectId for the _id.
import { ObjectId, type DeleteResult, type Document, type InsertOneResult, type UpdateResult, type WithId } from "mongodb";

// router is an instance of the express router.
// We use it to define our routes.
// The router will be added as a middleware and will take control of requests starting with path /record.
const router = express.Router();

// This section will help you get a list of all the records.
/*
router.get("/", async (_req: any, res: { send: (arg0: WithId<Document>[]) => { (): any; new(): any; status: { (arg0: number): void; new(): any; }; }; }) => {
  let collection = await db.collection("records");
  let results = await collection.find({}).toArray();
  res.send(results).status(200);
});

// This section will help you get a single record by id
router.get("/:id", async (req: { params: { id: number; }; }, res: { send: (arg0: string | WithId<Document>) => { (): any; new(): any; status: { (arg0: number): void; new(): any; }; }; }) => {
  let collection = await db.collection("records");
  let query = { _id: new ObjectId(req.params.id) };
  let result = await collection.findOne(query);

  if (!result) res.send("Not found").status(404);
  else res.send(result).status(200);
});

// This section will help you create a new record.
router.post("/", async (req: { body: { name: any; position: any; level: any; }; }, res: { send: (arg0: InsertOneResult<Document>) => { (): any; new(): any; status: { (arg0: number): void; new(): any; }; }; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  try {
    let newDocument = {
      name: req.body.name,
      position: req.body.position,
      level: req.body.level,
    };
    let collection = await db.collection("records");
    let result = await collection.insertOne(newDocument);
    res.send(result).status(204);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error adding record");
  }
});

// This section will help you update a record by id.
router.patch("/:id", async (req: { params: { id: number; }; body: { name: any; position: any; level: any; }; }, res: { send: (arg0: UpdateResult<Document>) => { (): any; new(): any; status: { (arg0: number): void; new(): any; }; }; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };
    const updates = {
      $set: {
        name: req.body.name,
        position: req.body.position,
        level: req.body.level,
      },
    };

    let collection = await db.collection("records");
    let result = await collection.updateOne(query, updates);
    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error updating record");
  }
});

// This section will help you delete a record
router.delete("/:id", async (req: { params: { id: number; }; }, res: { send: (arg0: DeleteResult) => { (): any; new(): any; status: { (arg0: number): void; new(): any; }; }; status: (arg0: number) => { (): any; new(): any; send: { (arg0: string): void; new(): any; }; }; }) => {
  try {
    const query = { _id: new ObjectId(req.params.id) };

    const collection = db.collection("records");
    let result = await collection.deleteOne(query);

    res.send(result).status(200);
  } catch (err) {
    console.error(err);
    res.status(500).send("Error deleting record");
  }
});
*/
export default router;