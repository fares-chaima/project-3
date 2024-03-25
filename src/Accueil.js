import "./css/Accueil.css";
const Accueil = () => {
  
    return (
<>
        <div className="home">
        <div className="outer">
          <div className="inside">
             <h1>Maîtrisez vos <br /> stocks,</h1><br />
             <h3>libérez votre potentiel.</h3><br />
             <p>avec efficacité et fluidité pour une <br /> gestion d'entreprise optimale</p>
          </div>
        </div>     
        </div>
        <div className="miNnav">
          <a href="#" style={{textDecoration: "underline 5px solid #01C7BE"}}>nos services</a>
          <a href="#">Télécharger App</a>

        </div>
        </>     
      );
}

export default Accueil;