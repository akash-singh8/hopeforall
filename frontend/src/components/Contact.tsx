import style from "../styles/Contact.module.css";
import crowdfunding from "../assets/crowdfunding.png";

const Contact = () => {
  const handleContact = async (e: any) => {
    e.preventDefault();

    const name = document.getElementById("name") as HTMLInputElement;
    const email = document.getElementById("email") as HTMLInputElement;
    const message = document.getElementById("message") as HTMLInputElement;

    const res = await fetch("http://localhost:3080/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name.value,
        email: email.value,
        message: message.value,
      }),
    });

    const data = await res.json();

    alert(data.message);

    name.value = "";
    email.value = "";
    message.value = "";
  };

  return (
    <section id="contact" className={style.contact}>
      <img src={crowdfunding} alt="fundraise" />

      <form className={style.form}>
        <h1>Get in Touch With Us</h1>
        <div className={style.input_container}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" required />
        </div>

        <div className={style.input_container}>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" required />
        </div>

        <div className={style.input_container}>
          <label htmlFor="message">Message</label>
          <textarea id="message" required></textarea>
        </div>

        <button onClick={handleContact}>Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
