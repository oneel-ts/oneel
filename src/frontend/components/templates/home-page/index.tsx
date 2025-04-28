import {Fragment} from "react";
import styles from "./home-page.module.css";
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";
import {poppins} from "@/src/frontend/styles/fonts";
import Banner from "@/src/frontend/components/organisms/banner";
import CardsHome from "@/src/frontend/components/organisms/cards-home";

export default function HomePage() {

    return (
        <Fragment>
            <section className={`${styles.container} ${poppins.className}`}>
                <section className={styles.containerBox}>
                    <HeaderDefault/>
                    <div className={styles.contentContainer}>
                        <Banner/>
                        <CardsHome/>
                    </div>
                    {/*    /!*<ContactUsForm/>*!/*/}
                </section>
            </section>
        </Fragment>
    );
}