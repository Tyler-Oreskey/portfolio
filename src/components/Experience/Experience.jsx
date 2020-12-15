import React from "react";

import classes from "./Experience.module.css";
import tapOnItLogo from "../../assets/images/logos/taponit.jpg";
import hachLogo from "../../assets/images/logos/hach.jpg";

const Experience = () => {
    const jobs = [
        {
            companyName: "TapOnIt",
            title: "Full Stack Developer",
            startDate: "May 2019",
            endDate: "October 2020",
            responsibilities: [
                "Develop and maintain a marketing application used by consumers interested in saving money by receiving offers on their phones.",
                "Programmatically constructed intelligent solutions with a team that drove business revenue for future expansion.",
                "When necessary, performed immediate application support to sustain the flow of revenue and client contentment"
            ],
            accomplishments: [
                "Developed an automated NodeJS multi report emailing system that retrieved database numbers, compiled them into a PDF and sent them to assigned emails during schedule time.",
                "Migrated all databases from MSSQL to PostrgreSQL in order to savet he company money and to enhance performace within the application.",
                "Onboarded an entry level software engineer."
            ],
            logo: tapOnItLogo,
            logoURL: "https://yt3.ggpht.com/a/AATXAJzEOOhfxYO0jX2be3cD6umzEl8-xPDwSo545gtYEA=s900-c-k-c0x00ffffff-no-rj"
        },
        {
            companyName: "Hach Company",
            title: "Micro Soldering Tech",
            startDate: "May 2016",
            endDate: "August 2016",
            responsibilities: [
                "Created water quality test electronics by hand soldering surface mount and through hole components on circuit boards.",
                "Controlled wave solder system to build complex circuit assembly and assured optimal board test by quality inspection.",
                "Breathe life into the product by flashing firmware into the product NAND. Helped co-workers grow by conducting board assembly line training."
            ],
            accomplishments: [
                "Became the main operator and trainer of the solder flow machine and slide line position.",
                "Moved up to the micro soldering tech team to complete complex soldering operations.",
            ],
            logo: hachLogo,
            logoURL: "https://elderconstructioninc.com/wp-content/uploads/2018/02/Hach-logo.jpg"
        }
    ];

    const cards = jobs.map((job, index) => {
        return (
            <div key={index} className={`${classes.ExperienceCard} card`}>
                <div className="card-header">
                    <h3><img className={classes.BusinessLogo} src={job.logo} alt="logo" />{job.companyName}</h3>
                    <span>{job.startDate} - {job.endDate}</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <ul>
                        {job.responsibilities.map((responsibility) => <li key={responsibility}>{responsibility}</li>)}
                    </ul>
                    <h5 className="card-title">Accomplishments</h5>
                    <ul>
                        {job.accomplishments.map((accomplishment) => <li key={accomplishment}>{accomplishment}</li>)}
                    </ul>
                </div>
            </div >
        );
    });

    return (
        <div className={`${classes.Experience} container`}>
            {cards}
        </div>
    )
};

export default Experience;

