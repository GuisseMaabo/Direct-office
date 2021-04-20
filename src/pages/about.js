import React from 'react';
import Layout from "../components/layout";
import { Link } from "gatsby";
import { Banner, TextWrapper, GenereicPara, GenericH3, SectionTwo, GenereicParaAbout } from "../styles/IndexStyles";

const about = () => {
    return (
        <Layout>
        <section style={{ position: 'relative' }}>
            <Banner different></Banner>
            <TextWrapper>
                <div>
                    <GenericH3 none> Qui Sommes-nous </GenericH3>
                    <GenereicPara lessSize grey>DIRECT-OFFICE est un groupe expérimenté et passionné  Chaque client avec lequel nous travaillons fait partie de l'équipe. Ensemble, nous relevons les défis et célébrons les victoires.
                    </GenereicPara>
                    <Link to="#offres">Our Work</Link>
                </div>
            </TextWrapper>
        </section>
        <SectionTwo white>
                <div>
                    <GenericH3 dark none>About Us</GenericH3>
                    <GenereicParaAbout lessSize grey><b>DIRECT-OFFICE</b>Spécialiséé à son début dans les fournitures de bureau avec des offres en papeterie,
                    écriture et classement de marques différentes tout en continuant à developper ses activités en les produits et offres afin de répondre 
                    à toutes les demandes et attentes de ses Clients.</GenereicParaAbout>
                    <GenereicParaAbout lessSize grey>Nous proposons une large gamme de fourniture de bureau: papeterie, classement & archivage, écriture, services générau et petits accessoires!</GenereicParaAbout>
                </div>
            </SectionTwo>
        </Layout>
    )
}

export default about
