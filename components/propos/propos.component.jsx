import {Container, Title, ProposContainer} from "./propos.styles";
import ProposCard from "../propos-card/propos-card.component";


const Propos = () => {
    return (
        <Container>
            <Title>A Propos</Title>
            <ProposCard title="QUI SOMMES-NOUS ?">
            <p style={{display: "block", marginBottom: ".6rem"}}> 
            Une agence de marketing digital créative basée à Oujda a pour vocation d{"'"}accompagner les entreprises nationales et internationales tout au long de leurs projets de communication numérique.
            </p>
            <strong>ACTUNOW</strong> réunit sous le même toit l’intégralité des métiers du digital, avec des experts jeunes pour chaque domaine d’activité ; Des Experts en Webmarketing, Webdesign (UX/UI), Développeurs Front &amp; Back-End, Créateurs de Contenus, etc..).
            </ProposCard>
            <ProposCard title="Ce que nous faisons">
            <p style={{display: "block", marginBottom: ".8rem"}}><strong>ACTUNOW</strong> propose une gamme complète des services :</p>
            <p style={{display: "block", marginBottom: ".8rem"}}>Des compétences techniques, commerciales, et de Business Consulting. </p>
            <p style={{display: "block", marginBottom: ".8rem"}}>Avec la capacité à se mettre à la place du client et être à l’écoute de son égard.</p>
L’agence <strong>ACTUNOW</strong> est spécialisée dans le Webmarketing, le développement de sites internet (Site Mobile, Site Vitrine, e-commerce, Site d’Actualité), le développement des applications mobiles, le développement des Progiciels de Gestion Intégré, aussi bien que des logiciels de Gestion de Relation Client.

            </ProposCard>
            <ProposCard title="Notre Philosophie">
            <p style={{display: "block", marginBottom: ".8rem"}}>Le digital, en mouvement permanent, nécessite d’être souple ! C’est pourquoi notre équipe de projet est unique et composée en fonction de nos clients et de leurs objectifs. Une fois nos campagnes optimisées, vos objectifs atteints, notre relation ne s’arrête pas là. </p>

            <p style={{display: "block", marginBottom: ".8rem"}}>Nous ajustons vos leviers sur la durée de manière à être toujours plus performants.</p>
            <p style={{display: "block", marginBottom: ".8rem"}}>L’agence construit ainsi pour vous des stratégies digitales globales, sur-mesure et durables.</p>
            Donc, on croit que notre mission auprès de vous n’est pas celle d’un simple prestataire de services mais d’un partenaire! Nous travaillons main dans la main avec vous, comme un membre de votre équipe, pour mener à bien vos objectifs, avec professionnalisme et pertinence.

            </ProposCard>
            <ProposCard title="Notre manière de travail">
            Comprendre vos objectifs, vos personas, identifier les approches les plus efficaces.
 Des solutions créatives technologiques pour renforcer votre image et développer votre activité.
Un design moderne et une conversion optimale pour accroître vos performances.


            </ProposCard>
        </Container>

    )
}

export default Propos