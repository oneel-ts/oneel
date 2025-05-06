import {Fragment} from "react";
import styles from "./cards-home.module.css"

type Props = {
    cardIcon: any;
    cardTitle: string;
    cardDescription: string;
}

export default function CardsHome ({cardIcon, cardTitle, cardDescription} : Props) {
    return (
        <Fragment>
            <div className={styles.parent}>
                <div className={styles.card}>
                    <div className={styles.glass}></div>
                    <div className={styles.cardContent}>
                        <div className={styles.iconContainer}>
                            {cardIcon}
                        </div>
                        <div className={styles.titleContainer}>
                            <span className={styles.title}>{cardTitle}</span>
                        </div>
                        <div className={styles.descriptionContainer}>
                            <span className={styles.text}>{cardDescription}</span>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}