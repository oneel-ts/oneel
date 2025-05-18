import {Fragment, useEffect, useRef, useState} from "react";
import styles from "./mvv-container.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCompass, faHandshake, faLightbulb} from "@fortawesome/free-solid-svg-icons";

export default function MvvContainer () {
    const [isVisible, setIsVisible] = useState(false);
    const mvvSectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            {
                threshold: 0.2
            }
        );

        if (mvvSectionRef.current) {
            observer.observe(mvvSectionRef.current);
        }

        return () => {
            if (mvvSectionRef.current) {
                observer.unobserve(mvvSectionRef.current);
            }
        };
    }, []);

    return (
        <Fragment>
            <div className={styles.mvvContainer}>
                <div className={styles.mvvInner}>
                    <div ref={mvvSectionRef} className={styles.mvvSection}>
                        <div className={`${styles.mvvCard} ${isVisible ? styles.mvvCardVisible : ''}`}>
                            <div className={styles.mvvIconWrapper}>
                                <FontAwesomeIcon icon={faCompass} className={styles.mvvIcon} />
                            </div>
                            <h3>Missão</h3>
                            <p>
                                Implementar soluções tecnológicas inovadoras e de alta qualidade que
                                potencializem o crescimento das comunidades brasileiras nos EUA,
                                transformando desafios em oportunidades através da excelência técnica.
                            </p>
                        </div>

                        <div className={`${styles.mvvCard} ${isVisible ? styles.mvvCardVisible : ''}`}>
                            <div className={styles.mvvIconWrapper}>
                                <FontAwesomeIcon icon={faLightbulb} className={styles.mvvIcon} />
                            </div>
                            <h3>Visão</h3>
                            <p>
                                Ser reconhecida como referência em soluções tecnológicas sob demanda
                                para comunidades brasileiras nos EUA até 2030, estabelecendo novos
                                padrões de inovação e acessibilidade.
                            </p>
                        </div>

                        <div className={`${styles.mvvCard} ${isVisible ? styles.mvvCardVisible : ''}`}>
                            <div className={styles.mvvIconWrapper}>
                                <FontAwesomeIcon icon={faHandshake} className={styles.mvvIcon} />
                            </div>
                            <h3>Valores</h3>
                            <p>
                                Acreditamos na potência da juventude e na força de grandes sonhos, usando
                                a tecnologia com propósito para transformar realidades. Colocamos a humanidade
                                em primeiro lugar, atuando com colaboração, transparência e confiança para
                                crescer junto com nossos clientes e equipe.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}