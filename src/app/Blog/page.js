import common from '@/style/common.module.css';
import Blog from "@/component/Blogs"

const Notes = [
    {
        NotesId: 1,
        NotesTitle: "HTML",
        NotesLanguages: "HTML",
        NotesBlogPostUrl: "/Khizer.jpg",
        NotesBlogPostAuthor: "Shaikh Mohammed Khizer",
        NotesImageUrl: "",
        NotesDescription: ""
    },
    {
        NotesId: 2,
        NotesTitle: "Tutorial 2",
        NotesLanguages: "CSS",
        NotesVideoUrl: "",
        NotesImageUrl: "",
        NotesDescription: ""
    },
    {
        NotesId: 3,
        NotesTitle: "Tutorial 3",
        NotesLanguages: "JavaScript",
        NotesVideoUrl: "",
        NotesImageUrl: "",
        NotesDescription: ""
    },
    {
        NotesId: 4,
        NotesTitle: "Tutorial 4",
        NotesLanguages: "C",
        NotesVideoUrl: "",
        NotesImageUrl: "",
        NotesDescription: ""
    },
    {
        NotesId: 5,
        NotesTitle: "Tutorial 5",
        NotesLanguages: "Python",
        NotesVideoUrl: "",
        NotesImageUrl: "",
        NotesDescription: "",
        NotesURL: "https://lms.ljinstitutes.org/moodle/pluginfile.php/49762/mod_resource/content/1/Python%20Notes%20Ch%201.pdf"
    }

];

const Page = () => {
    return (
        <div className={common.main}>
           <Blog Notes={Notes} />
        </div>
    );
};

export default Page;