import "../styles/DonorForm.css";

const DonorForm = () => {
  return (
    <>
      <div className="recipe_box" data-aos="fade-up">
        <div className="boxer" data-aos="fade-up">
          <h1 className="create_your_recipe" data-aos="fade-up">
            Donate Now
          </h1>
          <form className="create_form" data-aos="fade-up">
            <label htmlFor="" data-aos="fade-up">
              Name
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
              Description
            </label>
            <input
              type="text"
              name="description"
              placeholder="Enter Description"
              className="reaipe_inputss"
              onChange={(e) => setDescription(e.target.value)}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              Fund raised
            </label>
            <input
              type="text"
              name="ingredients"
              placeholder="Enter Ingredients"
              className="reaipe_inputss"
              onChange={(e) => setIngredients(e.target.value)}
              required
              data-aos="fade-up"
            />
            <label htmlFor="" data-aos="fade-up">
              Image URL
            </label>
            <input
              type="text"
              name="image"
              placeholder="Enter Image URL"
              className="reaipe_inputss"
              onChange={(e) => setUrl(e.target.value)}
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
