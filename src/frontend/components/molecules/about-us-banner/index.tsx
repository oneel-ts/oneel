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
                            <h2 className={styles.sectionTitle}>Quem Somos</h2>
                            <p>
                                Somos uma empresa de tecnologia dedicada a fornecer soluções inovadoras
                                para seu negócio. Oferecemos serviços de programação,
                                cibersegurança, cloud computing, design 3D e muito mais, sempre com foco
                                em resultados de qualidade e um atendimento personalizado.
                            </p>
                        </div>
                        <div className={styles.aboutImage}>
                            <Image
                                src={image}
                                alt="Equipe Oneel Tech Solutions"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}