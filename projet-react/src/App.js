import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import Ressources from './ressources';
import Details from './components/details';
import Details_Mano_STEG from './components/details_Mano_STEG';
import Details_Compteur_Turbine_STEG from './components/details_Compteur_Turbine_STEG'; 
import Details_Compteur_Turbine_Entreprise from './components/details_Compteur_Turbine_Entreprise'; 
import Details_Compteur_Membrane_STEG from './components/details_Compteur_Membrane_STEG'; 
import Details_Compteur_Membrane_Entreprise from './components/details_Compteur_Membrane_Entreprise'; 
import Details_Compteur_Piston_STEG from './components/details_Compteur_Piston_STEG';
import Details_Compteur_Piston_Entreprise from './components/details_Compteur_Piston_Entreprise';
import Details_Correcteurs_STEG from './components/details_Correcteurs_STEG';
import Details_Correcteurs_Entreprise from './components/details_Correcteurs_Entreprise';
import Details_Calculateurs_STEG from './components/details_Calculateurs_STEG';
import Details_Calculateurs_Entreprise from './components/details_Calculateurs_Entreprise';
import Login from './Login';
import Calculateurs_STEG from './components/Calculateurs_STEG';
import Calculateurs_Entreprise from './components/Calculateurs_Entreprise';
import Mano_entr from './components/Mano_entreprise';
import Mano_STEG from './components/Mano_STEG';
import Compteur_Turbine_STEG from './components/Compteur_Turbine_STEG';
import Compteur_Turbine_Entreprise from './components/Compteur_Turbine_Entreprise';
import Compteur_Membrane_STEG from './components/Compteur_Membrane_STEG';
import Compteur_Membrane_Entreprise from './components/Compteur_Membrane_Entreprise';
import Compteur_Piston_STEG from './components/Compteur_Piston_STEG';
import Compteur_Piston_Entreprise from './components/Compteur_Piston_Entreprise';
import Correcteurs_STEG from './components/Correcteurs_STEG';
import Correcteurs_Entreprise from './components/Correcteurs_Entreprise';
import backgroundImage from './Images/steg.jpg';
import image1 from './Images/image1.jpg';
import image2 from './Images/image2.jpg';
import image3 from './Images/image3.jpg';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddCompteurTurbineSTEG from './AddCompteurTurbineSTEG';
import AddCompteurTurbineEntreprise from './AddCompteurTurbineEntreprise';
import AddCompteurMembraneSTEG from './AddCompteurMembraneSTEG';
import AddCompteurMembraneEntreprise from './AddCompteurMembraneEntreprise';
import AddCompteurPistonSTEG from './AddCompteurPistonSTEG';
import AddCompteurPistonEntreprise from './AddCompteurPistonEntreprise';
import AddCalculateurSTEG from './AddCalculateurSTEG';
import AddCalculateurEntreprise from './AddCalculateurEntreprise';
import AddCorrecteurSTEG from './AddCorrecteurSTEG';
import AddCorrecteurEntreprise from './AddCorrecteurEntreprise';
import AddManometreSTEG from './AddManometreSTEG';
import AddManometreEntreprise from './AddManometreEntreprise';




function Home() {
  const title = 'Bienvenue sur la Plateforme des Agents de STEG';
  return (
    <div className="background-image" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="content">
        <h1>{title}</h1>
        <p>BIENVENUE sur la plateforme dédiée aux agents de la Société Tunisienne de l'Électricité et du Gaz (S.T.E.G). Elle a été spécialement conçue pour soutenir efficacement les fonctionnaires du département de comptage et de qualité du gaz. Notre département se divise en deux principales branches :</p>
        <ol type="1">
          <li>Division Essai et Mesures : Nous assurons la sécurité des systèmes de comptage en planifiant et en réalisant la calibration et l'étalonnage nécessaires. Nous sommes également chargés de la vérification et de l'approbation des installations gazières à travers le pays.</li>
          <li>Division Maintenance Équipement : Nous assurons la maintenance des compteurs de la STEG dans la mesure des ressources disponibles. Notre travail inclut le suivi et la révision de l'état de maintenance des systèmes de comptage et de la qualité du gaz.</li>
        </ol>
      </div>
      <div className="carousel-container">
        <Carousel>
          <Carousel.Item>
            <img src={image1} alt="Calibration des systèmes de mesure" />
            <Carousel.Caption>
              <h3>Calibration des systèmes de mesure</h3>
              <p>Précision et fiabilité garanties.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image2} alt="Maintenance des compteurs" />
            <Carousel.Caption>
              <h3>Maintenance des compteurs</h3>
              <p>Service rapide et efficace.</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={image3} alt="Autre image" />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ressources" element={<Ressources />} />
          <Route path="/login" element={<Login />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="/details_Mano_STEG/:id" element={<Details_Mano_STEG />} />
          <Route path="/details_Compteur_Turbine_STEG/:id" element={<Details_Compteur_Turbine_STEG />} />
          <Route path="/details_Compteur_Turbine_Entreprise/:id" element={<Details_Compteur_Turbine_Entreprise />} />
          <Route path="/details_Compteur_Membrane_STEG/:id" element={<Details_Compteur_Membrane_STEG />} />
          <Route path="/details_Compteur_Membrane_Entreprise/:id" element={<Details_Compteur_Membrane_Entreprise />} />
          <Route path="/details_Compteur_Piston_STEG/:id" element={<Details_Compteur_Piston_STEG />} />
          <Route path="/details_Compteur_Piston_Entreprise/:id" element={<Details_Compteur_Piston_Entreprise />} />
          <Route path="/details_Correcteurs_STEG/:id" element={<Details_Correcteurs_STEG />} />
          <Route path="/details_Correcteurs_Entreprise/:id" element={<Details_Correcteurs_Entreprise />} />
          <Route path="/details_Calculateurs_STEG/:id" element={<Details_Calculateurs_STEG />} />
          <Route path="/details_Calculateurs_Entreprise/:id" element={<Details_Calculateurs_Entreprise />} />
          <Route path="/components/Calculateurs_STEG" element={<Calculateurs_STEG />} />
          <Route path="/components/Calculateurs_Entreprise" element={<Calculateurs_Entreprise />} />
          <Route path="/components/Correcteurs_STEG" element={<Correcteurs_STEG />} />
          <Route path="/components/Correcteurs_Entreprise" element={<Correcteurs_Entreprise />} />
          <Route path="/components/Compteur_Turbine_STEG" element={<Compteur_Turbine_STEG />} />
          <Route path="/components/Compteur_Turbine_Entreprise" element={<Compteur_Turbine_Entreprise />} />
          <Route path="/components/Compteur_Membrane_STEG" element={<Compteur_Membrane_STEG />} />
          <Route path="/components/Compteur_Membrane_Entreprise" element={<Compteur_Membrane_Entreprise />} />
          <Route path="/components/Compteur_Piston_STEG" element={<Compteur_Piston_STEG />} />
          <Route path="/components/Compteur_Piston_Entreprise" element={<Compteur_Piston_Entreprise />} />
          <Route path="/components/Mano_entreprise" element={<Mano_entr />} />
          <Route path="/components/Mano_STEG" element={<Mano_STEG />} />
          <Route path="/AddCompteurTurbineSTEG" element={<AddCompteurTurbineSTEG />} />
          <Route path="/AddCompteurTurbineEntreprise" element={<AddCompteurTurbineEntreprise />} />
          <Route path="/AddCompteurMembraneSTEG" element={<AddCompteurMembraneSTEG />} />
          <Route path="/AddCompteurMembraneEntreprise" element={<AddCompteurMembraneEntreprise />} />
          <Route path="/AddCompteurPistonSTEG" element={<AddCompteurPistonSTEG />} />
          <Route path="/AddCompteurPistonEntreprise" element={<AddCompteurPistonEntreprise />} />
          <Route path="/AddCalculateurSTEG" element={<AddCalculateurSTEG />} />
          <Route path="/AddCalculateurEntreprise" element={<AddCalculateurEntreprise />} />
          <Route path="/AddCorrecteurSTEG" element={<AddCorrecteurSTEG />} />
          <Route path="/AddCorrecteurEntreprise" element={<AddCorrecteurEntreprise />} />
          <Route path="/AddManometreSTEG" element={<AddManometreSTEG />} />
          <Route path="/AddManometreEntreprise" element={<AddManometreEntreprise />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;