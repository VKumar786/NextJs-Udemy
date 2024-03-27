"use client";

// import ImagePicker from "@/components/meals/image-picker";
import styles from "./page.module.css";
import { shareMeal } from "@/lib/actions";
import CareerFormSubmit from "./CareerFormSubmit";
import { useFormState } from "react-dom";
import ImagePicker from "./image-picker";

export default function CareerForm() {
  const [state, formAction] = useFormState(shareMeal, { message: null }); // for error

  return (
    <>
      <header className={styles.header}>
        <h1>
          Share your <span className={styles.highlight}>Resume</span>
        </h1>
      </header>
      <main className={styles.main}>
        {/* <form className={styles.form} action={shareMeal}> */}
        <form className={styles.form} action={formAction}>
          <div className={styles.row}>
            <p>
              <label htmlFor="name">Your name</label>
              <input type="text" id="name" name="name" required />
            </p>
            <p>
              <label htmlFor="email">Your email</label>
              <input type="email" id="email" name="email" required />
            </p>
          </div>
          <p>
            <label htmlFor="phone">Phone</label>
            <input type="text" id="phone" name="phone" required />
          </p>
          <p>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={10} required></textarea>
          </p>
          <ImagePicker label={"image"} name={"image"} />
          {state?.message && <p>{state?.message}</p>}
          <p className={styles.actions}>
            <CareerFormSubmit />
          </p>
        </form>
      </main>
    </>
  );
}
