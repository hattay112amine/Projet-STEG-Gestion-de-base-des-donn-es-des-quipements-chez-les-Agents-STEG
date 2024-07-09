import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index2.css';

function Mano_STEG() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/components/Mano_STEG')
      .then(response => {
        setData(response.data);
        setFilteredData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('Erreur lors de la récupération des données:', error);
        setLoading(false);
      });
  }, []);

  const handleSearch = (event) => {
    event.preventDefault();
    const filtered = data.filter(item =>
      Object.values(item).some(val =>
        String(val).toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
    setFilteredData(filtered);
  };

  return (
    <div className="container">
      <div className="mb-4">
        <Link to="/AddManometreSTEG" className="btn btn-success">Ajouter un nouveau Manometre_STEG</Link>
      </div>
      <form onSubmit={handleSearch} className="mb-4">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Rechercher..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" type="submit">Rechercher</button>
          </div>
        </div>
      </form>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="table-container">
          <table className="custom-table">
            <thead>
              <tr>
                <th>N° de Certificat</th>
                <th>STEG</th>
                <th>Numéro de Facture</th>
                <th>Date d'entrée de Facture</th>
                <th>Date de sortie de Facture</th>
                <th>Réalisé par</th>
                <th>Nature de l'intervention</th>
                <th>Désignation de l'appareil/Type</th>
                <th>Désignation de l'appareil/Modèle</th>
                <th>Désignation de l'appareil/N° Série</th>
                <th>Etat</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredData.map(item => (
                <tr key={item['Désignation de l\'appareil/N° Série']}>
                  <td>{item['N° de Certificat']}</td>
                  <td>{item['Entreprise']}</td>
                  <td>{item['Numéro de Facture']}</td>
                  <td>{item['Date d\'entrée de Facture']}</td>
                  <td>{item['Date de sortie de Facture']}</td>
                  <td>{item['Réalisé par']}</td>
                  <td>{item['Nature de l\'intervention']}</td>
                  <td>{item['Désignation de l\'appareil/Type']}</td>
                  <td>{item['Désignation de l\'appareil/Modèle']}</td>
                  <td>{item['Désignation de l\'appareil/N° Série']}</td>
                  <td>{item['Etat']}</td>
                  <td>
                    <Link to={`/details_Mano_STEG/${item['Désignation de l\'appareil/N° Série']}`} className="btn btn-primary">Voir détails</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}

export default Mano_STEG;