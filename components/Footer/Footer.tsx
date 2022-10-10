import Image from "next/image"

import style from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={style.footer_container}>
            <div className={style.inner_content}>
                <div className={style.image_div}>
                    <Image src='/logo-expanzo-black.svg' alt='expanzo black' width={225.458} height={118.111} />
                </div>
                <ul className={style.list}>
                    <li>CONTACT</li>
                    <li>PHONES</li>
                    <li>TOP SEARCH</li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
