import React, { useState } from "react";
import styles from "../../styles/contact-form.module.css";
import toast, { Toaster } from "react-hot-toast";

const ContactForm = () => {
  const [data, setData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("/api/contact", {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const result = await response.json();
    console.log(result);

    toast.success(JSON.stringify(result.message));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => {
      return {
        ...prevData,
        [name]: value,
      };
    });
  };

  return (
    <section className={styles.contact}>
      <h1>How can I help you?</h1>
      <form action="" className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.controls}>
          <div className={styles.control}>
            <label htmlFor="email">Your Email</label>
            <input
              type="email"
              name="email"
              value={data.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.control}>
            <label htmlFor="name">Your Name</label>
            <input
              type="text"
              name="name"
              required
              value={data.name}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className={styles.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            rows={5}
            name="message"
            required
            value={data.message}
            onChange={handleChange}
          />
        </div>
        <div className={styles.control}>
          <button>Send Message</button>
        </div>
      </form>
    </section>
  );
};

export default ContactForm;
