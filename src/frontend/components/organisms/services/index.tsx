import {Fragment} from "react";
import styles from "./services.module.css";
import ComputerIcon from '@mui/icons-material/Computer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

type Props = {
    id: string;
}

export default function Services({id}: Props) {

    const services = [
        {
            icon: <ComputerIcon sx={{fontSize: 40}}/>,
            title: "Desenvolvimento de Software",
            items: [
                "Criação de sites institucionais e lojas virtuais (e-commerce)",
                "Sistemas personalizados sob medida para o seu negócio",
                "Aplicações web e mobile com design moderno e responsivo"
            ]
        },
        {
            icon: <ApartmentIcon sx={{fontSize: 40}}/>,
            title: "Visualização Arquitetônica",
            items: [
                "Modelagem 3D de ambientes internos e externos",
                "Renderizações realistas para apresentações e projetos",
                "Animações e tours virtuais imersivos"
            ]
        },
        {
            icon: <BuildIcon sx={{fontSize: 40}}/>,
            title: "Instalações Técnicas",
            items: [
                "Instalação de sistemas de segurança com câmeras e sensores",
                "Montagem de televisores, projetores e equipamentos multimídia",
                "Estruturação técnica de ambientes corporativos e home office"
            ]
        },
        {
            icon: <SecurityIcon sx={{fontSize: 40}}/>,
            title: "Automação Residencial",
            items: [
                "Integração de dispositivos inteligentes (luzes, persianas, etc.)",
                "Controle remoto via aplicativo ou assistente de voz",
                "Soluções personalizadas para conforto e segurança"
            ]
        },
        {
            icon: <StorageIcon sx={{fontSize: 40}}/>,
            title: "Infraestrutura de TI",
            items: [
                "Montagem e organização de servidores e redes locais",
                "Manutenção preventiva e corretiva de equipamentos",
                "Consultoria em estruturação de ambientes tecnológicos"
            ]
        },
        {
            icon: <LanguageIcon sx={{fontSize: 40}}/>,
            title: "Consultoria em Presença Digital",
            items: [
                "Criação e gestão de perfis em redes sociais",
                "Otimização de conteúdo para mecanismos de busca (SEO)",
                "Campanhas de marketing digital e anúncios online"
            ]
        },
    ];

    return (
        <Fragment>
            <div id={id} className={styles.containerContent}>
                <div className={styles.containerBox}>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.technologicalTitle}>Soluções Tecnológicas Integradas para o Seu Negócio</h1>
                    </div>

                    <div className={styles.servicesGrid}>
                        {services.map((service, index) => (
                            <div key={index} className={styles.serviceCard}>
                                <div className={styles.serviceIcon}>
                                    {service.icon}
                                </div>
                                <h3 className={styles.serviceTitle}>{service.title}</h3>
                                <ul className={styles.serviceList}>
                                    {service.items.map((item, itemIndex) => (
                                        <li key={itemIndex} className={styles.serviceItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.proposalContainer}>
                        <p className={styles.proposalText}>
                            Oferecemos uma abordagem completa para transformar sua visão em realidade. Nossa equipe
                            combina expertise técnica com criatividade para desenvolver soluções que impulsionam
                            seu crescimento e otimizam sua operação. Desde o desenvolvimento de software personalizado
                            até visualizações arquitetônicas e instalações técnicas de alta qualidade, estamos
                            comprometidos em fornecer resultados excepcionais que superam expectativas.
                        </p>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}