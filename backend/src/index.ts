import express from "express";
import sendMail from "./controller/sendMail";
import { config } from "dotenv";
config();
const app = express();

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

app.listen(3080, () => {
  console.log("Server listening at : http://localhost:3080");
});
