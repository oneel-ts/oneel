import { Fragment } from "react";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";
import styles from "./card-review.module.css";
import ReviewsDTO from "@/src/models/reviews-dto";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

type Props = {
    review: ReviewsDTO;
    index: number;
}

export default function CardReview ({review, index} : Props) {
    const formattedDate = review.review_date
        ? format(new Date(review.review_date), "MMMM dd, yyyy", { locale: enUS })
        : "Invalid Date";

    return (
        <Fragment>
            <section key={review.id ?? index} className={styles.containerReview}>
                <section className={styles.dataReview}>
                    <div className={styles.userContainer}>
                        <p className={styles.title}>{review.user_name}</p>
                        <CheckCircleIcon style={{ color: "#01AB31" }}/>
                    </div>
                    <p className={styles.description}>{review.description}</p>
                </section>
                <section className={styles.periodContainer}>
                    <p>Posted on {formattedDate}</p>
                </section>
            </section>
        </Fragment>
    )
}
