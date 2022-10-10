import { Dispatch, HtmlHTMLAttributes, MouseEventHandler, useState } from 'react'
import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'



const MenuOption = ({ text, selected, handleClick }: { text: string, selected: string, handleClick: MouseEventHandler<HTMLDivElement> }) => {

  return <div className={`${selected === text ? styles.selected : styles.text} ${styles.content}`} >
    <h3 onClick={handleClick}>{text}</h3>

  </div>
}



const Home: NextPage = () => {
  const [selected, setSelected] = useState<string>('')

  const handleClick = (e: any) => {
    setSelected(e.target.innerText)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Expanzo</title>
        <meta name="description" content="expand your brand with expanzo" />
        <link rel="icon" href="/logo-expanzo-black.svg" />
      </Head>

      <main className={styles.main}>
        <Image src='/logo-expanzo-black.svg' alt='expanzo black' width={225.458} height={118.111} />
        <div className={styles.nav}>
          <MenuOption text='All' selected={selected} handleClick={handleClick} />
          <MenuOption text='Companies' selected={selected} handleClick={handleClick} />
          <MenuOption text='Phones' selected={selected} handleClick={handleClick} />
        </div>
      </main>

    </div>
  )
}

export default Home
