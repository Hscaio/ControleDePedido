import {FaGithub, FaLinkedin} from 'react-icons/fa'
import styles from './Footer.module.css'

function Footer(){
    return (
        <footer className={styles.footer}>
            <ul className={styles.social_list}>
                <li>
                    <a href="https://github.com/Hscaio" target="_blank" rel="noopener noreferrer">
                        <FaGithub/>   
                    </a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/caiosoaressilva/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin/>   
                    </a>
                </li>                
            </ul>
            <p className={styles.copy_right}><span>Caio Soares Silva</span> &copy; 2024</p>
        </footer>
    )
}

export default Footer