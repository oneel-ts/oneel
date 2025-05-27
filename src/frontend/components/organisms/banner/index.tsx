import {Fragment} from "react";
import styles from "./banner.module.css";
import {poppins} from "@/src/frontend/styles/fonts";
import TextField from "@/src/frontend/components/atoms/text-field";

type Props = {
    viewOurServices: () => void;
}

export default function Banner ({viewOurServices} : Props) {
    return (
        <Fragment>
            <section className={styles.textContainer}>
                <h1 className={`${styles.title} ${poppins.className}`}>
                    <TextField label={"Smart Solutions to Boost Your Project"}/>
                </h1>
                <div className={`${styles.subtitle} ${poppins.className}`}>
                    <TextField title={false}
                               label={"We transform ideas into concrete results, combining technology, dedicated work, and excellence in execution to drive your projects efficiently and securely."}/>
                </div>
                <button
                    onClick={viewOurServices}
                    className={styles.serviceButton}
                    type="button"
                    aria-label="Ver nossos serviços"
                >
                    <TextField label={"View our services"} title={false}/>
                </button>
            </section>
        </Fragment>
    )
}