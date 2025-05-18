import { useEffect, useState, useRef, CSSProperties } from 'react';
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
    { id: 9, icon: faIndustry, title: "Indústria e Inovação", description: "Construir infraestruturas resilientes e promover a industrialização inclusiva.", color: "#64dfdf", glowColor: "rgba(100, 223, 223, 0.4)" },
    { id: 11, icon: faCity, title: "Cidades Sustentáveis", description: "Tornar as cidades e os assentamentos humanos inclusivos, seguros e sustentáveis.", color: "#48bfe3", glowColor: "rgba(72, 191, 227, 0.4)" },
    { id: 2, icon: faUtensils, title: "Fome Zero", description: "Acabar com a fome, alcançar a segurança alimentar e melhoria da nutrição.", color: "#4ea8de", glowColor: "rgba(78, 168, 222, 0.4)" },
    { id: 1, icon: faHandHoldingHeart, title: "Erradicação da Pobreza", description: "Acabar com a pobreza em todas as suas formas, em todos os lugares.", color: "#4361ee", glowColor: "rgba(67, 97, 238, 0.4)" },
    { id: 10, icon: faBalanceScale, title: "Redução das Desigualdades", description: "Reduzir a desigualdade dentro dos países e entre eles.", color: "#3f37c9", glowColor: "rgba(63, 55, 201, 0.4)" },
    { id: 8, icon: faBriefcase, title: "Trabalho Decente", description: "Promover o crescimento econômico sustentado, inclusivo e sustentável.", color: "#4c3dc9", glowColor: "rgba(76, 61, 201, 0.4)" },
    { id: 4, icon: faGraduationCap, title: "Educação de Qualidade", description: "Assegurar a educação inclusiva, equitativa e de qualidade.", color: "#5e60ce", glowColor: "rgba(94, 96, 206, 0.4)" },
    { id: 17, icon: faHandshake, title: "Parcerias para os Objetivos", description: "Fortalecer os meios de implementação e revitalizar a parceria global.", color: "#7209b7", glowColor: "rgba(114, 9, 183, 0.4)" }
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
    const [isVisible, setIsVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);
    
    const items = ids ? sdgItems.filter(item => ids.includes(item.id)) : sdgItems;

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );
        
        if (containerRef.current) {
            observer.observe(containerRef.current);
        }
        
        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current);
            }
        };
    }, []);

    const handleItemClick = (id: number) => {
        if (onClick) {
            onClick(id);
        }
    };

    return (
        <div 
            ref={containerRef}
            className={styles.odsContainer}
            style={style}
        >
            <div className={styles.odsInner}>
                <div className={styles.odsTitle}>
                    <div className={styles.odsFlexContainer}>
                        <div className={styles.odsImageContainer}>
                            <Image src={odsLogo} alt="Logo dos Objetivos de Desenvolvimento Sustentável" width={300} height={200}/>
                        </div>
                        <div className={styles.odsTextContainer}>
                            <h2>Sustainable Development Goals</h2>
                            <div className={styles.odsDivider}></div>
                            <p>
                                Nosso compromisso com a Agenda 2030 da ONU e o desenvolvimento de soluções
                                que impactam positivamente a sociedade e o planeta.
                            </p>
                        </div>
                    </div>
                </div>
                <div className={styles.odsGridContainer}>
                    <div className={styles.odsGrid}>
                        {items.map((item) => (
                            <div 
                                key={item.id}
                                className={styles.odsCard}
                                onClick={() => handleItemClick(item.id)}
                            >
                                <div 
                                    className={styles.odsIconBox}
                                    style={{ 
                                        background: `rgba(${item.color.replace('#', '')
                                            .match(/.{2}/g)?.map(c => parseInt(c, 16))
                                            .join(', ')}, 0.1)` 
                                    }}
                                >
                                    <FontAwesomeIcon icon={item.icon} style={{ color: item.color }} />
                                </div>
                                <div className={styles.odsContent}>
                                    <h3 style={{ 
                                        color: item.color,
                                        textShadow: `0 0 10px ${item.glowColor}`
                                    }}> 
                                        ODS {item.id}: {item.title}
                                    </h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}