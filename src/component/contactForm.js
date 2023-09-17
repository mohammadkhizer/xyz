import Styles from '@/style/contact.module.css';
import common from "@/style/common.module.css"
import Image from "next/image";
import Link from "next/link";
import {FiMail} from "react-icons/fi";
import {AiOutlineInstagram} from "react-icons/ai";

const ContactForm = () => {
    return (
        <div className={`${common.main} ${common.primarybg} ${Styles.borderRadious}`}>

            <div className={`${Styles.flex} ${Styles.box1}`}>
                <Image src="/Logo.jpg" className={Styles.logoImage} alt="Logo" height={200} width={200} />
                &emsp;
                <div className={Styles.LinkSection}>
                    <Link href="mailto:brustersbyte@gmail.com" target="_blank" className={`${Styles.flex} ${Styles.LinkMain}`}>
                        <FiMail  className={Styles.icon}  /> <p className={Styles.linktext}>&ensp;brustersbyte@gmail.com</p>
                    </Link><br/>
                    <Link href="https://www.instagram.com/bytebrusters_/" target="_blank" className={`${Styles.flex} ${Styles.LinkMain}`}>
                        <AiOutlineInstagram className={Styles.icon} /> <p className={Styles.linktext}>&ensp;ByteBrusters_</p>
                    </Link>

                </div>
            </div>

            <div className={`${Styles.box2}`}>
                <center>
                    <Image src="/Logo.jpg" className={Styles.logoImage} alt="Logo" height={200} width={200} />

                    <div className={Styles.LinkSection}>
                        <Link href="mailto:brustersbyte@gmail.com" target="_blank" className={`${Styles.flex} ${Styles.LinkMain}`}>
                            <FiMail  className={Styles.icon}  /> <p className={Styles.linktext}>&ensp;brustersbyte@gmail.com</p>
                        </Link><br/>
                        <Link href="https://www.instagram.com/bytebrusters_/" target="_blank" className={`${Styles.flex} ${Styles.LinkMain}`}>
                            <AiOutlineInstagram className={Styles.icon} /> <p className={Styles.linktext}>&ensp;ByteBrusters_</p>
                        </Link>

                    </div>
                </center>
            </div>

        </div>
    );
};

export default ContactForm;