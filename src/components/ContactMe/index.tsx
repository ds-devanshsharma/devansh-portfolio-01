import Lottie from "lottie-react";
import styles from "./ContactMe.module.scss";
import img from "./leftImage.json";
import { useState } from "react";
import emailjs from "emailjs-com";
const ContactMe = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Replace with your own email service configuration
    emailjs
      .send(
        "service_8cbkbid",
        "template_bukcxpp",
        {
          name,
          email,
          message,
        },
        "8kw4F-IXy7eXeRhOZ"
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        alert("Message cannot be sent try again");
        setName("");
        setEmail("");
        setMessage("");
      });
  };
  return (
    <section className={styles["container"]}>
      <Lottie animationData={img} className={styles["image"]} />
      <div className={styles["formContainer"]}>
        <h2 className={styles.heading}>
          Feel free to reach out and let's create exceptional web experiences
          together!
        </h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Message"
            required
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
