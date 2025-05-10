import {Fragment, useState} from "react";
import styles from "./projects.module.css";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import image01 from "../../../../../public/assets/01.jpg";
import image02 from "../../../../../public/assets/03-02.jpg";
import image03 from "../../../../../public/assets/03.jpg";
import image04 from "../../../../../public/assets/05.jpg";
import image05 from "../../../../../public/assets/7.jpg";
import image06 from "../../../../../public/assets/8.jpg";
import Image from "next/image";

type Props = {
    id: string;
}

export default function Projects ({id} : Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel);
        },
        created() {
            setLoaded(true);
        },
    });

    const projects = [
        {
            id: 1,
            image: image01,
            title: "Dashboard Corporativo",
            description: "Sistema integrado de gestão de dados"
        },
        {
            id: 2,
            image: image02,
            title: "E-commerce Avançado",
            description: "Plataforma responsiva para vendas online"
        },
        {
            id: 3,
            image: image03,
            title: "App Mobile",
            description: "Aplicativo nativo para iOS e Android"
        },
        {
            id: 4,
            image: image04,
            title: "CRM Inteligente",
            description: "Gestão de relacionamento com clientes"
        },
        {
            id: 5,
            image: image05,
            title: "Sistema de Segurança",
            description: "Proteção de dados e prevenção de fraudes"
        },
        {
            id: 6,
            image: image06,
            title: "Automação de Processos",
            description: "Otimização de fluxos de trabalho"
        }
    ];

    return (
        <Fragment>
            <div id={id} className={styles.contentContainer}>
                <div className={styles.containerBox}>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.tituloTecnologico}>Soluções Tecnológicas Integradas para o Seu Negócio</h1>
                    </div>
                    
                    <div className={`${styles.sliderContainer} navigation-wrapper`}>
                        <div ref={sliderRef} className="keen-slider">
                            {projects.map((project) => (
                                <div key={project.id} className={`keen-slider__slide ${styles.projectSlide}`}>
                                        <div className={styles.projectImageContainer}>
                                            <Image
                                                width={"800"}
                                                height={"250"}
                                                src={project.image.src} 
                                                alt={project.title} 
                                                className={styles.projectImage}
                                            />
                                        </div>
                                </div>
                            ))}
                        </div>
                        
                        {loaded && instanceRef.current && (
                            <>
                                <Arrow
                                    left
                                    onClick={(e) => e.stopPropagation() || instanceRef.current?.prev()}
                                    disabled={currentSlide === 0}
                                />

                                <Arrow
                                    onClick={(e) => e.stopPropagation() || instanceRef.current?.next()}
                                    disabled={
                                        currentSlide === instanceRef.current.track.details.slides.length - 1
                                    }
                                />
                            </>
                        )}
                    </div>
                    
                    {loaded && instanceRef.current && (
                        <div className={styles.dots}>
                            {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                                return (
                                    <button
                                        key={idx}
                                        onClick={() => {
                                            instanceRef.current?.moveToIdx(idx);
                                        }}
                                        className={`${styles.dot} ${currentSlide === idx ? styles.active : ""}`}
                                    ></button>
                                );
                            })}
                        </div>
                    )}
                </div>
            </div>
        </Fragment>
    );
}

function Arrow(props: {
    disabled?: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabled = props.disabled ? ` ${styles.arrowDisabled}` : "";
    return (
        <svg
            onClick={props.onClick}
            className={`${styles.arrow} ${
                props.left ? styles.arrowLeft : styles.arrowRight
            }${disabled}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
        >
            {props.left && (
                <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
            )}
            {!props.left && (
                <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
            )}
        </svg>
    );
}