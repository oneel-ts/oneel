import {Fragment} from "react";
import styles from "./services.module.css";
import TextField from "@/src/frontend/components/atoms/text-field";
import ComputerIcon from '@mui/icons-material/Computer';
import ApartmentIcon from '@mui/icons-material/Apartment';
import BuildIcon from '@mui/icons-material/Build';
import SecurityIcon from '@mui/icons-material/Security';
import StorageIcon from '@mui/icons-material/Storage';
import LanguageIcon from '@mui/icons-material/Language';

export default function Services() {



    const servicos = [
        {
            icone: <ComputerIcon sx={{fontSize: 40}}/>,
            titulo: "Desenvolvimento de Software",
            itens: [
                "Criação de sites institucionais e lojas virtuais (e-commerce)",
                "Sistemas personalizados sob medida para o seu negócio",
                "Aplicações web e mobile com design moderno e responsivo"
            ]
        },
        {
            icone: <ApartmentIcon sx={{fontSize: 40}}/>,
            titulo: "Visualização Arquitetônica",
            itens: [
                "Modelagem 3D de ambientes internos e externos",
                "Renderizações realistas para apresentações e projetos",
                "Animações e tours virtuais imersivos"
            ]
        },
        {
            icone: <BuildIcon sx={{fontSize: 40}}/>,
            titulo: "Instalações Técnicas",
            itens: [
                "Instalação de sistemas de segurança com câmeras e sensores",
                "Montagem de televisores, projetores e equipamentos multimídia",
                "Estruturação técnica de ambientes corporativos e home office"
            ]
        },
        {
            icone: <SecurityIcon sx={{fontSize: 40}}/>,
            titulo: "Automação Residencial",
            itens: [
                "Integração de dispositivos inteligentes (luzes, persianas, etc.)",
                "Controle remoto via aplicativo ou assistente de voz",
                "Soluções personalizadas para conforto e segurança"
            ]
        },
        {
            icone: <StorageIcon sx={{fontSize: 40}}/>,
            titulo: "Infraestrutura de TI",
            itens: [
                "Montagem e organização de servidores e redes locais",
                "Manutenção preventiva e corretiva de equipamentos",
                "Consultoria em estruturação de ambientes tecnológicos"
            ]
        },
        {
            icone: <LanguageIcon sx={{fontSize: 40}}/>,
            titulo: "Consultoria em Presença Digital",
            itens: [
                "Criação e gestão de perfis em redes sociais",
                "Otimização de conteúdo para mecanismos de busca (SEO)",
                "Campanhas de marketing digital e anúncios online"
            ]
        },

    ];

    return (
        <Fragment>
            <div className={styles.containerContent}>
                <div className={styles.containerBox}>
                    <div className={styles.containerTitle}>
                        <h1 className={styles.tituloTecnologico}>Soluções Tecnológicas Integradas para o Seu Negócio</h1>
                    </div>

                    <div className={styles.servicosGrid}>
                        {servicos.map((servico, index) => (
                            <div key={index} className={styles.servicoCard}>
                                <div className={styles.servicoIcone}>
                                    {servico.icone}
                                </div>
                                <h3 className={styles.servicoTitulo}>{servico.titulo}</h3>
                                <ul className={styles.servicoLista}>
                                    {servico.itens.map((item, itemIndex) => (
                                        <li key={itemIndex} className={styles.servicoItem}>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                    <div className={styles.propostaContainer}>
                        <p className={styles.propostaTexto}>
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