import Styles from '@/style/tutorial.module.css';
import common from "@/style/common.module.css"
import Image from "next/image";
import Link from "next/link";

const Project = () => {
    return (
        <div className={` ${Styles.flex}`}>
            <div className={Styles.card}>
                <Image src="/Project_1.png" alt="Project 1" className={Styles.image} width="350" height="250" /><br/><br/>
                <h3>Portfolio Website</h3><br/>
                <p>Languages: HTML, CSS, JavaScript </p><br/>
                <Link href="https://mswebdevplement.000webhostapp.com/index.html" target="_blank">
                    <button>
                        Read More
                    </button>
                </Link>
            </div>

            <div className={Styles.card}>
                <Image src="/project 2.png" alt="Project 2" className={Styles.image} width="350" height="250" /><br/><br/>
                <h3>Student Management System</h3><br/>
                <p>Language: PHP</p><br/>
                <Link href="/Project_not_found" target="_blank">
                    <button>
                        Read More
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Project;