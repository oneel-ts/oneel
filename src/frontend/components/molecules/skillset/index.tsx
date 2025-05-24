import {Fragment, useState} from "react";
import styles from "./skillset.module.css";
import react from "../../../../../public/assets/skills-logo/Reactmini.svg";
import javascript from "../../../../../public/assets/skills-logo/javascript.svg";
import html from "../../../../../public/assets/skills-logo/html-5.svg";
import css from "../../../../../public/assets/skills-logo/css-3-official.svg";
import angular from "../../../../../public/assets/skills-logo/angular-icon.svg";
import vuejs from "../../../../../public/assets/skills-logo/vue.svg";
import node  from "../../../../../public/assets/skills-logo/nodejs_horizotal.svg";
import php from "../../../../../public/assets/skills-logo/php_black.svg";
import phyton from "../../../../../public/assets/skills-logo/python.svg";
import java from "../../../../../public/assets/skills-logo/java.svg";
import cplus from "../../../../../public/assets/skills-logo/c.svg";
import ruby from "../../../../../public/assets/skills-logo/ruby.svg";
import googleCloud from "../../../../../public/assets/skills-logo/google-cloud.svg";
import aws from "../../../../../public/assets/skills-logo/aws.svg";
import azure from "../../../../../public/assets/skills-logo/azure.svg";
import mongoDB from "../../../../../public/assets/skills-logo/mongoDB.png";
import mysql from "../../../../../public/assets/skills-logo/logo-mysql.png";
import postgres from "../../../../../public/assets/skills-logo/Postgresql_elephant.svg.png";
import lumion from "../../../../../public/assets/skills-logo/Lumion icon.png";
import sketchup from "../../../../../public/assets/skills-logo/Icon Sketchup.png";
import enscape from "../../../../../public/assets/skills-logo/Ensccape icon.png";
import autocad from "../../../../../public/assets/skills-logo/Autocad Icon.png";
import Image from "next/image";

export default function Skillset() {
    const [activeTab, setActiveTab] = useState("frontend");
    const [animating, setAnimating] = useState(false);

    const handleTabChange = (tab: string) => {
        if (tab !== activeTab && !animating) {
            setAnimating(true);
            setTimeout(() => {
                setActiveTab(tab);
                setAnimating(false);
            }, 300);
        }
    };

    const tabs = [
        { id: "frontend", label: "Frontend" },
        { id: "backend", label: "Backend" },
        { id: "architecture", label: "Architecture" },
        { id: "cloud", label: "cloud/data" }
    ];

    return (
        <Fragment>
            <div className={styles.containerSkills}>
                <div className={styles.tabsContainer}>
                    {tabs.map((tab) => (
                        <button
                            key={tab.id}
                            className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                            onClick={() => handleTabChange(tab.id)}
                        >
                            {tab.label}
                        </button>
                    ))}
                </div>
                <div className={styles.contentContainer}>
                    <div className={`${styles.content} ${animating ? styles.fadeOut : styles.fadeIn}`}>
                        {activeTab === "frontend" && (
                            <div className={styles.tabContent}>
                                <div className={styles.techGrid}>
                                    <div className={styles.techItem}>
                                        <Image alt={"React"} src={react} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#61DAFB"}}>React</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"JavaScript"} src={javascript} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#F7DF1E"}}>JavaScript</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"HTML"} src={html} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#E34F26"}}>HTML</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"CSS"} src={css} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#1572B6"}}>CSS</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"Angular"} src={angular} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#E23237"}}>Angular</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"Vue.js"} src={vuejs} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#4FC08D"}}>Vue.js</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "backend" && (
                            <div className={styles.tabContent}>
                                <div className={styles.techGrid}>
                                    <div className={styles.techItem}>
                                        <Image alt={"Node.js"} src={node} width={100} height={100}/>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"Python"} src={phyton} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#3776AB"}}>Python</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"Java"} src={java} width={90} height={100}/>
                                        <span className={styles.techName} style={{color: "#5382A1"}}>Java</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"PHP"} src={php} width={100} height={100}/>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"Ruby"} src={ruby} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#CC342D"}}>Ruby</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"C#"} src={cplus} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#1A4674"}}>C#</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {activeTab === "architecture" && (
                            <div className={styles.techGrid}>
                                <div className={styles.techItem}>
                                    <Image alt={"Node.js"} src={lumion} width={100} height={100}/>
                                    <span className={styles.techName} style={{color: "#FFFFFF"}}>Lumion</span>
                                </div>
                                <div className={styles.techItem}>
                                    <Image alt={"Python"} src={sketchup} width={100} height={100}/>
                                    <span className={styles.techName} style={{color: "#005F9E"}}>Sketchup</span>
                                </div>
                                <div className={styles.techItem}>
                                    <Image alt={"Java"} src={enscape} width={90} height={100}/>
                                    <span className={styles.techName} style={{color: "#EE6C0F"}}>Enscape</span>
                                </div>
                                <div className={styles.techItem}>
                                    <Image alt={"PHP"} src={autocad} width={100} height={100}/>
                                    <span className={styles.techName} style={{color: "#E51051"}}>Autocad</span>
                                </div>
                            </div>
                        )}

                        {activeTab === "cloud" && (
                            <div className={styles.tabContent}>
                                <div className={styles.techGrid}>
                                    <div className={styles.techItem}>
                                        <Image alt={"React"} src={googleCloud} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#FFFFFF"}}>Google Cloud</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"JavaScript"} src={aws} width={100} height={100}/>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"HTML"} src={azure} width={100} height={100}/>
                                        <span className={styles.techName} style={{color: "#008CDB"}}>Azure</span>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"HTML"} src={mongoDB} width={175} height={150}/>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"HTML"} src={mysql} width={150} height={100}/>
                                    </div>
                                    <div className={styles.techItem}>
                                        <Image alt={"HTML"} src={postgres} width={85} height={100}/>
                                        <span className={styles.techName} style={{ color: "#326990" }}>PostgreSQL</span>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </Fragment>
    );
}