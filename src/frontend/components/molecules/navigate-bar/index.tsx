"use client"

import { useState, useEffect } from "react";
import styles from "./navigate-bar.module.css";
import { poppins } from "@/src/frontend/styles/fonts";

const navigationItems : { id: string, label: string }[] = [
    { id: "home", label: "Home"},
    { id: "services", label: "Services"},
    { id: "projects", label: "Projects"},
    { id: "about", label: "About Us"},
];

export default function NavigateBar() {
    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        setActiveTab(entry.target.id);
                    }
                });
            },
            { 
                threshold: 0.6,
                rootMargin: "-50px 0px"
            }
        );

        navigationItems.forEach(item => {
            const element = document.getElementById(item.id);
            if (element) {
                observer.observe(element);
            }
        });

        return () => {
            navigationItems.forEach(item => {
                const element = document.getElementById(item.id);
                if (element) {
                    observer.unobserve(element);
                }
            });
        };
    }, []);

    const handleNavClick = (itemId: string) => {
        setActiveTab(itemId);

        const element = document.getElementById(itemId);
        if (element) {
            element.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });
        }
    };

    return (
        <section className={`${styles.containerNavigation} ${poppins.className}`}>
            {navigationItems.map((item) => (
                <ul
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                >
                    <li className={activeTab === item.id ? styles.selectedTab : styles.navigateButtons}>
                        {item.label}
                    </li>
                </ul>
            ))}
        </section>
    );
}