import { useRouter } from 'next/router'

import Head from 'next/head'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import { faLocationDot, faEnvelope } from '@fortawesome/free-solid-svg-icons'


import styles from '../styles/Contact.module.css'

interface Props {
  icon: IconProp,
  heading: string,
  children: React.ReactNode

}

const ContactLinks = ({ icon, heading, children }: Props) => (
  <div>
    <div className={styles.heading}>
      <FontAwesomeIcon icon={icon} className={styles.icon} />
      <span>{heading}</span>
    </div>
    <div className={styles.children}>
      {children}
    </div>
  </div>
)


const Contact = () => {


  return (
    <main className={styles.main}>
      <Head>
        <title>Contact</title>
        <link rel="icon" href="/logo-expanzo-black.svg" />
      </Head>
      <span className={styles.title}>Contact</span>
      <div className={styles.address}>
        <ContactLinks icon={faLocationDot} heading={'Headquarters'}  >
          <span>DHO s.r.o</span>
          <span>Borijova 878/35</span>
          <span>130 00 Praha 3</span>
        </ContactLinks>
        <ContactLinks icon={faEnvelope} heading={'Email'}  >
          <span>info@expanzo.com</span>

        </ContactLinks>
      </div>
    </main>
  )
}

export default Contact
