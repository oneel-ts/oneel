import { Fragment } from "react";
import styles from "./button-sign-up.module.css";
import TextField from "@/src/frontend/components/atoms/text-field";
import { orbitron } from "@/src/frontend/styles/fonts";

export default function ButtonSignUp() {
    return (
        <Fragment>
            <div className={`${styles.containerButton} ${orbitron.className}`}>
                <TextField label={"Contac Us"}/>
            </div>
        </Fragment>
    );
}