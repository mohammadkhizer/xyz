import styles from "@/style/Navbar.module.css"
import common from "@/style/common.module.css";

import React from 'react';
import Link from "next/link";

const TopBar = () => {
    return (
        <main className={`${common.primarybg} ${styles.navbar}`}>

            <Link href="/" className={styles.logoBox}>
                <h2 className={styles.logo}> &#x3A;&nbsp;&#10101;<p className={styles.logoText}>&nbsp;ByteBrusters</p></h2>
            </Link>

        </main>
    );
};

export default TopBar;