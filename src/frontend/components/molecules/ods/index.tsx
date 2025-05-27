import { useEffect, useRef, CSSProperties } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import odsLogo from "../../../../../public/assets/ods.png";
import {
    faUtensils,
    faGraduationCap,
    faBriefcase,
    faIndustry,
    faBalanceScale,
    faCity,
    faHandshake,
    faHandHoldingHeart
} from "@fortawesome/free-solid-svg-icons";
import styles from "./ods.module.css";
import Image from "next/image";


const sdgItems = [
    { id: 9, icon: faIndustry, title: "Industry and Innovation", description: "Build resilient infrastructure and promote inclusive industrialization.", color: "#64dfdf", glowColor: "rgba(100, 223, 223, 0.4)" },
    { id: 11, icon: faCity, title: "Sustainable Cities", description: "Make cities and human settlements inclusive, safe, and sustainable.", color: "#48bfe3", glowColor: "rgba(72, 191, 227, 0.4)" },
    { id: 2, icon: faUtensils, title: "Zero Hunger", description: "End hunger, achieve food security and improved nutrition.", color: "#4ea8de", glowColor: "rgba(78, 168, 222, 0.4)" },
    { id: 1, icon: faHandHoldingHeart, title: "No Poverty", description: "End poverty in all its forms everywhere.", color: "#4361ee", glowColor: "rgba(67, 97, 238, 0.4)" },
    { id: 10, icon: faBalanceScale, title: "Reduced Inequalities", description: "Reduce inequality within and among countries.", color: "#3f37c9", glowColor: "rgba(63, 55, 201, 0.4)" },
    { id: 8, icon: faBriefcase, title: "Decent Work", description: "Promote sustained, inclusive and sustainable economic growth.", color: "#4c3dc9", glowColor: "rgba(76, 61, 201, 0.4)" },
    { id: 4, icon: faGraduationCap, title: "Quality Education", description: "Ensure inclusive, equitable and quality education.", color: "#5e60ce", glowColor: "rgba(94, 96, 206, 0.4)" },
    { id: 17, icon: faHandshake, title: "Partnerships for the Goals", description: "Strengthen implementation means and revitalize the global partnership.", color: "#7209b7", glowColor: "rgba(114, 9, 183, 0.4)" }
];


type OdsProps = {
    ids?: number[];
    showTitle?: boolean;
    size?: 'small' | 'medium' | 'large';
    layout?: 'grid' | 'horizontal' | 'vertical';
    onClick?: (id: number) => void;
    style?: CSSProperties;
};

export default function Ods({
                                ids,
                                onClick,
                                style
                            }: OdsProps) {
    const containerRef = useRef<HTMLElement>(null);

    const items = ids ? sdgItems.filter(item => ids.includes(item.id)) : sdgItems;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        // Capturar o elemento atual em uma variável
        const currentElement = containerRef.current;

        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            // Usar a variável capturada em vez de containerRef.current
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, []);

    const handleItemClick = (id: number) => {
        if (onClick) {
            onClick(id);
        }
    };

    return (
        <section
            ref={containerRef}
            className={styles.odsContainer}
            style={style}
        >
            <article className={styles.odsInner}>
                <header className={styles.odsTitle}>
                    <figure className={styles.odsFlexContainer}>
                        <Image
                            src={odsLogo}
                            alt="Logotipo dos Objetivos de Desenvolvimento Sustentável"
                            width={300}
                            height={200}
                            className={styles.odsImageContainer}
                        />
                        <figcaption className={styles.odsTextContainer}>
                            <h2>Sustainable Development Goals</h2>
                            <hr className={styles.odsDivider} aria-hidden="true" />
                            <p>
                                Our commitment to the UN 2030 Agenda and the development of solutions
                                that positively impact society and the planet.
                            </p>
                        </figcaption>
                    </figure>
                </header>

                <section className={styles.odsGridContainer}>
                    <ul className={styles.odsGrid} aria-label="Lista de Objetivos de Desenvolvimento Sustentável">
                        {items.map((item) => (
                            <li
                                key={item.id}
                                className={styles.odsCard}
                                onClick={() => handleItemClick(item.id)}
                            >
                                <figure
                                    className={styles.odsIconBox}
                                    style={{
                                        background: `rgba(${item.color.replace('#', '')
                                            .match(/.{2}/g)?.map(c => parseInt(c, 16))
                                            .join(', ')}, 0.1)`
                                    }}
                                    aria-hidden="true"
                                >
                                    <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
                                </figure>
                                <article className={styles.odsContent}>
                                    <h3 style={{
                                        color: item.color,
                                        textShadow: `0 0 10px ${item.glowColor}`
                                    }}>
                                        SDG {item.id}: {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </article>
                            </li>
                        ))}
                    </ul>
                </section>
            </article>
        </section>
    );
}