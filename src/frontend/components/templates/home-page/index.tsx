import {Fragment, JSX} from "react";
import styles from "./home-page.module.css";
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";
import Banner from "@/src/frontend/components/organisms/banner";
import CardsHome from "@/src/frontend/components/organisms/cards-home";
import {poppins} from "@/src/frontend/styles/fonts";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ScheduleIcon from '@mui/icons-material/Schedule';
import TextField from "../../atoms/text-field";
import Services from "@/src/frontend/components/organisms/services";

type cardsDto = {
    icon: JSX.Element;
    title: string;
    description: string;
}

export default function Brands() {

    const cardsInfos: cardsDto[] = [
        {
            icon: <LeaderboardIcon sx={{fontSize: 48, color: 'white'}}/>,
            title: "Commitment to Delivering Results",
            description: "We focus on achieving real outcomes that move your business forward, offering efficient and tailored solutions with a results-driven mindset.",
        },
        {
            icon: <AutoAwesomeIcon sx={{fontSize: 48, color: 'white'}}/>,
            title: "Embracing Technology and Innovation",
            description: "We stay ahead with modern, secure, and scalable solutions. Innovation is key to creating meaningful, transformative results.",
        },
        {
            icon: <ScheduleIcon sx={{fontSize: 48, color: 'white'}}/>,
            title: "Upholding Timeliness and Responsibility",
            description: "We respect your time by meeting deadlines and keeping you informed. Accountability is central to our workflow.",
        }
    ]


    return (
        <Fragment>
            <section className={`${styles.container} ${poppins.className}`}>
                <section className={styles.containerBox}>
                    <HeaderDefault/>
                    <div className={styles.contentContainer}>
                        <Banner/>
                        <div className={styles.containerCards}>
                            {cardsInfos.map((card, index) => (
                                <CardsHome
                                    key={index}
                                    cardDescription={card.description}
                                    cardIcon={card.icon}
                                    cardTitle={card.title}
                                />
                            ))}
                        </div>
                    </div>
                </section>
                <div className={styles.containerService}>
                    <Services/>
                </div>
            </section>
        </Fragment>
    );
}