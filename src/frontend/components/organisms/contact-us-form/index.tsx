import {Fragment, useEffect, useState} from "react";
import styles from "./contact-us-form.module.css";
import InputField from "@/src/frontend/components/molecules/input-field";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import ChatIcon from '@mui/icons-material/Chat';
import FormDTO from "@/src/models/form-dto";
import AnimatedButton from "@/src/frontend/components/molecules/send-infos-button";
import SelectField from "@/src/frontend/components/molecules/select-field";
import {toast, ToastContainer} from "react-toastify";
import emailjs from '@emailjs/browser';

export default function ContactUsForm ({}) {
    const [formData, setFormData] = useState<FormDTO>({
        name: "",
        telephone: "",
        email: "",
        services: "",
        projectDescription: "",
    });

    const [formValidity, setFormValidity] = useState({
        name: false,
        telephone: false,
        email: false,
        services: false,
        projectDescription: false
    });

    const [isButtonEnabled, setIsButtonEnabled] = useState<boolean>(false);
    const [toastDuration] = useState<number>(4000);
    
    const [resetTrigger, setResetTrigger] = useState<number>(0);

    const handleInputChange = (fieldName: string, value: string) => {
        setFormData(prevData => ({
            ...prevData,
            [fieldName]: value
        }));
        
        validateField(fieldName, value);
    };
    
    const validateField = (fieldName: string, value: string) => {
        let isValid = value.length > 0;
        
        if (fieldName === 'email') {
            const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
            isValid = emailRegex.test(value);
        }
        
        if (fieldName === 'telephone') {
            isValid = value.length >= 10;
        }
        
        setFormValidity(prev => ({
            ...prev,
            [fieldName]: isValid
        }));
    };

    const resetForm = () => {
        setFormData({
            name: "",
            telephone: "",
            email: "",
            services: "",
            projectDescription: "",
        });
        
        setFormValidity({
            name: false,
            telephone: false,
            email: false,
            services: false,
            projectDescription: false
        });
        
        setResetTrigger(prev => prev + 1);
    };
    
    useEffect(() => {
        emailjs.init("T1-6FPAIvihuaEqn7");
    }, []);
    
    useEffect(() => {        
        const allFieldsFilled = Object.values(formData).every(value => value.length > 0);
        const allFieldsValid = Object.values(formValidity).every(valid => valid);
        
        setIsButtonEnabled(allFieldsFilled && allFieldsValid);
    }, [formData, formValidity]);

    const handleSubmit = async () => {
        if (isButtonEnabled) {
            try {
                const templateParams = {
                    name: formData.name,
                    time: new Date().toLocaleString(),
                    email: formData.email,
                    telephone: formData.telephone,
                    services: formData.services,
                    projectDescription: formData.projectDescription,
                };

                const response = await emailjs.send(
                    'service_9xmh7qn',
                    'template_qgu218k',
                    templateParams,
                    'T1-6FPAIvihuaEqn7'
                );

                console.log('E-mail enviado com sucesso!', response);
                
                toast.success("Mensagem enviada com sucesso", {
                    position: "top-center",
                    autoClose: toastDuration,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                    onClose: () => {
                        resetForm();
                    }
                });
                
            } catch (error) {
                console.error('Erro ao enviar e-mail:', error);
                toast.error(`Erro ao enviar o e-mail: ${error}`, {
                    position: "top-center",
                    autoClose: toastDuration,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light",
                });
            }
        }
    };

    return (
        <Fragment>
            <ToastContainer/>
            <div className={styles.containerModal}>
                <div className={styles.miniHeaderModal}>
                    <div>Contact Request Form</div>
                </div>
                <div className={styles.containerForm}>
                    <InputField
                        key={`name-${resetTrigger}`}
                        nameField={'Name'}
                        typeInput={"text"}
                        placeholder={"Write your name"}
                        fieldIcon={<AccountCircleIcon/>}
                        value={formData.name}
                        onChange={(value) => handleInputChange('name', value)}
                    />
                    <InputField
                        key={`email-${resetTrigger}`}
                        nameField={'E-mail'}
                        typeInput={"email"}
                        placeholder={"exemplo@dominio.com"}
                        fieldIcon={<EmailIcon/>}
                        value={formData.email}
                        onChange={(value) => handleInputChange('email', value)}
                    />
                    <InputField
                        key={`telephone-${resetTrigger}`}
                        nameField={'Telephone'}
                        typeInput={"tel"}
                        placeholder={"put your phone number with DDD"}
                        fieldIcon={<LocalPhoneIcon/>}
                        value={formData.telephone}
                        onChange={(value) => handleInputChange('telephone', value)}
                    />
                    <SelectField
                        key={`services-${resetTrigger}`}
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
                        key={`project-${resetTrigger}`}
                        nameField={'Describe your project'}
                        typeInput={"text"}
                        placeholder={"In a bit words describe your projects"}
                        fieldIcon={<ChatIcon/>}
                        value={formData.projectDescription}
                        onChange={(value) => handleInputChange('projectDescription', value)}
                    />
                    <AnimatedButton
                        onClick={handleSubmit}
                        disabled={!isButtonEnabled}
                    >
                        Send infos
                    </AnimatedButton>
                </div>
            </div>
        </Fragment>
    )
}