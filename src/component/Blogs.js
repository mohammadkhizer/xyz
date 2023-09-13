'use client'
import style from '@/style/Blog.module.css';
import common from "@/style/common.module.css"
import Link from "next/link";
import { useState } from "react";
import Image from "next/image";

const Blog = ({ Notes }) => {

    const [selectedLanguages , setselectedLanguages] = useState("All");
    const handleLanguagesChange = (event) => {
        setselectedLanguages(event.target.value);
    };

    const filteredNotes = selectedLanguages === "All" ? Notes : Notes.filter(Notess => Notess.Languages === selectedLanguages );

    return (
        <>
            <h2 className={common.commonHeading}>Blogs</h2>
            <div className={common.hiddne}>
                <label htmlFor="Languages"> Filter Tutorials By Language: </label>&emsp;
                <select id="Languages" value={selectedLanguages} className={style.selectBox} onChange={handleLanguagesChange}>
                    <option value="All">All</option>
                    <option value="HTML">HTML</option>
                    <option value="CSS">CSS</option>
                    <option value="JavaScript">JavaScript</option>
                    <option value="C">C</option>
                    <option value="Python">Python</option>

                </select>
            </div>
            <div className={style.center}>
                {filteredNotes.map((Notess => (
                   <div className={style.card}>
                       <div className={style.flex}>
                            <Image src={Notess.NotesBlogPostUrl} alt={Notess.NotesTitle} height={100} width={100} className={style.image} />
                            <p>&nbsp;{Notess.NotesBlogPostAuthor}</p><br/>
                       </div><br/><br/>
                       <h1>{Notess.NotesTitle}</h1>
                       <p>{`${Notess.NotesDescription}`}</p>
                   </div>
                )))

                }
            </div>
        </>
    );
};

export default Blog;