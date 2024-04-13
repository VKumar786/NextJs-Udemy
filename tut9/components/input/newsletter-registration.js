import { useRef } from "react";
import classes from "./newsletter-registration.module.css";
import { useNotification } from "../../context/NotificationContext";

function NewsletterRegistration() {
  const { showNotification, hideNotification } = useNotification();
  const emailInputRef = useRef();
  async function registrationHandler(event) {
    event.preventDefault();

    // fetch user input (state or refs)
    // optional: validate input
    // send valid data to API
    const enteredEmail = emailInputRef.current.value;
    const data = await (
      await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email: enteredEmail }),
        headers: {
          "Content-Type": "application/json",
        },
      })
    ).json();
    showNotification({
      status: "success",
      title: "Registration successful!",
      message: data.message,
    });
    setTimeout(() => {
      hideNotification(null);
    }, 3000);
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
            ref={emailInputRef}
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
