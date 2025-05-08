import {Fragment, useEffect, useState} from "react";
import styles from "./home-page-header.module.css"
import NavigateBar from "@/src/frontend/components/molecules/navigate-bar";
import ButtonSignUp from "@/src/frontend/components/molecules/button-sign-up";
import Image from "next/image";
import oneel from "../../../../../public/assets/oneel.png"
import oneelArrowRigth from "../../../../../public/assets/2-arrow-oneel.png"
import oneelArrowLeft from "../../../../../public/assets/1-arrow-oneel.png"


type Props = {
    handlerOpenForm: () => void;
}

export default function HeaderDefault({handlerOpenForm} : Props) {
    const [animationState, setAnimationState] = useState<'initial' | 'expanding' | 'finished'>('initial');

    useEffect(() => {
        const timeout = setTimeout(() => {
            setAnimationState('expanding');

            setTimeout(() => {
                setAnimationState('finished');
            }, 1000);
        }, 1000);

        return () => clearTimeout(timeout);
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
                            <Image src={oneel} alt={"oneel"} width={220} height={480} style={{borderRadius:"16px"}}/>
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
                    <NavigateBar/>
                    <ButtonSignUp handlerOpenForm={handlerOpenForm}/>
                </header>
            </section>
        </Fragment>
    )
}