import {Fragment, JSX} from "react";
import styles from "./home-page.module.css";
import HeaderDefault from "@/src/frontend/components/organisms/home-page-header";
import Banner from "@/src/frontend/components/organisms/banner";
import CardsHome from "@/src/frontend/components/organisms/cards-home";
import {poppins} from "@/src/frontend/styles/fonts";
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import ScheduleIcon from '@mui/icons-material/Schedule';
import Services from "@/src/frontend/components/organisms/services";
import Projects from "@/src/frontend/components/organisms/projects";
import AboutUs from "@/src/frontend/components/organisms/about-us";
import ContactUsForm from "@/src/frontend/components/organisms/contact-us-form";

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

    const handlerOpenForm = () => {
        const formElement = document.getElementById("form");
        if (formElement) {
            formElement.scrollIntoView({ behavior: "smooth" });
        }
    };

    const viewOurServices = () => {
        const element = document.getElementById('services');
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    }

    return (
        <Fragment>
            <main className={`${styles.container} ${poppins.className}`}>
                <HeaderDefault handlerOpenForm={handlerOpenForm}/>
                <section id={"home"} className={styles.containerBox}>
                    <article className={styles.contentContainer}>
                        <Banner viewOurServices={viewOurServices}/>
                        <ul className={styles.containerCards}>
                            {cardsInfos.map((card, index) => (
                                <CardsHome
                                    key={index}
                                    cardDescription={card.description}
                                    cardIcon={card.icon}
                                    cardTitle={card.title}
                                />
                            ))}
                        </ul>
                    </article>
                </section>
                <aside className={styles.containerService}>
                    <Services id={"services"}/>
                    <Projects id={"projects"}/>
                    <AboutUs id={"about"}/>
                    <ContactUsForm id={"form"}/>
                </aside>
            </main>
        </Fragment>
    );
}