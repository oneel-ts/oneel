import {Fragment} from "react";
import styles from "./home-page.module.css"
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";
import ModalForm from "@/src/frontend/components/organisms/modal-form";


export default function HomePage() {

    const handlerOpenForm = () => {}



    return (
        <Fragment>
            <section className={styles.container}>
                <section className={styles.containerBox}>
                    <HeaderDefault handlerOpenForm={handlerOpenForm}/>
                    <ModalForm/>
                </section>
            </section>
        </Fragment>
    );
}