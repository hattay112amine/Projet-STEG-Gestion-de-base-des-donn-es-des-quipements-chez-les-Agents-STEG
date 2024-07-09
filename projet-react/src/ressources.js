import React from 'react';
import { Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Ressources.css';

const Ressources = () => {
  return (
    <div className="container2">
      <div className="row">
        <div className="col-md-6 mx-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" size="lg" className="w-100">
              Compteurs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/components/Compteur_Turbine_STEG">Compteurs à TURBINE - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Compteur_Turbine_Entreprise">Compteurs à TURBINE - ENTREPRISE</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Compteur_Membrane_STEG">Compteurs à MEMBRANE - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Compteur_Membrane_Entreprise">Compteurs à MEMBRANE - ENTREPRISE</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Compteur_Piston_STEG">Compteurs à PISTONS ROTATIFS - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Compteur_Piston_Entreprise">Compteurs à PISTONS ROTATIFS - ENTREPRISE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-6 mx-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" size="lg" className="w-100">
              Calculateurs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/components/Calculateurs_STEG">Calculateurs - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Calculateurs_Entreprise">Calculateurs - ENTREPRISE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-6 mx-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" size="lg" className="w-100">
              Correcteurs
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/components/Correcteurs_STEG">Correcteurs - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Correcteurs_Entreprise">Correcteurs - ENTREPRISE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>

        <div className="col-md-6 mx-auto">
          <Dropdown>
            <Dropdown.Toggle variant="outline-dark" size="lg" className="w-100">
              Manomètres
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item as={Link} to="/components/Mano_STEG">Manomètres - STEG</Dropdown.Item>
              <Dropdown.Item as={Link} to="/components/Mano_entreprise">Manomètres - ENTREPRISE</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </div>
  );
};

export default Ressources;