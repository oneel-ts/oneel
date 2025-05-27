
import styles from "./about-us-banner.module.css";
import Image from "next/image";
import image from "@/public/assets/empresario-de-baixo-angulo.jpg";

type Props = {
    id: string;
}

export default function AboutUsBanner ({id} : Props) {
    return (
        <section id={id} className={styles.contentContainer}>
            <article className={styles.containerBox}>
                <header className={styles.header}>
                    <h2>Oneel Tech Solutions</h2>
                </header>

                <section className={styles.aboutGrid}>
                    <article className={styles.aboutContent}>
                        <h3 className={styles.sectionTitle}>Who We Are</h3>
                        <p>
                            We are a technology company dedicated to providing innovative solutions
                            for your business. We offer programming services,
                            cybersecurity, cloud computing, 3D design, and much more, always focusing
                            on quality results and personalized service.
                        </p>
                    </article>
                    <figure className={styles.aboutImage}>
                        <Image
                            src={image}
                            alt="Equipe da Oneel Tech Solutions"
                            width={image.width}
                            height={image.height}
                        />
                        <figcaption className="sr-only">Nossa equipe de profissionais</figcaption>
                    </figure>
                </section>
            </article>
        </section>
    )
}