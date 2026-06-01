import React from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
export default function Contact() {
  const formData = new FormData();

  function handleSubmit(e) {
    e.preventDefault();
  }

  function handleChange(e) {
    console.log(e.target.value);
  }

  return (
    <div className={styles.layout}>
      <motion.section
        className={styles.contact}
        id="contact"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.2 }}
      >
        <form onSubmit={handleSubmit} className={styles.form}>
          <h2>Contact Me</h2>
          <label>
            Name:
            <input
              type="text"
              placeholder="i.e Bob Smith"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              placeholder="bob.smith123@email.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            placeholder="Website still under construction, this contact form is not function yet."
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <br />
          <button type="submit">Submit</button>
        </form>
      </motion.section>
      <Footer />
    </div>
  );
}
