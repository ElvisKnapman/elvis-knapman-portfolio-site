import styles from "./Contact.module.scss";
import { IoIosSend } from "react-icons/io";
const Contact = () => {
  return (
    <section
      id="contact"
      className={`section-container bg-secondary ${styles["section-text"]}`}>
      <div className="container">
        <h2 className="section-heading">Contact</h2>
        <div className={styles["contact-flex-container"]}>
          <div className={styles["contact-info"]}>
            {/* <h3 className={styles['contact-info-heading']}>Let&apos;s talk!</h3> */}
            <p className={styles["form-intro-text"]}>
              Want to talk about a new opportunity? Life? Your favourite TV
              Show? How my love for hockey makes me TOO Canadian?
            </p>
          </div>
          <div className={styles["contact-form"]}>
            <form
              method="POST"
              action="/"
              className={styles["form"]}
              name="portfolio-site-contact"
              data-netlify="true"
              netlify-honeypot="bot-field">
              <h3 className={styles["form-heading"]}>Send a message</h3>
              <input
                type="hidden"
                name="form-name"
                value="portfolio-site-contact"
              />
              <label htmlFor="name">Name</label>
              <input type="text" id="name" required />

              <label htmlFor="email">Email</label>
              <input type="email" id="email" required />

              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                id="message"
                cols={5}
                rows={5}
                required></textarea>
              <button className={styles["submit-button"]} type="submit">
                Send{" "}
                <IoIosSend
                  className={styles["email-icon"]}
                  style={{ fontSize: "2rem" }}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
