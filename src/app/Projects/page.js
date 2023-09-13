import React from 'react';
import Project from "@/component/ProjectSection";
import common from "@/style/common.module.css"

const Page = () => {

return (
        <div className={common.main}>
            <h2 className={common.commonHeading}>Our Projects</h2>
            <Project />
        </div>
    );
};

export default Page;