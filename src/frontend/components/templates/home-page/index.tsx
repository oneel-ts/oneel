import {Fragment} from "react";
import styles from "./home-page.module.css"
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";
import ContactUsForm from "src/frontend/components/organisms/contact-us-form";


export default function HomePage() {

    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HeaderDefault/>
                    <ContactUsForm/>
                </section>
            </section>
        </Fragment>
    );
}