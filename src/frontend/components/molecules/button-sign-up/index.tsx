import {Fragment} from "react";
import styles from "./button-sign-up.module.css";
import TextField from "@/src/frontend/components/atoms/text-field";
import { poppins } from "@/src/frontend/styles/fonts";

type Props = {
    handlerOpenForm: () => void;
}

export default function ButtonSignUp({handlerOpenForm}: Props) {

    return (
        <Fragment>
            <div onClick={handlerOpenForm} className={`${styles.containerButton} ${poppins.className}`}>
                <TextField label={"Contac Us"}/>
            </div>
        </Fragment>
    );
}