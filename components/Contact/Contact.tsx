import styles from './Contact.module.scss';
import { IoIosSend } from 'react-icons/io';
const Contact = () => {
  return (
    <section
      className={`section-container bg-secondary ${styles['section-text']}`}>
      <div className='container'>
        <h2 className='section-heading'>Contact</h2>
        <div className={styles['contact-flex-container']}>
          <div className={styles['contact-info']}>
            {/* <h3 className={styles['contact-info-heading']}>Let&apos;s talk!</h3> */}
            <p className={styles['form-intro-text']}>
              Want to talk about a new opportunity? Life? Your favourite TV
              Show? How my love for hockey makes me TOO Canadian?
            </p>
          </div>
          <div className={styles['contact-form']}>
            <form className={styles['form']}>
              <h3 className={styles['form-heading']}>Send a message</h3>
              <label htmlFor='name'>Name</label>
              <input type='text' id='name' />

              <label htmlFor='email'>Email</label>
              <input type='email' id='email' />

              <label htmlFor='message'>Message</label>
              <textarea
                name='message'
                id='message'
                cols={5}
                rows={5}></textarea>
              <button className={styles['submit-button']} type='submit'>
                Send{' '}
                <IoIosSend
                  className={styles['email-icon']}
                  style={{ fontSize: '2rem' }}
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
