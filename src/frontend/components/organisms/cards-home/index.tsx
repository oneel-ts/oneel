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
            <li className={styles.parent}>
                <article className={styles.card}>
                    <div className={styles.glass} aria-hidden="true"></div>
                    <div className={styles.cardContent}>
                        <figure className={styles.iconContainer} aria-hidden="true">
                            {cardIcon}
                        </figure>
                        <header className={styles.titleContainer}>
                            <h3 className={styles.title}>{cardTitle}</h3>
                        </header>
                        <div className={styles.descriptionContainer}>
                            <p className={styles.text}>{cardDescription}</p>
                        </div>
                    </div>
                </article>
            </li>
        </Fragment>
    )
}