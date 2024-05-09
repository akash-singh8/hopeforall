import "../styles/DonorForm.css";

const DonorForm = () => {
  return (
    <>
      <div className="recipe_box" data-aos="fade-up">
        <div className="boxer" data-aos="fade-up">
          <h1 className="create_your_recipe" data-aos="fade-up">
            FundRaiser Form
          </h1>
          <form className="create_form" data-aos="fade-up">
            <label htmlFor="" data-aos="fade-up">
              Title
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter Name"
              className="reaipe_inputss"
              onChange={(e) => setName(e.target.value)}
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
              onChange={(e) => setUrl(e.target.value)}
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
              onChange={(e) => setIngredients(e.target.value)}
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
              onChange={(e) => setUrl(e.target.value)}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
                Insert Image
            </label>
            <input
              type="file"
              name="Image"
              placeholder="Image"
              className="reaipe_inputss"
              onChange={(e) => setDescription(e.target.value)}
              required
              data-aos="fade-up"
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
