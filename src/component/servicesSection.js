import styles from "@/style/services.module.css"
import common from "@/style/common.module.css";
import { FaReact } from "react-icons/fa6";
import Link from "next/link";
import {FaPaintBrush} from "react-icons/fa";

const ServicesSection = () => {
    return (
        <div className={`${common.main}`}>
            <h2 className={common.commonHeading}>Our Services</h2>
            <div className={styles.flex} >
                 <div className={styles.card}>
                     <center>
                        <FaReact className={styles.ServicesIcon} /><br/><br/>
                        <h2>WEB DEVELOPMENT</h2>
                    </center>
                    <p className={styles.para}>We Have Created so many Fullstack Websites Ott, Job Protal Website and Many More</p>
                    <center>
                        <Link href="/Projects">
                             <button>Explore Websites</button>
                        </Link>
                    </center>
                </div>

                <div className={styles.card}>
                    <center>
                        <FaPaintBrush className={styles.ServicesIcon} /><br/><br/>
                        <h2>WEB DESIGNING</h2>
                     </center>
                    <p className={styles.para}>We Have Created so many Frontend websites Like E-Commerce Business Website and Many More</p>
                    <center>
                        <Link href="/Projects">
                            <button>Explore Design</button>
                        </Link>
                    </center>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;