import {Fragment} from "react";
import styles from "./about-us-banner.module.css";
import Image from "next/image";
import image from "@/public/assets/empresario-de-baixo-angulo.jpg";

export default function AboutUsBanner () {
    return (
        <Fragment>
            <div className={styles.contentContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.header}>
                        <h1>Oneel Tech Solutions</h1>
                    </div>

                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <h2 className={styles.sectionTitle}>Who We Are</h2>
                            <p>
                                We are a technology company dedicated to providing innovative solutions
                                for your business. We offer programming services,
                                cybersecurity, cloud computing, 3D design, and much more, always focusing
                                on quality results and personalized service.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <Image
                                src={image}
                                alt="Oneel Tech Solutions Team"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}