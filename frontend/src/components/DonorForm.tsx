import "../styles/DonorForm.css";
import { useState } from "react";

const DonorForm = () => {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [days, setDays] = useState("");

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const fileInput = document.querySelector("#imageInput");
    const file = fileInput.files[0];

    if (file && file.type === "image/jpeg") {
      const reader = new FileReader();

      reader.onload = async function (event) {
        const bodyData = {
          name: name,
          desc: title,
          fund_raised: amount,
          image: event.target.result,
        };

        const res = await fetch("http://localhost:3080/raisefund", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(bodyData),
        });

        const data = await res.json();

        alert(data.message);
        fileInput.value = "";
      };

      reader.readAsDataURL(file);
    }

    setName("");
    setTitle("");
    setAmount("");
    setDays("");
  };

  return (
    <>
      <div className="recipe_box" data-aos="fade-up">
        <div className="boxer" data-aos="fade-up">
          <h1 className="create_your_recipe" data-aos="fade-up">
            FundRaiser Form
          </h1>
          <form
            className="create_form"
            data-aos="fade-up"
            onSubmit={handleSubmit}
          >
            <label htmlFor="" data-aos="fade-up">
              Title
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="reaipe_inputss"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              StartedBy
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter name of event handler"
              className="reaipe_inputss"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
              data-aos="fade-up"
            />

            <label htmlFor="" data-aos="fade-up">
              AmountNeeded
            </label>
            <input
              type="text"
              name="ingredients"
              placeholder="Enter the target amount"
              className="reaipe_inputss"
              onChange={(e) => setAmount(e.target.value)}
              value={amount}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              DaysLeft
            </label>
            <input
              type="text"
              name="image"
              placeholder="Total length of event in days"
              className="reaipe_inputss"
              onChange={(e) => setDays(e.target.value)}
              value={days}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              Insert Image
            </label>
            <input
              id="imageInput"
              type="file"
              name="Image"
              placeholder="Image"
              className="reaipe_inputss"
              required
              data-aos="fade-up"
              accept="image/jpeg"
            />
            <div className="recipe_submit_btn" data-aos="fade-up">
              <button
                type="submit"
                className="recipe_submit"
                data-aos="fade-up"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default DonorForm;
