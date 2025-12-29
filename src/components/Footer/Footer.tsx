import styles from './Footer.module.css'
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";



export const Footer = () => {
    return (
        <div className={styles.containerGeral}>
            <div className={styles.container}>
                <div className={styles.containerAreaInfo}>
                    <p>Fale Comigo:</p>
                    <p>brunovlviana41@gmail.com</p>
                    <p>{`(31) 995453632`}</p>
                </div>
                <div className={styles.containerAreaSocial}>
                    <FaInstagram size={65} color='pink'/>
                    <FaWhatsapp size={65} color='green'/>
                    <FaFacebook size={65} color='blue'/>
                    <a href='https://github.com/BrunoVenuto' target="_blank" rel="noopener noreferrer"><FaGithub size={65} color='black' /></a>
                </div>
            </div>
        </div>
    )
}