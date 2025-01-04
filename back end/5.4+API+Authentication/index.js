import express from "express";
import axios from "axios";
import { log } from "console";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";

//TODO 1: Fill in your values for the 3 types of auth.
const yourUsername = "Dewvang";
const yourPassword = "Dewvang";
const yourAPIKey = "adff0f48-c7bf-48eb-975a-24043eff38cf";
const yourBearerToken = "00f00b1f-0f35-489e-a0bc-845908ef0265";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});



app.get("/noAuth", async (req, res) => {
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/random");
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});



app.get("/basicAuth",async (req, res) => {
  //TODO 3: Write your code here to hit up the /all endpoint
  //Specify that you only want the secrets from page 2
  //HINT: This is how you can use axios to do basic auth:
  // https://stackoverflow.com/a/74632908
  /*
   axios.get(URL, {
      auth: {
        username: "abc",
        password: "123",
      },
    });
  */
  try {
    const response = await axios.get("https://secrets-api.appbrewery.com/all?page=2", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      }
    });
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.get("/apiKey", async (req, res) => {
  try {
    const response = await axios.get(`https://secrets-api.appbrewery.com/filter?score=5&apiKey=${yourAPIKey}`)
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});


app.get("/bearerToken", async (req, res) => {
  //TODO 5: Write your code here to hit up the /secrets/{id} endpoint
  //and get the secret with id of 42
  //HINT: This is how you can use axios to do bearer token auth:
  // https://stackoverflow.com/a/52645402
  /*
  axios.get(URL, {
    headers: { 
      Authorization: `Bearer <YOUR TOKEN HERE>` 
    },
  });
  */
  try {
    const response = await axios.get(API_URL+"secrets/42",{
      headers: { 
        Authorization: `Bearer ${yourBearerToken}` 
      }
    })
    const content = JSON.stringify(response.data);
    res.render("index.ejs", { content });
  } catch (error) {
    res.status(500).send("Error fetching data");
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
