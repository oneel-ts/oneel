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
                                    borderRadius: '8px',
                                    boxShadow: '0 4px 8px rgba(70, 53, 177, 0.2)',
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
                                color: selectValue ? '#f5f6fa' : 'var(--placeholder-color)', // Amarelo forte quando selecionado
                                fontSize: '16px',
                            }
                        }}

                    >
                        <MenuItem disabled value="" className={styles.menuItem}>
                            <em>{placeholder}</em>
                        </MenuItem>
                        {options.map((option) => (
                            <MenuItem
                                key={option.value}
                                value={option.value}
                                className={styles.menuItem}
                                classes={{ selected: styles.menuItemSelected }}
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