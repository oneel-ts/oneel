// import {Fragment, useState, useEffect} from "react";
// import styles from "./projects-carousel.module.css";
// import { useKeenSlider } from "keen-slider/react";
// import "keen-slider/keen-slider.min.css";
// import image01 from "../../../../../public/assets/01.jpg";
// import image02 from "../../../../../public/assets/03-02.jpg";
// import image03 from "../../../../../public/assets/03.jpg";
// import image04 from "../../../../../public/assets/05.jpg";
// import image05 from "../../../../../public/assets/7.jpg";
// import image06 from "../../../../../public/assets/8.jpg";
// import Image from "next/image";
//
// type Project = {
//     id: number;
//     image: any;
//     title: string;
//     description: string;
// }
//
// type Props = {
//     projects?: any;
// }
//
// export default function ProjectsCarousel ({projects}: Props) {
//     const [currentSlide, setCurrentSlide] = useState(0);
//     const [loaded, setLoaded] = useState(false);
//     const [sliderRef, instanceRef] = useKeenSlider({
//         initial: 0,
//         slideChanged(slider) {
//             setCurrentSlide(slider.track.details.rel);
//         },
//         created() {
//             setLoaded(true);
//         },
//         slides: {
//             perView: 1,
//             spacing: 0,
//         },
//         loop: true,
//         mode: "snap",
//         dragSpeed: 1.2,
//     });
//
//     const [paused, setPaused] = useState(false);
//
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (!paused && instanceRef.current) {
//                 instanceRef.current.next();
//             }
//         }, 5000);
//
//         return () => {
//             clearInterval(interval);
//         };
//     }, [instanceRef, paused]);
//
//     const defaultProjects = [
//         {
//             id: 1,
//             image: image01,
//             title: "Dashboard Corporativo",
//             description: "Sistema integrado de gestão de dados"
//         },
//         {
//             id: 2,
//             image: image02,
//             title: "E-commerce Avançado",
//             description: "Plataforma responsiva para vendas online"
//         },
//         {
//             id: 3,
//             image: image03,
//             title: "App Mobile",
//             description: "Aplicativo nativo para iOS e Android"
//         },
//         {
//             id: 4,
//             image: image04,
//             title: "CRM Inteligente",
//             description: "Gestão de relacionamento com clientes"
//         },
//         {
//             id: 5,
//             image: image05,
//             title: "Sistema de Segurança",
//             description: "Proteção de dados e prevenção de fraudes"
//         },
//         {
//             id: 6,
//             image: image06,
//             title: "Automação de Processos",
//             description: "Otimização de fluxos de trabalho"
//         }
//     ];
//
//     const projectsToRender = projects || defaultProjects;
//
//     return (
//         <Fragment>
//             <div
//                 className={`${styles.sliderContainer} navigation-wrapper`}
//                 onMouseEnter={() => setPaused(true)}
//                 onMouseLeave={() => setPaused(false)}
//             >
//                 <div ref={sliderRef} className="keen-slider">
//                     {projectsToRender.map((project) => (
//                         <div
//                             key={project.id}
//                             className={`keen-slider__slide ${styles.projectSlide}`}
//                             aria-label={currentSlide === project.id - 1 ? "active slide" : "slide"}
//                         >
//                             <div className={styles.projectImageContainer}>
//                                 <Image
//                                     width={1280}
//                                     height={0}
//                                     src={project.image}
//                                     alt={project.title}
//                                     className={styles.projectImage}
//                                     priority={project.id === 1}
//                                 />
//                             </div>
//                         </div>
//                     ))}
//                 </div>
//
//                 {loaded && instanceRef.current && (
//                     <>
//                         <Arrow
//                             left
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 instanceRef.current?.prev();
//                             }}
//                             disabled={!instanceRef.current.options.loop && currentSlide === 0}
//                         />
//
//                         <Arrow
//                             onClick={(e) => {
//                                 e.stopPropagation();
//                                 instanceRef.current?.next();
//                             }}
//                             disabled={
//                                 !instanceRef.current.options.loop &&
//                                 currentSlide === instanceRef.current.track.details.slides.length - 1
//                             }
//                         />
//                     </>
//                 )}
//             </div>
//
//             {loaded && instanceRef.current && (
//                 <div className={styles.dots}>
//                     {[...Array(instanceRef.current.track.details.slides.length).keys()].map((idx) => {
//                         return (
//                             <button
//                                 key={idx}
//                                 onClick={() => {
//                                     instanceRef.current?.moveToIdx(idx);
//                                 }}
//                                 aria-label={`Go to slide ${idx + 1}`}
//                                 className={`${styles.dot} ${currentSlide === idx ? styles.active : ""}`}
//                             ></button>
//                         );
//                     })}
//                 </div>
//             )}
//         </Fragment>
//     );
// }
//
// function Arrow(props: {
//     disabled?: boolean;
//     left?: boolean;
//     onClick: (e: any) => void;
// }) {
//     const disabled = props.disabled ? ` ${styles.arrowDisabled}` : "";
//     return (
//         <svg
//             onClick={props.onClick}
//             className={`${styles.arrow} ${
//                 props.left ? styles.arrowLeft : styles.arrowRight
//             }${disabled}`}
//             xmlns="http://www.w3.org/2000/svg"
//             viewBox="0 0 24 24"
//             aria-label={props.left ? "Previous slide" : "Next slide"}
//             role="button"
//         >
//             {props.left && (
//                 <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
//             )}
//             {!props.left && (
//                 <path d="M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" />
//             )}
//         </svg>
//     );
// }