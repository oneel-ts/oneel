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
            <div className={styles.textContainer}>
                <div className={`${styles.title} ${poppins.className}`}>
                    <TextField label={"Soluções Inteligentes para Impulsionar Seu Projeto"}/>
                </div>
                <div className={`${styles.subtitle} ${poppins.className}`}>
                    <TextField title={false}
                               label={"Transformamos ideias em resultados concretos, combinando tecnologia, trabalho dedicado e excelência em execução para impulsionar seus projetos de forma eficiente e segura."}/>
                </div>
                <div onClick={viewOurServices} className={styles.serviceButton}>
                    <TextField label={"View our services"} title={false}/>
                </div>
            </div>
        </Fragment>
    )
}