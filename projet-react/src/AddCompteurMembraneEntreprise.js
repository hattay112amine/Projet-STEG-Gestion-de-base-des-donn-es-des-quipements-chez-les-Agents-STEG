import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index3.css';

function AddCompteurMembraneEntreprise() {
  const [formData, setFormData] = useState({
    certificateNumber: '',
    district: '',
    bpiNumber: '',
    bpiEntryDate: '',
    bpiExitDate: '',
    performedBy: '',
    interventionNature: '',
    deviceType: '',
    deviceManufacturer: '',
    deviceModel: '',
    deviceCaliber: '',
    deviceDN: '',
    devicePN: '',
    deviceSerialNumber: '',
    state: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/components/Compteur_Membrane_Entreprise', formData)
      .then(response => {
        alert('Compteur_Membrane_Entreprise ajouté avec succès');
        navigate('/components/Compteur_Membrane_Entreprise');
      })
      .catch(error => {
        console.error('Erreur lors de l\'ajout:', error);
        alert('Erreur lors de l\'ajout');
      });
  };

  return (
    <div className="container3">
      <h2>Ajouter un nouveau Compteur_Membrane_Entreprise</h2>
      <form onSubmit={handleSubmit}>
        {/* Add form fields for each data point */}
        <div className="form-group">
          <label>N° de Certificat</label>
          <input
            type="text"
            className="form-control"
            name="certificateNumber"
            value={formData.certificateNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>District</label>
          <input
            type="text"
            className="form-control"
            name="district"
            value={formData.district}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Numéro BPI</label>
          <input
            type="text"
            className="form-control"
            name="bpiNumber"
            value={formData.bpiNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date d'entrée BPI</label>
          <input
            type="date"
            className="form-control"
            name="bpiEntryDate"
            value={formData.bpiEntryDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Date de sortie BPI</label>
          <input
            type="date"
            className="form-control"
            name="bpiExitDate"
            value={formData.bpiExitDate}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Réalisé par</label>
          <input
            type="text"
            className="form-control"
            name="performedBy"
            value={formData.performedBy}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nature de l'intervention</label>
          <input
            type="text"
            className="form-control"
            name="interventionNature"
            value={formData.interventionNature}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Type d'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceType"
            value={formData.deviceType}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Fabricant de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceManufacturer"
            value={formData.deviceManufacturer}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Modèle de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceModel"
            value={formData.deviceModel}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Calibre de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceCaliber"
            value={formData.deviceCaliber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>DN de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceDN"
            value={formData.deviceDN}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>PN de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="devicePN"
            value={formData.devicePN}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>N° de Série de l'appareil</label>
          <input
            type="text"
            className="form-control"
            name="deviceSerialNumber"
            value={formData.deviceSerialNumber}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Etat</label>
          <input
            type="text"
            className="form-control"
            name="state"
            value={formData.state}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Ajouter</button>
      </form>
    </div>
  );
}

export default AddCompteurMembraneEntreprise;