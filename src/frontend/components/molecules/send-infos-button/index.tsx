import React from 'react';
import styles from "./send-infos-button.module.css";

type Props = {
    onClick?: () => void
    children?: string
}

export default function AnimatedButton({onClick, children}: Props) {
    return (
        <a className={styles.btn} onClick={onClick}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            {children}
        </a>
    )
};