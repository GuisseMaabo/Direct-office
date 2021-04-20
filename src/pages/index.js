import React, { Component } from "react";
import { Link } from "gatsby";
import { Banner, TextWrapper, MoreText, SectionTwo, SectionThree, SectionFour, FormFive, FlexBoxIndex, GenereicPara, GenericH2 } from "../styles/IndexStyles";
import Layout from "../components/layout"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faHtml5, faJs, faReact, faCss3, faGalacticSenate } from '@fortawesome/free-brands-svg-icons'
import { faHeart, faCode, faGem, fas } from '@fortawesome/free-solid-svg-icons';
import { navigate } from 'gatsby-link';

library.add(faHeart, faCode, faGem, fab, fas);

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

class IndexPage extends Component {
    constructor(props) {
        super(props)
        this.state = { name: "", email: "", message: "" };
    }

    handleSubmit = e => {
        e.preventDefault();
        const form = e.target
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode({ 'form-name': form.getAttribute('name'), ...this.state })
        })
          .then(() => navigate(form.getAttribute('action')))
          .catch(error => alert(error));


      };

      handleChange = e => this.setState({ [e.target.name]: e.target.value });

      render() {
        const { name, email, message } = this.state;
          return (
            <Layout>
                <section style={{ position: 'relative' }}>
                    <Banner></Banner>
                    <TextWrapper>
                        <div>
                            <h2 style={{ color: '#2d4470' }} >DIRECT-OFFICE</h2>
                            <GenereicPara>Est synonyme de Loyauté<br />
                                Honnêteté et <br />
                                Professionnalisme!</GenereicPara>
                            <Link to="#offres">Nos Offres</Link>
                        </div>
                    </TextWrapper>
                    <MoreText> Voir Plus</MoreText>
                </section>
                <SectionTwo>
                    <div>
                        <GenericH2>Notre Mission</GenericH2>
                        <GenereicPara lessSize grey style={{color: '#3d3433'}}>Offrir une large gamme de produits de différentes marques à nos clients,<br />
                            pour répondre à tous leurs besoins et budgets.</GenereicPara>
                    </div>
                </SectionTwo>
                <SectionThree>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="papeterie.jpg" alt="pic01"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Papeterie</GenericH2>
                            <GenereicPara lessSize lessSpacing>Pour répondre aux différents choix de nos clients, nous avons présélectionné  un large assortiment d'articles de papeterie à prix étudiés.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex inverse>
                        <div className="text__section3">
                            <GenericH2 none>Classement/Archivage</GenericH2>
                            <GenereicPara lessSize lessSpacing>Afin de rendre vos étagères attrayantes et les documents facilement repérables,  classez et protégez vos documents selon vos propres méthodes et  optez pour les classeurs à couvertures résistantes.</GenereicPara>
                        </div>
                        <div className="image">
                            <img src="classement-archivage.jpg" alt="pic02"/>
                        </div>
                    </FlexBoxIndex>
                    <FlexBoxIndex>
                        <div className="image">
                            <img src="ecriture.jpg" alt="pic03"/>
                        </div>
                        <div className="text__section3">
                            <GenericH2 none>Ecriture et correcteurs</GenericH2>
                            <GenereicPara lessSize lessSpacing>Des stylos aux correcteurs en passant par les feutres, marqueurs, surligneur ainsi que les crayons et porte-mines, quels que soient vos besoins.</GenereicPara>
                        </div>
                    </FlexBoxIndex>
                </SectionThree>
                <SectionFour>
                    <div className="header__section4">
                        <div id="offres" className="title__section4">Nos Offres</div>
                        <GenereicPara lessSize grey style={{color: '#3d3433'}}>Spécialisée dans la fourniture de bureau, avec des gammes larges et diversifiées en papeterie, écriture, classement, archivage et services géneraux.
                        </GenereicPara>
                    </div>
                    <div className="grid__section4">
                        <div className="item1" style={{ backgroundColor: '#4D508E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faReact} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Papeterie</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Pour répondre aux différents choix de nos clients, nous avons présélectionné  un large assortiment d'articles de papeterie à prix étudiés. Papier multi-usages à partir de 80g/m², chemises : ( bulles, cartonnées, mi-fin, à rabat, à clip….),
                             carnets, bloc-notes, registres, cahier…</GenereicPara>
                        </div>
                        <div className="item2" style={{ backgroundColor: '#4A4D89' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon="code" color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Classement/archivage</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Nous vous offrons une large gamme de produits vous permettant ainsi de vous procurer des classeurs de différents coloris, à levier ou à anneaux, des chemises à sangles ou à rabat, des pochettes perforées pour ranger vos factures
                             et correspondances et les retrouver sans prise de tête et beaucoup d’autres articles à découvrir au fur et à mesure.</GenereicPara>
                        </div>
                        <div className="item3" style={{ backgroundColor: '#484A83' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faJs} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Ecriture et correcteurs</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Des stylos aux correcteurs en passant par les feutres, marqueurs, surligneur ainsi que les crayons et porte-mines, quels que soient vos besoins et l'utilisation que vous en ferez, 
                            nous disposons d'un large choix de produits de qualité, 
                            à prix abordables toute l'année..</GenereicPara>
                        </div>
                        <div className="item4" style={{ backgroundColor: '#45477E' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faHtml5} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Petites fournitures</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Cette famille de fournitures n’est pas aussi petite vu les différents types et genres de produits qu’elle regroupe :
                             stylos, crayons, attache-papier, pochettes et autres feuilles de papier.
                             Direct Office a opté pour élargir l’offre et proposer à ses clients les marques de leur choix et des articles répondant à leurs exigences.</GenereicPara>
                        </div>
                        <div className="item5" style={{ backgroundColor: '#424479' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faCss3} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>Accessoires bureau</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500, 
                            quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen.</GenereicPara>
                        </div>
                        <div className="item6" style={{ backgroundColor: '#3F4174' }}>
                            <div className="flex__section4">
                                <FontAwesomeIcon icon={faGalacticSenate} color="#00FFCC" size="3x" fixedWidth />
                                <GenericH2 none>machines de bureau</GenericH2>
                            </div>
                            <GenereicPara lessSize lessSpacing grey>Le Lorem Ipsum est simplement du faux texte employé dans la composition et la mise en page avant impression. Le Lorem Ipsum est le faux texte standard de l'imprimerie depuis les années 1500,
                             quand un imprimeur anonyme assembla ensemble des morceaux de texte pour réaliser un livre spécimen</GenereicPara>
                        </div>
                    </div>
                </SectionFour>
                <section style={{ position: 'relative' }}>
                    <Banner parallax></Banner>
                    <FormFive>
                        <form name="contact"
                              method="post"
                              action="/thanks/"
                              data-netlify="true"
                              onSubmit={this.handleSubmit}>
                            <div className="fields">
                                <GenericH2 none>Contactez Nous</GenericH2>
                                <input type="text" name="name" id="name" placeholder="Name" value={name} onChange={this.handleChange} />
                                <input type="email" name="email" id="email" placeholder="Email" value={email} onChange={this.handleChange} />
                                <textarea name="message" id="message" placeholder="Message" rows="7" value={message} onChange={this.handleChange}></textarea>
                                <div className="actions">
                                    <input type="submit" value="Send Message" className="button__primary" />
                                </div>
                            </div>
                        </form>
                    </FormFive>
                </section>
            </Layout>
        )
      }
}

export default IndexPage;
