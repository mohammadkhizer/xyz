import styles from "@/style/HeroSection.module.css"
import common from "@/style/common.module.css";
import Link from "next/link";


const HeroSection = () => {
    return (
        <main className={`${common.main} ${styles.twoColumn}`}>
            <div className={`${styles.box} ${styles.boxOne}`}>
                <h1 className={styles.heroHeading}>Welcome TO ByteBrusters</h1><br/>
                <p className={styles.heropara}>
                    Hey There!,<br/>
                    I'm a web designer and developer with expertise in C, Python, JavaScript, and WordPress. Whether you need a stunning website, custom software solutions, or WordPress plugins, I've got you covered. With years of experience, I bring creativity and technical know-how to every project.
                </p>
                <div className={styles.btnBox}>
                    <Link href="/Blogs">
                        <button>Get Notes</button>
                    </Link>

                    <Link href="/Tutorials">
                        <button>Watch Tutorials</button>
                    </Link>
                </div>
            </div>
            <div className={`${styles.box} ${styles.Img}`}></div>
        </main>
    );
};

export default HeroSection;
