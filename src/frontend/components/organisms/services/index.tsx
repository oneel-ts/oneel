import {Fragment} from "react";
import styles from "./services.module.css";
import ComputerIcon from '@mui/icons-material/Computer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';
import {poppins} from "@/src/frontend/styles/fonts";

type Props = {
    id: string;
}

export default function Services({id}: Props) {

    const services = [
        {
            icon: <ComputerIcon sx={{fontSize: 40}}/>,
            title: "Software Development",
            items: [
                "Creation of institutional websites and e-commerce stores",
                "Custom tailored systems for your business",
                "Web and mobile applications with modern, responsive design"
            ]
        },
        {
            icon: <ApartmentIcon sx={{fontSize: 40}}/>,
            title: "Architectural Visualization",
            items: [
                "3D modeling of interior and exterior environments",
                "Realistic renderings for presentations and projects",
                "Immersive animations and virtual tours"
            ]
        },
        {
            icon: <BuildIcon sx={{fontSize: 40}}/>,
            title: "Technical Installations",
            items: [
                "Installation of security systems with cameras and sensors",
                "Setup of TVs, projectors, and multimedia equipment",
                "Technical structuring of corporate and home office environments"
            ]
        },
        {
            icon: <SecurityIcon sx={{fontSize: 40}}/>,
            title: "Home Automation",
            items: [
                "Integration of smart devices (lights, blinds, etc.)",
                "Remote control via app or voice assistant",
                "Custom solutions for comfort and security"
            ]
        },
        {
            icon: <StorageIcon sx={{fontSize: 40}}/>,
            title: "IT Infrastructure",
            items: [
                "Setup and organization of servers and local networks",
                "Preventive and corrective equipment maintenance",
                "Consulting on structuring technological environments"
            ]
        },
        {
            icon: <LanguageIcon sx={{fontSize: 40}}/>,
            title: "Digital Presence Consulting",
            items: [
                "Creation and management of social media profiles",
                "Content optimization for search engines (SEO)",
                "Digital marketing campaigns and online advertising"
            ]
        },
    ];

    return (
        <Fragment>
            <div className={styles.containerContent}>
                <div className={styles.containerBox}>
                    <div className={styles.containerTitle}>
                        <h1 className={`${styles.technologicalTitle} ${poppins.className}`}>Integrated Technological Solutions for Your Business</h1>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div id={id} key={index} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <ul className={styles.serviceList}>
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className={styles.serviceItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.proposalContainer}>
                        <p className={styles.proposalText}>
                            We offer a comprehensive approach to transform your vision into reality. Our team
                            combines technical expertise with creativity to develop solutions that drive
                            your growth and optimize your operations. From custom software development
                            to architectural visualizations and high-quality technical installations, we are
                            committed to delivering exceptional results that exceed expectations.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}