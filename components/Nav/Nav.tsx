import Image from 'next/image'
import { useRouter } from 'next/router'
import { faBars, faUser, faPen } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

import style from './Nav.module.css'

interface Props {
    icon: IconProp,
    text: string
}

const IconBar = ({ icon, text }: Props) => (
    <div className={style.iconbar}>
        <div className={style.iconbar_container}><FontAwesomeIcon icon={icon} /></div>
        <span>{text}</span>
    </div>
)

const Nav = () => {
    const router = useRouter()
    return (
        <header className={style.container}>
            <div className={style.left_nav}>
                <FontAwesomeIcon icon={faBars} className={style.icon} />
                <li onClick={() => router.push('/')}>DASHBOARD</li>
                <li onClick={() => router.push('/contact')}>CONTACT</li>
            </div>
            <Image src='/logo-expanzo.svg' alt='expanzo logo' width={99.594} height={52.174} />
            <div className={style.login_reg}>
                <IconBar icon={faUser as IconProp} text='LOGIN' />
                <IconBar icon={faPen as IconProp} text='REGISTRATION' />
            </div>
        </header>
    )
}

export default Nav