import React from 'react';
import styles from "./send-infos-button.module.css";

type Props = {
    onClick?: () => void;
    children?: string;
    disabled: boolean;
}

export default function AnimatedButton({onClick, children, disabled}: Props) {

    const buttonClassName = disabled
        ? `${styles.btn} ${styles.btnDisabled}` 
        : styles.btn;
    
    return (
        <a className={buttonClassName} 
           onClick={disabled ? undefined : onClick}
           role="button"
           aria-disabled={disabled}>
            <svg>
                <rect x="0" y="0" fill="none" width="100%" height="100%"/>
            </svg>
            {children}
        </a>
    )
};