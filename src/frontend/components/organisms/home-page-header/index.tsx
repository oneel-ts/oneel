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

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
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
                                width={isMobile ? 120 : 220} 
                                height={isMobile ? 240 : 480} 
                                style={{borderRadius:"16px"}}
                            />
                        </div>
                        <div
                            className={styles.leftArrow}
                            style={{
                                transform: animationState !== 'initial' ? 'translateX(-95px)' : 'translateX(-20px)',
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image src={oneelArrowLeft} alt={"oneel"} width={100} height={480} style={{borderRadius:"16px"}}/>
                        </div>
                        <div
                            className={styles.rightArrow}
                            style={{
                                transform: animationState !== 'initial' ? 'translateX(95px)' : 'translateX(20px)',
                                opacity: animationState === 'finished' ? 0 : 1,
                                transition: 'transform 1s ease-in-out, opacity 0.5s ease-in-out'
                            }}
                        >
                            <Image src={oneelArrowRigth} alt={"oneel"} width={100} height={480} style={{borderRadius:"16px"}}/>
                        </div>
                    </div>
                    {!isMobile && <NavigateBar />}
                    <ButtonContactUs handlerOpenForm={handlerOpenForm}/>
                </header>
            </section>
        </Fragment>
    )
}