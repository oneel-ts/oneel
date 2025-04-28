import {Fragment} from "react";
import styles from "./home-page-header.module.css"
import NavigateBar from "@/src/frontend/components/molecules/navigate-bar";
import ButtonSignUp from "@/src/frontend/components/molecules/button-sign-up";
import Image from "next/image";
import oneel from "../../../../../public/assets/img.png"

export default function HeaderDefault() {

    const handlerOpenForm = () => {

    }

    return (
        <Fragment>
            <section className={styles.containerPage}>
                <header className={styles.containerHeader}>
                    <div>
                        <Image src={oneel} alt={"oneel"} width={180} height={48} style={{borderRadius:"16px"}}/>
                    </div>
                        <NavigateBar/>
                        <ButtonSignUp handlerOpenForm={handlerOpenForm}/>
                </header>
            </section>
        </Fragment>
    )
}