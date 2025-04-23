import {Fragment, useState} from "react";
import styles from "./input-field.module.css";

type Props = {
    nameField: string;
    typeInput: string;
    placeholder: string;
    fieldIcon: React.ReactNode;
    value: any;
    onChange: (value: string) => void;
}

export default function InputField ({nameField, typeInput, placeholder, fieldIcon, value, onChange} : Props) {
    const inputValue = value === null ? '' : value;
    const [isEmailValid, setIsEmailValid] = useState<boolean>(true);
    const [isPhoneValid, setIsPhoneValid] = useState<boolean>(true);
    const [isTouched, setIsTouched] = useState<boolean>(false);
    const [currentValue, setCurrentValue] = useState<string>(inputValue);
    
    const validateEmail = (email: string): boolean => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return email === '' || emailRegex.test(email);
    };
    
    const validatePhone = (phone: string): boolean => {
        return phone === '' || phone.length >= 10;
    };
    
    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        const input = e.target.value;
        
        if (typeInput === 'tel') {
            const numbersOnly = input.replace(/\D/g, '');
            setCurrentValue(numbersOnly);
            onChange(numbersOnly);
        } 
        else if (typeInput === 'email') {
            setCurrentValue(input);
            onChange(input);
        } 
        else {
            setCurrentValue(input);
            onChange(input);
        }
    };
    
    const handleBlur = () => {
        setIsTouched(true);
        
        if (typeInput === 'email') {
            setIsEmailValid(validateEmail(currentValue));
        }
        
        if (typeInput === 'tel') {
            setIsPhoneValid(validatePhone(currentValue));
        }
    };
    
    const getInputClass = () => {
        if ((typeInput === 'email' && !isEmailValid && isTouched) ||
            (typeInput === 'tel' && !isPhoneValid && isTouched)) {
            return `${styles.input} ${styles.inputError}`;
        }
        return styles.input;
    };
    
    return (
        <Fragment>
            <div className={styles.containerBoxInput}>
                <h1 className={styles.title}>
                    {nameField}
                </h1>
                <div className={styles.inputWrapper}>
                    <input
                        type={typeInput === 'tel' ? 'tel' : typeInput}
                        className={getInputClass()}
                        placeholder={
                            typeInput === 'email'
                                ? "example@domain.com"
                                : placeholder
                        }
                        onChange={handleInput}
                        onBlur={handleBlur}
                        value={currentValue}
                        inputMode={
                            typeInput === 'tel' 
                                ? 'tel' 
                                : typeInput === 'email'
                                    ? 'email'
                                    : 'text'
                        }
                    />
                    <div className={styles.icon}>
                        {fieldIcon}
                    </div>
                </div>
                {!isEmailValid && typeInput === 'email' && isTouched && (
                    <p className={styles.errorText}>
                        Digite um endereço de e-mail válido (exemplo: nome@dominio.com)
                    </p>
                )}
                {!isPhoneValid && typeInput === 'tel' && isTouched && (
                    <p className={styles.errorText}>
                        Digite um número de telefone válido (mínimo de 10 dígitos com DDD)
                    </p>
                )}
            </div>
        </Fragment>
    )
}