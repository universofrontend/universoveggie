import express from "express";

import db from "../db/connection.js";

// Will help us convert the IDs into strings.
import { ObjectId } from "mongodb";

const router = express.Router();

// API
router.get("/", async (req, res) => {
    let collection = await db.collection("users");
    let results = await collection.find({}).toArray();
    res.send(results).status(200);
});

router.get("/:id", async (req, res) => {
    let collection = await db.collection("users");
    let query = { _id: new ObjectId(req.params.id) };
    let result = await collection.findOne(query);

    if (!result) return res.send("Not found").status(404);
    else res.send(result).status(200);
});

// Create
router.post("/", async (req, res) => {
    try {
        // Create a new user document based on the information provided in the request
        let newDocument = {
            name: req.body.nombre,
            email: req.body.email,
            profile: {
                nick: req.body.nick,
                phone: req.body.telefono,
                description: req.body.description,
                socialmedia: req.body.socialMedia,
                privacyconfig: req.body.privacyConfig
            },
            recipes: [], // Initially, the user has no recipes
            followers: [], // Initially, the user has no followers
            following: [], // Initially, the user is not following any other users
        }

        // Access the collection of users in the database
        let collection = await db.collection("users");

        // Insert the new user document into the database
        let result = await collection.insertOne(newDocument);

        // Send a response to the client indicating that the user has been successfully added
        res.send(result).status(204);
    } catch (err) {
        // Handle any errors that occur during the process
        console.error(err);
        res.status(500).send("Error adding user");
    } 
})

// Update
router.patch("/:id", async (req, res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };

        // Construct the update object based on the information provided in the request body
        let updates = {
            $set: {
                name: req.body.name,
                email: req.body.email,
                "profile.nick": req.body.nick,
                "profile.phone": req.body.phone,
                "profile.description": req.body.description,
                "profile.socialmedia": req.body.socialMedia,
                "profile.privacyconfig": req.body.privacyConfig,
                recipes: req.body.recipes,
                followers: req.body.followers, 
                following: req.body.following
            }
        };

        // Access the collection of users in the database
        let collection = await db.collection("users");

        // Update the user document in the database
        let result = await collection.updateOne(query, updates);

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error updating user");
    }
});

// Delete
router.delete("/:id", async (req,res) => {
    try {
        const query = { _id: new ObjectId(req.params.id) };
        const collection = db.collection("users");
        let result = await collection.deleteOne("users");

        res.send(result).status(200);
    } catch (err) {
        console.error(err);
        res.status(500).send("Error deleting user");
    } 
})

export default router;