import { Fragment} from "react";
import styles from "./home-page.module.css";
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";

export default function HomePage() {

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HeaderDefault/>
                    <div className={styles.contentContainer}>

                    </div>
                {/*    /!*<ContactUsForm/>*!/*/}
                </section>
            </section>
        </Fragment>
    );
}