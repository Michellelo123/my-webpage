import {useState} from "react";
import styles from "./Contact.module.css";
import { motion } from "framer-motion";
import Footer from "../Footer/Footer";
import emailjs from '@emailjs/browser';
import Modal from "./Modal";


export default function Contact() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)
  const [success, setSuccess] = useState(false)


  const validateEmail = (email) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};


  async function handleSubmit(e) {
    e.preventDefault();
    // console.log(name, email, message)
    setLoading(true)
    setError(null)

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      setLoading(false);
      return;
    }
  try {
    await emailjs.send(
  import.meta.env.VITE_EMAILJS_SERVICE_ID,
  import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
  { name, email, message },
  import.meta.env.VITE_EMAILJS_PUBLIC_KEY
);

      setSuccess(true);

  } catch (error) {
  
      setError(error);
    
  }finally{

    setName("")
    setEmail("")
    setMessage("")
    setLoading(false)
    setTimeout(() => {
      setSuccess(false);
    }, 3000);
    setTimeout(() => {
      setError(null);
    }, 3000);
  }
};

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
              value={name}
              onChange={e=>setName(e.target.value)}
              required
            />
          </label>
          <br />
          <label>
            Email:
            <input
              type="text"
              placeholder="bob.smith123@email.com"
              value={email}
              onChange={e=>setEmail(e.target.value)}
              required
            />
          </label>
          <br />
          <label htmlFor="message">Message:</label>
          <br />
          <textarea
            id="message"
            placeholder="Write your message here..."
            value={message}
            onChange={e=>setMessage(e.target.value)}
            required
          ></textarea>
          <br />
          <button type="submit" disabled={loading}>
            {loading ? "Sending..." : "Submit"}
          </button>
          {error && <p className={styles.error}>{error}</p>}
        </form>
          <Modal success={success} error={error} />
      </motion.section>
      <Footer />
    </div>
  );
}
