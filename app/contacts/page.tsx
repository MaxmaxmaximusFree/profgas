import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Contacts from '@/components/Contacts';
import styles from './contacts.module.scss';
import { getSiteInfo } from '@/actions/actions';

const ContactsPage = async () => {
  const siteInfo = await getSiteInfo();

  return (
    <>
      <Header />
      <main className={styles.contactsPage}>
        <div className={styles.container}>
            <h1 className={styles.title}>Наши контакты</h1>
            <Contacts contacts={siteInfo.contacts} />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ContactsPage;