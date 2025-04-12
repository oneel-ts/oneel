"use client"

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navigate-bar.module.css";
import { orbitron } from "@/src/frontend/styles/fonts";

const navigationItems = [
    { id: "home", label: "Home", path: "/" },
    { id: "about", label: "About Us", path: "/about-us" },
    { id: "services", label: "Services", path: "/services" },
    { id: "projects", label: "Projects", path: "/projects" },
    { id: "team", label: "Team", path: "/team" },
];

export default function NavigateBar() {

    const [activeTab, setActiveTab] = useState("home");

    useEffect(() => {
        const path = window.location.pathname;

        const currentItem = navigationItems.find((item) => item.path === path);
        if (currentItem) {
            setActiveTab(currentItem.id);
        }
    }, []);

    const handleNavClick = (itemId: string) => {
        setActiveTab(itemId);
    };

    return (
        <nav className={`${styles.containerNavigation} ${orbitron.className}`}>
            {navigationItems.map((item) => (
                <Link
                    href={item.path}
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                >
                    <div className={activeTab === item.id ? styles.selectedTab : styles.navigateButtons}>
                        {item.label}
                    </div>
                </Link>
            ))}
        </nav>
    );
}