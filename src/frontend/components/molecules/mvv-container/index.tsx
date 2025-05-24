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

        const currentElement = mvvSectionRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
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
                            <h3>Mission</h3>
                            <p>
                                To implement innovative, high-quality technological solutions that
                                enhance the growth of Brazilian communities in the USA,
                                transforming challenges into opportunities through technical excellence.
                            </p>
                        </div>

                        <div className={`${styles.mvvCard} ${isVisible ? styles.mvvCardVisible : ''}`}>
                            <div className={styles.mvvIconWrapper}>
                                <FontAwesomeIcon icon={faLightbulb} className={styles.mvvIcon} />
                            </div>
                            <h3>Vision</h3>
                            <p>
                                To be recognized as a reference in on-demand technological solutions
                                for Brazilian communities in the USA by 2030, establishing new
                                standards of innovation and accessibility.
                            </p>
                        </div>

                        <div className={`${styles.mvvCard} ${isVisible ? styles.mvvCardVisible : ''}`}>
                            <div className={styles.mvvIconWrapper}>
                                <FontAwesomeIcon icon={faHandshake} className={styles.mvvIcon} />
                            </div>
                            <h3>Values</h3>
                            <p>
                                We believe in the power of youth and the strength of big dreams, using
                                technology with purpose to transform realities. We put humanity
                                first, operating with collaboration, transparency, and trust to
                                grow together with our clients and team.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}