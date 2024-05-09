import express from "express";
import sendMail from "./controller/sendMail";
import mongoose from "mongoose";
import { config } from "dotenv";

import RaiseFund from "./schema/raisefund";

config();
const app = express();

mongoose.connect(process.env.DB_URI!);

app.use(express.json());

app.post("/contact", async (req, res) => {
  const { name, email, message } = req.body;

  try {
    await sendMail(email, { name, email, message });
    res.json({ message: "Successfully Contacted" });
  } catch (e) {
    console.log(e);
    res
      .status(500)
      .json({ message: "Server side error, please try again later!" });
  }
});

app.post("/raisefund", (req, res) => {
  const { name, desc, fund_raised, image } = req.body;

  const raiseFund = new RaiseFund({
    name: name,
    description: desc,
    fundRaised: parseInt(fund_raised),
    image: image,
  });

  raiseFund
    .save()
    .then((project: any) => {
      console.log("Donor saved:", project);
    })
    .catch((error: any) => {
      console.error("Error saving project:", error);
    });

  res.json({ message: "Successfully listed to raise funds" });
});

app.get("/donors", async (req, res) => {
  try {
    const donors = await RaiseFund.find();
    console.log("Donors:", donors);

    res.json(donors);
  } catch (error) {
    console.error("Error finding donors:", error);
    res
      .status(500)
      .json({ message: "Server side error, please try again later!" });
  }
});

app.listen(3080, () => {
  console.log("Server listening at : http://localhost:3080");
});
