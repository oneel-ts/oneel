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
import TextField from "../../atoms/text-field";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import Image from "next/image";
import kingbites from "../../../../../public/assets/king-bites.jpg"
import ReactCountryFlag from "react-country-flag";
import PhoneIcon from '@mui/icons-material/Phone';
import LocationOnIcon from '@mui/icons-material/LocationOn';

type Props = {
    id: string;
}

export default function ContactUsForm({id}: Props) {
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

                console.log('Email sent successfully!', response);

                toast.success("Message sent successfully", {
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
                console.error('Error sending email:', error);
                toast.error(`Error sending email: ${error}`, {
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
            <div className={styles.contactContainer}>
                <div className={styles.contactContent}>
                    <div className={styles.infoColumn}>
                        <div className={styles.infoCard}>
                            <h2 className={styles.infoTitle}>Why Contact Us?</h2>
                            <p className={styles.infoText}>
                                Our team of experts is ready to listen to your needs
                                and offer personalized solutions that meet your expectations.
                            </p>

                            <div className={styles.featuresList}>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <AccessTimeIcon/>
                                    </div>
                                    <div>
                                        <h3>Fast Response</h3>
                                        <p>We respond within 24 hours</p>
                                    </div>
                                </div>

                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <GroupIcon/>
                                    </div>
                                    <div>
                                        <h3>Specialized Team</h3>
                                        <p>Professionals with market experience</p>
                                    </div>
                                </div>

                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <SettingsIcon/>
                                    </div>
                                    <div>
                                        <h3>Custom Projects</h3>
                                        <p>Solutions tailored to your needs</p>
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className={styles.testimonialCard}>
                            <div className={styles.testimonialText}>
                                <TextField
                                    label={"The team exceeded all our expectations! I strongly recommend their services."}/>
                            </div>
                            <div className={styles.testimonialAuthor}>
                                <div className={styles.authorInfo}>
                                    <div className={styles.authorDetails}>
                                        <p className={styles.authorName}>Renata</p>
                                        <p className={styles.authorCompany}>King Bites</p>
                                    </div>
                                    <div className={styles.authorImageContainer}>
                                        <Image 
                                            src={kingbites} 
                                            alt={"kingBites"}
                                            className={styles.authorImage}
                                            width={150}
                                            height={80}
                                            objectFit="cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div id={id} className={styles.formColumn}>
                        <div className={styles.containerModal}>
                            <div className={styles.miniHeaderModal}>
                                <div>Request Form</div>
                                <div className={styles.headerIcons}>
                                    <div className={styles.headerIcon}></div>
                                </div>
                            </div>

                            <div className={styles.formIntro}>
                                <p>Fill out the form below so we can better understand your project
                                    and get in touch with the best solutions for you.</p>
                            </div>

                            <div className={styles.containerForm}>
                                <div className={styles.formFieldContainer}>
                                    <InputField
                                        key={`name-${resetTrigger}`}
                                        nameField={'Full Name'}
                                        typeInput={"text"}
                                        placeholder={"Enter your full name"}
                                        fieldIcon={<AccountCircleIcon/>}
                                        value={formData.name}
                                        onChange={(value) => handleInputChange('name', value)}
                                    />
                                </div>
                                <div className={styles.formFieldContainer}>
                                    <InputField
                                        key={`email-${resetTrigger}`}
                                        nameField={'Email'}
                                        typeInput={"email"}
                                        placeholder={"example@domain.com"}
                                        fieldIcon={<EmailIcon/>}
                                        value={formData.email}
                                        onChange={(value) => handleInputChange('email', value)}
                                    />
                                </div>
                                <div className={styles.formFieldContainer}>
                                    <InputField
                                        key={`telephone-${resetTrigger}`}
                                        nameField={'Phone'}
                                        typeInput={"tel"}
                                        placeholder={"Enter your phone number with area code"}
                                        fieldIcon={<LocalPhoneIcon/>}
                                        value={formData.telephone}
                                        onChange={(value) => handleInputChange('telephone', value)}
                                    />
                                </div>
                                <div className={styles.formFieldContainer}>
                                    <SelectField
                                        key={`services-${resetTrigger}`}
                                        nameField={"Service of Interest"}
                                        typeInput={"text"}
                                        placeholder={"Select the desired service"}
                                        fieldIcon={<WorkIcon/>}
                                        value={formData.services}
                                        onChange={(value) => handleInputChange('services', value)}
                                        options={[
                                            {value: 'Software Development', label: 'Software Development'},
                                            {value: 'Architectural Visualization', label: 'Architectural Visualization'},
                                            {value: 'Technical Installations', label: 'Technical Installations'},
                                            {value: 'Home Automation', label: 'Home Automation'},
                                            {value: 'IT Infrastructure', label: 'IT Infrastructure'},
                                            {value: 'Digital Presence Consulting', label: 'Digital Presence Consulting'}
                                        ]}
                                    />
                                </div>
                                <div className={styles.formFieldContainer}>
                                    <div className={styles.textareaContainer}>
                                        <label className={styles.textareaLabel}>Describe your project</label>
                                        <div className={styles.textareaWrapper}>
                                            <textarea
                                                key={`project-${resetTrigger}`}
                                                className={styles.textarea}
                                                placeholder={"Tell us a bit about what you need"}
                                                value={formData.projectDescription}
                                                onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                                                rows={4}
                                            />
                                            <div className={styles.textareaIcon}>
                                                <ChatIcon/>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className={styles.buttonContainer}>
                                    <AnimatedButton
                                        onClick={handleSubmit}
                                        disabled={!isButtonEnabled}
                                    >
                                        Submit Request
                                    </AnimatedButton>
                                </div>
                            </div>
                            <div className={styles.formFooter}>
                                <div className={styles.orDivider}>
                                    <span className={styles.dividerLine}></span>
                                    <span className={styles.orText}>or</span>
                                    <span className={styles.dividerLine}></span>
                                </div>
                                <div className={styles.alternativeContact}>
                                    <p>Contact us directly:</p>
                                    <div className={styles.contactMethods}>
                                        <div className={styles.contactMethod}>
                                            <div className={styles.contactIcon}>
                                                <EmailIcon fontSize="medium" />
                                            </div>
                                            <span>oneeltechsolutions@hotmail.com</span>
                                        </div>
                                        <div className={styles.contactMethod}>
                                            <div className={styles.contactIcon}>
                                                <PhoneIcon fontSize="medium" />
                                            </div>
                                            <span>(857)8800790</span>
                                        </div>
                                        <div className={styles.contactMethod}>
                                            <div className={styles.contactIcon}>
                                                <LocationOnIcon fontSize="medium" />
                                            </div>
                                            <span>Boston, Massachusetts</span>
                                        </div>
                                        <div className={styles.contactMethod}>
                                            <div className={styles.contactIcon}>
                                                <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '16px' }} />
                                            </div>
                                            <span>United States</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}