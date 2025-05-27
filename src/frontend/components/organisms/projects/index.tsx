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
import Skillset from "@/src/frontend/components/molecules/skillset";

type Props = {
    id: string;
}

export default function Projects ({id} : Props) {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [loaded, setLoaded] = useState(false);
    const [isFirstSlide, setIsFirstSlide] = useState(true);
    const [isLastSlide, setIsLastSlide] = useState(false);

    const [sliderRef, instanceRef] = useKeenSlider({
        initial: 0,
        slides: {
            perView: 1,
            spacing: 0,
        },
        loop: false,
        mode: "snap",
        dragSpeed: 0.5,
        slideChanged(slider) {
            const slideIndex = slider.track.details.rel;
            setCurrentSlide(slideIndex);
            setIsFirstSlide(slideIndex === 0);
            setIsLastSlide(slideIndex === slider.track.details.slides.length - 1);
        },
        created(slider) {
            setLoaded(true);
            setIsFirstSlide(true);
            setIsLastSlide(slider.track.details.slides.length <= 1);
        },
        defaultAnimation: {
            duration: 400,
            easing: t => t * (2 - t)
        },
        rubberband: false,
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
        <section id={id} className={styles.contentContainer}>
            <div className={styles.containerBox}>
                <header className={styles.containerTitle}>
                    <h2 className={styles.techTitle}>Projects and Technologies</h2>
                </header>

                <div className={`${styles.sliderContainer} navigation-wrapper`}
                     role="region"
                     aria-label="Projetos carrossel"
                     aria-roledescription="carrossel">
                    <div ref={sliderRef} className="keen-slider">
                        {projects.map((project) => (
                            <article
                                key={project.id}
                                className={`keen-slider__slide ${styles.projectSlide}`}
                                role="group"
                                aria-roledescription="slide"
                                aria-label={`${project.title}: ${project.description} (${currentSlide === project.id - 1 ? 'slide atual' : 'slide'} ${project.id} de ${projects.length})`}
                            >
                                <figure className={styles.projectImageContainer}>
                                    <Image
                                        width={1280}
                                        height={0}
                                        src={project.image.src}
                                        alt={`${project.title} - ${project.description}`}
                                        className={styles.projectImage}
                                        priority={project.id === 1}
                                    />
                                    <figcaption className="sr-only">{project.title}: {project.description}</figcaption>
                                </figure>
                            </article>
                        ))}
                    </div>

                    {loaded && instanceRef.current && (
                        <>
                            <Arrow
                                left
                                onClick={(e) => {
                                    e.stopPropagation();
                                    instanceRef.current?.prev();
                                }}
                                disabled={isFirstSlide}
                            />

                            <Arrow
                                onClick={(e) => {
                                    e.stopPropagation();
                                    instanceRef.current?.next();
                                }}
                                disabled={isLastSlide}
                            />
                        </>
                    )}
                </div>

                {loaded && instanceRef.current && (
                    <nav className={styles.dots} aria-label="Paginação do carrossel">
                        {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
                            return (
                                <button
                                    key={idx}
                                    onClick={() => {
                                        instanceRef.current?.moveToIdx(idx);
                                    }}
                                    aria-label={`Ir para slide ${idx + 1} ${currentSlide === idx ? '(atual)' : ''}`}
                                    aria-current={currentSlide === idx ? "true" : "false"}
                                    className={`${styles.dot} ${currentSlide === idx ? styles.active : ""}`}
                                ></button>
                            );
                        })}
                    </nav>
                )}

                <section className={styles.skillsSection}>
                    <header className={styles.containerTitle}>
                        <h2 className={styles.techTitle}>Skillsets</h2>
                    </header>
                    <Skillset/>
                </section>
            </div>
        </section>
    );
}

function Arrow(props: {
    disabled?: boolean;
    left?: boolean;
    onClick: (e: any) => void;
}) {
    const disabled = props.disabled ? ` ${styles.arrowDisabled}` : "";
    return (
        <button
            type="button"
            onClick={props.disabled ? undefined : props.onClick}
            className={`${styles.arrow} ${
                props.left ? styles.arrowLeft : styles.arrowRight
            }${disabled}`}
            aria-label={props.left ? "Slide anterior" : "Próximo slide"}
            disabled={props.disabled}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                aria-hidden="true"
                focusable="false"
            >
                {props.left && (
                    <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
                )}
                {!props.left && (
                    <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
                )}
            </svg>
        </button>
    );
}