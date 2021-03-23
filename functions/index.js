const functions = require("firebase-functions");
const firebase = require("firebase-admin");
const express = require("express");

const firebaseConfig = functions.config() ? functions.config().firebase : {};
const firebaseApp = firebase.initializeApp(firebaseConfig);
const firestore = firebaseApp.firestore();

const app = express();
const api = express.Router();

app.use(express.json());

api.post("/authors", (req, res) => {
  const authorParams = req.body;
  firestore
    .collection("authors")
    .add(authorParams)
    .then(() => res.json({ message: "ok" }))
    .catch((e) => {
      console.error(e);
    });
});

app.use("/api", api);

exports.app = functions.https.onRequest(app);
