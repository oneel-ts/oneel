import { Fragment, useState } from "react";
import styles from "./select-field.module.css";
import { MenuItem, Select as MuiSelect, SelectChangeEvent } from "@mui/material";

type Props = {
    nameField: string;
    typeInput: any;
    placeholder: string;
    fieldIcon: React.ReactNode;
    value: any;
    onChange: (value: string) => void;
    options?: { value: string; label: string }[];
}

export default function SelectField({ nameField, placeholder, fieldIcon, value, onChange, options = [] }: Props) {
    const selectValue = value === null ? '' : value;
    const [isFocused, setIsFocused] = useState(false);

    const handleChange = (event: SelectChangeEvent<unknown>) => {
        onChange(event.target.value as string);
    };

    return (
        <Fragment>
            <div className={styles.containerBoxInput}>
                <h1 className={styles.title}>{nameField}</h1>
                <div className={styles.inputWrapper}>
                    <MuiSelect
                        value={selectValue}
                        onChange={handleChange}
                        displayEmpty
                        className={`${styles.input} ${isFocused ? styles.selectInputFocused : ''}`}
                        onOpen={() => setIsFocused(true)}
                        onClose={() => setIsFocused(false)}
                        renderValue={(selected) => selected ? String(selected) : placeholder}
                        MenuProps={{
                            PaperProps: {
                                sx: {
                                    backgroundColor: '#181F4B',
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 12px rgba(70, 53, 177, 0.3)',
                                    marginTop: '8px'
                                }
                            },
                            MenuListProps: {
                                sx: {
                                    padding: '4px'
                                }
                            }
                        }}
                        sx={{
                            '&.MuiOutlinedInput-root': {
                                '& fieldset': { border: 'none' },
                                '&:hover fieldset': { border: 'none' },
                                '&.Mui-focused fieldset': { border: 'none' }
                            },
                            '& .MuiSelect-select': {
                                color: selectValue ? '#FFFFFF' : 'var(--placeholder-color)',
                                fontSize: '16px',
                            }
                        }}
                    >
                        <MenuItem disabled value="" className={styles.menuItem}>
                            <em style={{ color: '#8c91b6' }}>{placeholder}</em>
                        </MenuItem>
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                className={styles.menuItem}
                                classes={{
                                    selected: styles.menuItemSelected
                                }}
                                sx={{
                                    position: 'relative',
                                    backgroundColor: '#181F4B',
                                    color: '#b3b8e0',
                                    transition: 'all 0.3s ease',
                                    padding: '10px 16px',
                                    borderRadius: '8px',
                                    margin: '2px 0',
                                    fontSize: '14px',
                                    fontWeight: 400,
                                    '&:hover': {
                                        backgroundColor: 'rgba(90, 75, 191, 0.25)',
                                        color: '#c2baff',
                                        transform: 'translateX(4px)',
                                    },
                                    '&.Mui-selected': {
                                        backgroundColor: 'rgba(90, 75, 191, 0.35)',
                                        color: '#c2baff',
                                        fontWeight: 500,
                                        '&::before': {
                                            content: '""',
                                            position: 'absolute',
                                            left: 0,
                                            top: '50%',
                                            transform: 'translateY(-50%)',
                                            width: '3px',
                                            height: '60%',
                                            backgroundColor: '#7d67ef',
                                            borderRadius: '0 2px 2px 0'
                                        }
                                    },
                                    '&.Mui-selected:hover': {
                                        backgroundColor: 'rgba(90, 75, 191, 0.45)',
                                    },
                                    '&::after': {
                                        content: '""',
                                        position: 'absolute',
                                        bottom: 0,
                                        left: '16px',
                                        right: '16px',
                                        height: '1px',
                                        backgroundColor: 'rgba(160, 160, 230, 0.2)',
                                        opacity: 0.5
                                    },
                                    '&:last-child::after': {
                                        display: 'none'
                                    }
                                }}
                            >
                                <span className={styles.menuItemLabel}>{option.label}</span>
                            </MenuItem>
                        ))}
                    </MuiSelect>
                    <div className={`${styles.icon} ${isFocused ? styles.iconFocused : ''}`}>
                        {fieldIcon}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}