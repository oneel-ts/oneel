import {useEffect, useState} from "react";
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
        <section className={styles.contactContainer}>
            <ToastContainer/>
            <article className={styles.contactContent}>
                <aside className={styles.infoColumn}>
                    <section className={styles.infoCard}>
                        <h2 className={styles.infoTitle}>Why Contact Us?</h2>
                        <p className={styles.infoText}>
                            Our team of experts is ready to listen to your needs
                            and offer personalized solutions that meet your expectations.
                        </p>

                        <ul className={styles.featuresList}>
                            <li className={styles.featureItem}>
                                <figure className={styles.featureIcon} aria-hidden="true">
                                    <AccessTimeIcon/>
                                </figure>
                                <article>
                                    <h3>Fast Response</h3>
                                    <p>We respond within 24 hours</p>
                                </article>
                            </li>

                            <li className={styles.featureItem}>
                                <figure className={styles.featureIcon} aria-hidden="true">
                                    <GroupIcon/>
                                </figure>
                                <article>
                                    <h3>Specialized Team</h3>
                                    <p>Professionals with market experience</p>
                                </article>
                            </li>

                            <li className={styles.featureItem}>
                                <figure className={styles.featureIcon} aria-hidden="true">
                                    <SettingsIcon/>
                                </figure>
                                <article>
                                    <h3>Custom Projects</h3>
                                    <p>Solutions tailored to your needs</p>
                                </article>
                            </li>
                        </ul>
                    </section>

                    <blockquote className={styles.testimonialCard}>
                        <div className={styles.testimonialText}>
                            <TextField
                                label={"The team exceeded all our expectations! I strongly recommend their services."}/>
                        </div>
                        <footer className={styles.testimonialAuthor}>
                            <article className={styles.authorInfo}>
                                <div className={styles.authorDetails}>
                                    <cite className={styles.authorName}>Renata</cite>
                                    <p className={styles.authorCompany}>King Bites</p>
                                </div>
                                <figure className={styles.authorImageContainer}>
                                    <Image
                                        src={kingbites}
                                        alt="Logo da King Bites"
                                        className={styles.authorImage}
                                        width={150}
                                        height={80}
                                    />
                                </figure>
                            </article>
                        </footer>
                    </blockquote>
                </aside>

                <section id={id} className={styles.formColumn}>
                    <article className={styles.containerModal}>
                        <header className={styles.miniHeaderModal}>
                            <h2>Request Form</h2>
                            <div className={styles.headerIcons} aria-hidden="true">
                                <span className={styles.headerIcon}></span>
                            </div>
                        </header>

                        <p className={styles.formIntro}>
                            Fill out the form below so we can better understand your project
                            and get in touch with the best solutions for you.
                        </p>

                        <form className={styles.containerForm} onSubmit={(e) => { e.preventDefault(); handleSubmit(); }}>
                            <fieldset className={styles.formFieldContainer}>
                                <InputField
                                    key={`name-${resetTrigger}`}
                                    nameField={'Full Name'}
                                    typeInput={"text"}
                                    placeholder={"Enter your full name"}
                                    fieldIcon={<AccountCircleIcon/>}
                                    value={formData.name}
                                    onChange={(value) => handleInputChange('name', value)}
                                />
                            </fieldset>
                            <fieldset className={styles.formFieldContainer}>
                                <InputField
                                    key={`email-${resetTrigger}`}
                                    nameField={'Email'}
                                    typeInput={"email"}
                                    placeholder={"example@domain.com"}
                                    fieldIcon={<EmailIcon/>}
                                    value={formData.email}
                                    onChange={(value) => handleInputChange('email', value)}
                                />
                            </fieldset>
                            <fieldset className={styles.formFieldContainer}>
                                <InputField
                                    key={`telephone-${resetTrigger}`}
                                    nameField={'Phone'}
                                    typeInput={"tel"}
                                    placeholder={"Enter your phone number with area code"}
                                    fieldIcon={<LocalPhoneIcon/>}
                                    value={formData.telephone}
                                    onChange={(value) => handleInputChange('telephone', value)}
                                />
                            </fieldset>
                            <fieldset className={styles.formFieldContainer}>
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
                            </fieldset>
                            <fieldset className={styles.formFieldContainer}>
                                <div className={styles.textareaContainer}>
                                    <label className={styles.textareaLabel} htmlFor="project-description">Describe your project</label>
                                    <div className={styles.textareaWrapper}>
                                        <textarea
                                            id="project-description"
                                            key={`project-${resetTrigger}`}
                                            className={styles.textarea}
                                            placeholder={"Tell us a bit about what you need"}
                                            value={formData.projectDescription}
                                            onChange={(e) => handleInputChange('projectDescription', e.target.value)}
                                            rows={4}
                                        />
                                        <span className={styles.textareaIcon} aria-hidden="true">
                                            <ChatIcon/>
                                        </span>
                                    </div>
                                </div>
                            </fieldset>

                            <div className={styles.buttonContainer}>
                                <AnimatedButton
                                    onClick={handleSubmit}
                                    disabled={!isButtonEnabled}
                                >
                                    Submit Request
                                </AnimatedButton>
                            </div>
                        </form>

                        <footer className={styles.formFooter}>
                            <div className={styles.orDivider}>
                                <hr className={styles.dividerLine} />
                                <span className={styles.orText}>or</span>
                                <hr className={styles.dividerLine} />
                            </div>
                            <section className={styles.alternativeContact}>
                                <h3>Contact us directly:</h3>
                                <ul className={styles.contactMethods}>
                                    <li className={styles.contactMethod}>
                                        <figure className={styles.contactIcon} aria-hidden="true">
                                            <EmailIcon fontSize="medium" />
                                        </figure>
                                        <span>oneeltechsolutions@hotmail.com</span>
                                    </li>
                                    <li className={styles.contactMethod}>
                                        <figure className={styles.contactIcon} aria-hidden="true">
                                            <PhoneIcon fontSize="medium" />
                                        </figure>
                                        <span>(857)880-0790</span>
                                    </li>
                                    <li className={styles.contactMethod}>
                                        <figure className={styles.contactIcon} aria-hidden="true">
                                            <LocationOnIcon fontSize="medium" />
                                        </figure>
                                        <span>Boston, Massachusetts</span>
                                    </li>
                                    <li className={styles.contactMethod}>
                                        <figure className={styles.contactIcon} aria-hidden="true">
                                            <ReactCountryFlag countryCode="US" svg style={{ width: '24px', height: '16px' }} />
                                        </figure>
                                        <span>United States</span>
                                    </li>
                                </ul>
                            </section>
                        </footer>
                    </article>
                </section>
            </article>
        </section>
    )
}