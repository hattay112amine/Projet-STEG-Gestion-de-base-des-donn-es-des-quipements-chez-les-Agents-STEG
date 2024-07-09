import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoSTEG from './Logo_STEG.jpg'; 
import './index2.css';

function Details() {
  const { id } = useParams(); // Ensure `id` is passed as part of the route parameter
  const [details, setDetails] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/components/Mano_entreprise/${id}`);
        setDetails(response.data); // Assuming response.data contains the details of the resource
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
    await axios.delete(`http://localhost:5000/api/components/Mano_entreprise/${id}`);
    alert('Ressource supprimée avec succès');
    navigate('/components/Mano_entreprise'); // Utilisation de navigate pour rediriger après la suppression
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
            <p>Entreprise: {details['Entreprise']}</p>
            <p>Numéro de Facture: {details['Numéro de Facture']}</p>
            <p>Date d'entrée de Facture: {details['Date d\'entrée de Facture']}</p>
            <p>Date de sortie de Facture: {details['Date de sortie de Facture']}</p>
            <p>Réalisé par: {details['Réalisé par']}</p>
            <p>Nature de l'intervention: {details['Nature de l\'intervention']}</p>
            <p>Désignation de l'appareil/Type: {details['Désignation de l\'appareil/Type']}</p>
            <p>Désignation de l'appareil/Modèle: {details['Désignation de l\'appareil/Modèle']}</p>
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
export default Details;