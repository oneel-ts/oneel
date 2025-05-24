import {Fragment, useEffect, useState} from "react";
import styles from "./button-sign-up.module.css";
import TextField from "@/src/frontend/components/atoms/text-field";
import { poppins } from "@/src/frontend/styles/fonts";

type Props = {
    handlerOpenForm: () => void;
}

export default function ButtonContactUs ({handlerOpenForm}: Props) {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);

        return () => {
            window.removeEventListener('resize', checkMobile);
        };
    }, []);

    return (
        <Fragment>
            <div onClick={handlerOpenForm} className={`${styles.containerButton} ${poppins.className}`}>
                <TextField
                    label={isMobile ? "Contatc us" : "Contac Us"}
                />
            </div>
        </Fragment>
    );
}