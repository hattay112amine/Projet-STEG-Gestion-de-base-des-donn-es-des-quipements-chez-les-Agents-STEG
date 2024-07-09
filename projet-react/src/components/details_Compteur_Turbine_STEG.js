import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoSTEG from './Logo_STEG.jpg'; 
import './index2.css';

function Details_Compteur_Turbine_STEG() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    console.log('Fetching details for ID:', id);
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/components/Compteur_Turbine_STEG/${id}`);
        console.log('Fetched data:', response.data);
        setDetails(response.data);
      } catch (error) {
        console.error('Error fetching resource details:', error);
      }
    };

    fetchData();
  }, [id]);

  const handlePrint = () => {
    window.print();
  };

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:5000/api/components/Compteur_Turbine_STEG/${id}`);
      alert('Ressource supprimée avec succès');
      navigate('/components/Compteur_Turbine_STEG'); // Redirect to another page after deletion
    } catch (error) {
      console.error('Error deleting resource:', error);
    }
  };

  return (
    <div className="container">
      <h1 className="my-4">Fiche technique</h1>
      <div className="logo-container d-print-block">
        <img src={LogoSTEG} alt="STEG Logo" className="img-fluid" />
      </div>
      {details ? (
        <div className="row">
          <div className="col-md-6">
            <h4>N° de Certificat: {details['N° de Certificat']}</h4>
            <p>District: {details['Entreprise/District']}</p>
            <p>BPI/FACTURE/Numéro: {details['BPI/FACTURE/Numéro']}</p>
            <p>Date d'entrée de Facture: {details['BPI/FACTURE/Date d\'entrée']}</p>
            <p>Date de sortie de Facture: {details['BPI/FACTURE/Date de sortie']}</p>
            <p>Réalisé par: {details['Réalisé par']}</p>
            <p>Nature de l'intervention: {details['Nature de l\'intervention']}</p>
            <p>Désignation de l'appareil/Type: {details['Désignation de l\'appareil/Type']}</p>
            <p>Désignation de l'appareil/Fabricant: {details['Désignation de l\'appareil/Fabricant']}</p>
            <p>Désignation de l'appareil/Modèle: {details['Désignation de l\'appareil/Modèle']}</p>
            <p>Désignation de l'appareil/Calibre: {details['Désignation de l\'appareil/Calibre']}</p>
            <p>Désignation de l'appareil/DN: {details['Désignation de l\'appareil/DN']}</p>
            <p>Désignation de l'appareil/PN: {details['Désignation de l\'appareil/PN']}</p>
            <p>Désignation de l'appareil/N° Série: {details['Désignation de l\'appareil/N° Série']}</p>
            <p>Etat: {details['Etat']}</p>
          </div>
        </div>
      ) : (
        <p>Loading...</p>
      )}
      <button className="btn btn-primary mt-4" onClick={handlePrint}>Imprimer</button>
      <button className="btn btn-danger mt-4" onClick={handleDelete}>Supprimer</button>
    </div>
  );
}

export default Details_Compteur_Turbine_STEG;
