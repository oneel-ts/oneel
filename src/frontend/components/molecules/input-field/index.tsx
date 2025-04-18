import {Fragment} from "react";
import styles from "./input-field.module.css";

type Props = {
    nameField: string;
    typeInput: any;
    placeholder: string;
    fieldIcon: React.ReactNode;
    value: any;
    onChange: (value: string) => void;
}

export default function InputField ({nameField, typeInput, placeholder, fieldIcon, value, onChange} : Props) {
    const inputValue = value === null ? '' : value;
    
    return (
        <Fragment>
            <div className={styles.containerBoxInput}>
                <h1 className={styles.title}>{nameField}</h1>
                <div className={styles.inputWrapper}>
                    <input
                        type={typeInput}
                        className={styles.input}
                        placeholder={placeholder}
                        onChange={(event) => onChange(event.target.value)}
                        value={inputValue}
                    />
                    <div className={styles.icon}>
                        {fieldIcon}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}