import Button from "@/widgets/Button";
import styles from "./Contacts.module.scss";

interface ContactsProps {
  contacts: {
    address: string;
    phone: string;
    email: string;
  };
}

const Contacts: React.FC<ContactsProps> = ({ contacts }) => {
  return (
    <section className={styles.contacts}>
      <div className={styles.container}>
        <div className={styles.textWrapper}>
          <h2 className={styles.sectionTitle}>Остались вопросы?</h2>
          <p className={styles.subtitle}>
            Свяжитесь с нами, и мы предоставим всю необходимую информацию.
          </p>
          <div className={styles.infoGrid}>
            <div className={styles.infoBlock}>
              <h3>Наш офис</h3>
              <p>{contacts.address}</p>
            </div>
            <div className={styles.infoBlock}>
              <h3>Телефон</h3>
              <a href={`tel:${contacts.phone.replace(/\s|\(|\)|-/g, "")}`}>
                {contacts.phone}
              </a>
            </div>
            <div className={styles.infoBlock}>
              <h3>Электронная почта</h3>
              <a href={`mailto:${contacts.email}`}>{contacts.email}</a>
            </div>
          </div>
        </div>
        <div className={styles.formWrapper}>
          <form className={styles.form}>
            <div className={styles.inputGroup}>
              <input type="text" id="name" required className={styles.input} />
              <label htmlFor="name" className={styles.label}>
                Ваше имя
              </label>
            </div>
            <div className={styles.inputGroup}>
              <input type="tel" id="phone" required className={styles.input} />
              <label htmlFor="phone" className={styles.label}>
                Ваш телефон *
              </label>
            </div>
            <div className={styles.inputGroup}>
              <textarea
                id="question"
                required
                className={styles.textarea}
              ></textarea>
              <label htmlFor="question" className={styles.label}>
                Ваш вопрос *
              </label>
            </div>
            <Button variant="primary" className={styles.submitButton}>
              Отправить заявку
            </Button>
            <p className={styles.policy}>
              Нажимая кнопку, Вы даете согласие на обработку{" "}
              <a href="/personal_policy/">персональных данных</a>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
