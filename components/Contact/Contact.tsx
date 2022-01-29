import styles from './Contact.module.scss';
import { IoIosSend } from 'react-icons/io';
const Contact = () => {
  return (
    <section
      className={`section-container bg-secondary ${styles['section-text']}`}>
      <div className='container'>
        <h2 className='section-heading'>Contact</h2>
        <div className={styles['contact-grid']}>
          <div className={styles['contact-info']}>
            <h3>Let&apos;s talk!</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Recusandae eos asperiores corrupti ipsum ut eveniet veniam aut
              fuga, sequi ipsam officia debitis, ab dolorem quis! Alias
              praesentium odit maiores laboriosam. Quae, officiis? Ullam nisi
              facere architecto quam id modi corrupti impedit sunt consectetur
              tenetur nostrum cupiditate praesentium hic maxime laudantium
              accusamus aspernatur nesciunt quo magnam accusantium, at animi?
              Labore, beatae? Dicta pariatur accusamus ratione nesciunt, maiores
              aliquid quisquam, perferendis quibusdam doloribus asperiores
              dolore at repellendus tempora voluptate ad quia expedita illo non
              exercitationem earum! Eligendi eum at voluptatibus vel nulla!
              Accusamus ipsum a eos expedita nulla explicabo inventore vitae
              harum quibusdam temporibus quidem reprehenderit qui quae placeat
              fugit iste atque, deleniti dignissimos ex enim non animi ab!
              Perferendis, a accusamus. Dolorem asperiores praesentium maiores
              repudiandae ipsam recusandae pariatur, iure beatae minima quam
              tenetur enim quis laboriosam nisi, sint nobis. Id, molestiae vitae
              quod quasi ipsum sit rem dicta quam maiores?
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
