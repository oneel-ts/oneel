import {Fragment, useEffect, useState} from "react";
import styles from "./modal-form.module.css";
import InputField from "@/src/frontend/components/molecules/input-field";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormDTO from "@/src/models/form-dto";
import AnimatedButton from "@/src/frontend/components/molecules/send-infos-button";
import SelectField from "@/src/frontend/components/molecules/select-field";


export default function ModalForm ({}) {

    const [formData, setFormData] = useState<FormDTO>({
        name: "",
        telephone: "",
        email: "",
        services: "",
        projectDescription: "",
        zipCode: ""
    });

    const handleInputChange = (fieldName: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
    };

    useEffect(() => {
        console.log(formData);
    }, [formData]);

    const handleSubmit = () => {
        console.log("Dados do formulário:", formData);
    };

    return (
        <Fragment>
            <div className={styles.containerModal}>
                <div className={styles.miniHeaderModal}>
                    <div>Contact Request Form</div>
                </div>
                <div className={styles.containerForm}>
                    <InputField
                        nameField={'Name'}
                        typeInput={"text"}
                        placeholder={"Write your name"}
                        fieldIcon={<AccountCircleIcon/>}
                        value={formData.name}
                        onChange={(value) => handleInputChange('name', value)}
                    />
                    <InputField
                        nameField={'Telephone'}
                        typeInput={"text"}
                        placeholder={"your telephone"}
                        fieldIcon={<LocalPhoneIcon/>}
                        value={formData.telephone}
                        onChange={(value) => handleInputChange('telephone', value)}
                    />
                    <InputField
                        nameField={'E-mail'}
                        typeInput={"text"}
                        placeholder={"write your email"}
                        fieldIcon={<EmailIcon/>}
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                    />
                    <SelectField
                        nameField={"Service"}
                        typeInput={"text"}
                        placeholder={"select your service"}
                        fieldIcon={<WorkIcon/>}
                        value={formData.services}
                        onChange={(value) => handleInputChange('services', value)}
                        options={[
                            { value: 'desenvolvimento', label: 'Desenvolvimento de Software' },
                            { value: 'instalar_tv', label: 'Instalar TV' },
                            { value: 'arquitetura', label: 'Arquitetura' }
                        ]}
                    />

                    <InputField
                        nameField={'Describe your project'}
                        typeInput={"text"}
                        placeholder={"In a bit words describe your projects"}
                        fieldIcon={<ChatIcon/>}
                        value={formData.projectDescription}
                        onChange={(value) => handleInputChange('projectDescription', value)}
                    />
                    <InputField
                        nameField={'Zip code'}
                        typeInput={"text"}
                        placeholder={"Zip Code"}
                        fieldIcon={<LocationOnIcon/>}
                        value={formData.zipCode}
                        onChange={(value) => handleInputChange('zipCode', value)}
                    />
                    <AnimatedButton onClick={handleSubmit}>Send infos</AnimatedButton>
                </div>
            </div>
        </Fragment>
    )
}