import {Fragment} from "react";
import Ods from "@/src/frontend/components/molecules/ods";
import MvvContainer from "@/src/frontend/components/molecules/mvv-container";
import AboutUsBanner from "@/src/frontend/components/molecules/about-us-banner";
import styles from "./about-us.module.css";

type Props = {
    id: string;
}

export default function AboutUs({id}: Props) {
    return (
        <Fragment>
            <section className={styles.container}>
                <AboutUsBanner id={id}/>
                <Ods
                    ids={[1, 2, 4, 8, 9, 10, 11, 17]}
                    size="large"
                    layout="grid"
                    onClick={() => {}}
                />
                <MvvContainer/>
            </section>
        </Fragment>
    );
}