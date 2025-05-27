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
        <div className={styles.containerSkills}>
            <nav className={styles.tabsContainer} aria-label="Categorias de habilidades">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        className={`${styles.tabButton} ${activeTab === tab.id ? styles.active : ""}`}
                        onClick={() => handleTabChange(tab.id)}
                        aria-selected={activeTab === tab.id}
                        aria-controls={`tab-content-${tab.id}`}
                        id={`tab-${tab.id}`}
                        role="tab"
                    >
                        {tab.label}
                    </button>
                ))}
            </nav>
            <div className={styles.contentContainer}>
                <div
                    className={`${styles.content} ${animating ? styles.fadeOut : styles.fadeIn}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeTab}`}
                    id={`tab-content-${activeTab}`}
                >
                    {activeTab === "frontend" && (
                        <ul className={styles.techGrid} aria-label="Tecnologias Frontend">
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={react} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#61DAFB"}}>React</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={javascript} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#F7DF1E"}}>JavaScript</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={html} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#E34F26"}}>HTML</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={css} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#1572B6"}}>CSS</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={angular} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#E23237"}}>Angular</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={vuejs} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#4FC08D"}}>Vue.js</figcaption>
                                </figure>
                            </li>
                        </ul>
                    )}

                    {activeTab === "backend" && (
                        <ul className={styles.techGrid} aria-label="Tecnologias Backend">
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={node} width={100} height={100}/>
                                    <figcaption className={styles.techName}>Node.js</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={phyton} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#3776AB"}}>Python</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={java} width={90} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#5382A1"}}>Java</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={php} width={100} height={100}/>
                                    <figcaption className={styles.techName}>PHP</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={ruby} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#CC342D"}}>Ruby</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={cplus} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#1A4674"}}>C#</figcaption>
                                </figure>
                            </li>
                        </ul>
                    )}

                    {activeTab === "architecture" && (
                        <ul className={styles.techGrid} aria-label="Tecnologias de Arquitetura">
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={lumion} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#FFFFFF"}}>Lumion</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={sketchup} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#005F9E"}}>Sketchup</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={enscape} width={90} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#EE6C0F"}}>Enscape</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={autocad} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#E51051"}}>Autocad</figcaption>
                                </figure>
                            </li>
                        </ul>
                    )}

                    {activeTab === "cloud" && (
                        <ul className={styles.techGrid} aria-label="Tecnologias de Nuvem e Banco de Dados">
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={googleCloud} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#FFFFFF"}}>Google Cloud</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={aws} width={100} height={100}/>
                                    <figcaption className={styles.techName}>AWS</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={azure} width={100} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#008CDB"}}>Azure</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={mongoDB} width={175} height={150}/>
                                    <figcaption className={styles.techName}>MongoDB</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={mysql} width={150} height={100}/>
                                    <figcaption className={styles.techName}>MySQL</figcaption>
                                </figure>
                            </li>
                            <li className={styles.techItem}>
                                <figure>
                                    <Image alt="" src={postgres} width={85} height={100}/>
                                    <figcaption className={styles.techName} style={{color: "#326990"}}>PostgreSQL</figcaption>
                                </figure>
                            </li>
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
}