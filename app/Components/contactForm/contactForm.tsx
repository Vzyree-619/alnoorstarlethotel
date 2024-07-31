import styles from './contactForm.module.css';

export default function ContactForm() {

  async function contactSubmission(formData:any){
    "use server"
    const firstName =formData.get('firstN')
    const secondName = formData.get('secondN')
    const email = formData.get('email')
    const contactNumber = formData.get('Number')
    const Message = formData.get('Message')
    console.log(firstName,secondName,email,contactNumber,Message)
  }
  
  return (
    <section className={styles.contactForm}>
      <div className={styles.contactForm}>
        <form action={contactSubmission}>
          <div className={styles.inputBox}>
            <label htmlFor=''>First Name</label>
            <input type='text' name='firstN' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Last Name</label>
            <input type='text' name='secondN' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Email</label>
            <input type='email' name='email' />
          </div>
          <div className={styles.inputBox}>
            <label htmlFor=''>Phone Number</label>
            <input type='number' name='Number' />
          </div>
          <div className={styles.select}>
            <h2>Select Subject</h2>
            <div className={styles.radioContainer}>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>General Inquiry</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Booking</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Complaint</span>
              </div>
              <div className={styles.radioBox}>
                <input name='option' type='radio' />
                <span>Other</span>
              </div>
            </div>
          </div>
          <div className={styles.textarea}>
            <label className='' htmlFor=''>Message</label>
            <textarea
              name='Message'
              id=''
              placeholder='Write your message...'
            ></textarea>
            <button>Send Message</button>
          </div>
        </form>
      </div>
    </section>
  );
}
