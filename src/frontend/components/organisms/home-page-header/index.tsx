import {Fragment, useEffect, useState} from "react";
import styles from "./home-page-header.module.css"
import NavigateBar from "@/src/frontend/components/molecules/navigate-bar";
import ButtonContactUs from "src/frontend/components/molecules/button-contact-us";
import Image from "next/image";
import oneel from "../../../../../public/assets/oneel.png"
import oneelArrowRigth from "../../../../../public/assets/2-arrow-oneel.png"
import oneelArrowLeft from "../../../../../public/assets/1-arrow-oneel.png"

type Props = {
    handlerOpenForm: () => void;
}

export default function HeaderDefault({handlerOpenForm} : Props) {
    const [animationState, setAnimationState] = useState<'initial' | 'expanding' | 'finished'>('initial');
    const [isMobile, setIsMobile] = useState(false);
    const [translateValues, setTranslateValues] = useState({
        initialLeft: -20,
        initialRight: 20,
        expandedLeft: -95,
        expandedRight: 95
    });

    useEffect(() => {
        const getTranslateValues = () => {
            if (window.innerWidth <= 480) {
                return {
                    initialLeft: -8,
                    initialRight: 8,
                    expandedLeft: -25,
                    expandedRight: 25
                };
            } else if (window.innerWidth <= 768) {
                return {
                    initialLeft: -10,
                    initialRight: 10,
                    expandedLeft: -35,
                    expandedRight: 35
                };
            } else {
                return {
                    initialLeft: -20,
                    initialRight: 20,
                    expandedLeft: -95,
                    expandedRight: 95
                };
            }
        };

        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
            setTranslateValues(getTranslateValues());
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        const timeout = setTimeout(() => {
            setAnimationState('expanding');

            setTimeout(() => {
                setAnimationState('finished');
            }, 1000);
        }, 1000);

        return () => {
            clearTimeout(timeout);
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <Fragment>
            <section className={styles.containerPage}>
                <header className={styles.containerHeader}>
                    <div className={styles.animationContainer}>
                        <div
                            className={styles.centralImage}
                            style={{
                                opacity: animationState === 'initial' ? 0 : 1,
                                transition: 'opacity 0.8s ease-in-out'
                            }}
                        >
                            <Image
                                src={oneel}
                                alt={"oneel"}
                                width={isMobile ? 60 : 220}
                                height={isMobile ? 120 : 480}
                                style={{borderRadius:"16px"}}
                            />
                        </div>
                        <div
                            className={styles.leftArrow}
                            style={{
                                transform: animationState !== 'initial'
                                    ? `translateX(${translateValues.expandedLeft}px)`
                                    : `translateX(${translateValues.initialLeft}px)`,
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image src={oneelArrowLeft} alt={"oneel"}
                                   width={isMobile ? 40 : 100}
                                   height={isMobile ? 200 : 480}
                                   style={{borderRadius:"16px"}}
                            />
                        </div>
                        <div
                            className={styles.rightArrow}
                            style={{
                                transform: animationState !== 'initial'
                                    ? `translateX(${translateValues.expandedRight}px)`
                                    : `translateX(${translateValues.initialRight}px)`,
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image src={oneelArrowRigth} alt={"oneel"}
                                   width={isMobile ? 40 : 100}
                                   height={isMobile ? 200 : 480}
                                   style={{borderRadius:"16px"}}
                            />
                        </div>
                    </div>
                    {!isMobile && <NavigateBar />}
                    <ButtonContactUs handlerOpenForm={handlerOpenForm}/>
                </header>
            </section>
        </Fragment>
    )
}