
import styles from "@/style/Navbar.module.css"
import common from "@/style/common.module.css";
import Link from "next/link";
import {FaHome, FaInstagram} from "react-icons/fa";
import { FaCode,FaMessage,FaReact } from "react-icons/fa6";

const LeftBar = () => {
    return (
        <main className={`${common.primarybg} ${styles.leftbar}`}>
            <div className={styles.linksSection}>
                <ul>
                    <li>
                        <Link href="/" className={styles.link}>
                            <FaHome className={styles.iconsNone}/> &nbsp; <p className={styles.linkText}>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Projects" className={styles.link}>
                            <FaCode className={styles.iconsNone}/> &nbsp; <p className={styles.linkText}>Projects</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Services" className={styles.link}>
                            <FaReact className={styles.iconsNone}/> &nbsp; <p className={styles.linkText}>Services</p>
                        </Link>
                    </li>
                    <li>
                        <Link href="/Contact" className={styles.link}>
                            <FaMessage  className={styles.iconsNone}/> &nbsp; <p className={styles.linkText}>Contact</p>
                        </Link>
                    </li>
                    <li>
                        <hr className={styles.white}/>
                    </li>
                    <li>
                        <center>
                            <Link href="https://www.instagram.com/bytebrusters_/" target="_blank" className={`${styles.link}`}>
                                <div className={styles.instaIcon}>
                                    <FaInstagram  className={`${styles.socialIcon}`}/>
                                </div>
                            </Link>
                        </center>
                    </li>
                </ul>
            </div>
        </main>
    );
};

export default LeftBar;

