const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")(
  "sk_test_51Kt6EZSDAMwxqlw4vCkLgaGiNw3Hk0jEM3Z6g4usGsIrJv5Hcy5OLpuqfxXta11NSKRJ05FIt5ZP7tqL0XjBnksN002LVK16Jo"
);
const PORT=process.env.PORT || 4000;
// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true }));
app.use(express.json());

// - API routes
app.get("/", (request, response) => response.status(200).send("Abhinav"));

app.post("/payments/create", async (request, response) =>{
  const total = request.query.total;

  console.log("Payment Request Recieved BOOM!!! for this amount >>> ", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, // subunits of the currency
    currency: "inr",
  });

  // OK - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

// - Listen command
exports.api = functions.https.onRequest(app);

// Example endpoint
// http://localhost:5001/clone-67066/us-central1/api