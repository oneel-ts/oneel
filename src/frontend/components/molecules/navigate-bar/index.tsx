"use client"

import { useState} from "react";
import styles from "./navigate-bar.module.css";
import { orbitron } from "@/src/frontend/styles/fonts";

const navigationItems = [
    { id: "home", label: "Home"},
    { id: "services", label: "Services"},
    { id: "projects", label: "Projects"},
    { id: "about", label: "About Us"},
    { id: "team", label: "Team"},
];

export default function NavigateBar() {

    const [activeTab, setActiveTab] = useState("home");

    const handleNavClick = (itemId: string) => {
        setActiveTab(itemId);
    };

    return (
        <div className={`${styles.containerNavigation} ${orbitron.className}`}>
            {navigationItems.map((item) => (
                <div
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                >
                    <div className={activeTab === item.id ? styles.selectedTab : styles.navigateButtons}>
                        {item.label}
                    </div>
                </div>
            ))}
        </div>
    );
}