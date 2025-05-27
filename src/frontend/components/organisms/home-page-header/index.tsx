import {Fragment, useEffect, useState} from "react";
import styles from "./home-page-header.module.css"
import ButtonContactUs from "src/frontend/components/molecules/button-contact-us";
import Image from "next/image";
import oneel from "../../../../../public/assets/oneel.png"
import oneelArrowRigth from "../../../../../public/assets/2-arrow-oneel.png"
import oneelArrowLeft from "../../../../../public/assets/1-arrow-oneel.png"
import NavigateBar from "@/src/frontend/components/molecules/navigate-bar";

type Props = {
    handlerOpenForm: () => void;
}

type TranslateValues = {
    initialLeft: number;
    initialRight: number;
    expandedLeft: number;
    expandedRight: number;
}

export default function HeaderDefault({handlerOpenForm}: Props) {
    const [animationState, setAnimationState] = useState<'initial' | 'expanding' | 'finished'>('initial');
    const [isMobile, setIsMobile] = useState(false);
    const [translateValues, setTranslateValues] = useState<TranslateValues | null>(null);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            const newIsMobile = window.innerWidth <= 768;
            setIsMobile(newIsMobile);

            const newTranslateValues = newIsMobile
                ? {
                    initialLeft: 0,
                    initialRight: 0,
                    expandedLeft: -25,
                    expandedRight: 25
                }
                : {
                    initialLeft: -20,
                    initialRight: 20,
                    expandedLeft: -95,
                    expandedRight: 95
                };

            setTranslateValues(newTranslateValues);
            setIsInitialized(true);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    useEffect(() => {
        if (!isInitialized) return;

        const timeout = setTimeout(() => {
            setAnimationState('expanding');

            setTimeout(() => {
                setAnimationState('finished');
            }, 1000);
        }, 1000);

        return () => {
            clearTimeout(timeout);
        };
    }, [isInitialized]);

    if (!translateValues) {
        return null;
    }

    return (

        <Fragment>
            <div className={styles.containerPage}>
                <header className={styles.containerHeader}>
                    <figure className={styles.animationContainer}>
                        <figure
                            className={styles.centralImage}
                            style={{
                                opacity: animationState === 'initial' ? 0 : 1,
                                transition: 'opacity 0.8s ease-in-out'
                            }}
                        >
                            <Image
                                src={oneel}
                                alt={"Logo da Oneel"}
                                width={isMobile ? 60 : 220}
                                height={isMobile ? 120 : 480}
                                style={{borderRadius: "16px"}}
                            />
                        </figure>
                        <figure
                            className={styles.leftArrow}
                            style={{
                                transform: animationState !== 'initial'
                                    ? `translateX(${translateValues.expandedLeft}px)`
                                    : `translateX(${translateValues.initialLeft}px)`,
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image
                                src={oneelArrowLeft}
                                alt={"Seta esquerda da animação"}
                                width={isMobile ? 40 : 100}
                                height={isMobile ? 200 : 480}
                                style={{borderRadius: "16px"}}
                            />
                        </figure>
                        <figure
                            className={styles.rightArrow}
                            style={{
                                transform: animationState !== 'initial'
                                    ? `translateX(${translateValues.expandedRight}px)`
                                    : `translateX(${translateValues.initialRight}px)`,
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image
                                src={oneelArrowRigth}
                                alt={"Seta direita da animação"}
                                width={isMobile ? 40 : 100}
                                height={isMobile ? 200 : 480}
                                style={{borderRadius: "16px"}}
                            />
                        </figure>
                    </figure>
                    {!isMobile && <NavigateBar/>}
                    <ButtonContactUs handlerOpenForm={handlerOpenForm}/>
                </header>
            </div>
        </Fragment>
    )
}