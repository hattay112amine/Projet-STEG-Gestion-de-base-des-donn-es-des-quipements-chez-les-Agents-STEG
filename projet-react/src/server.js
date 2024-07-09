const express = require('express');
const mysql = require('mysql');
const cors = require('cors');
const bodyParser = require('body-parser');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'amine',
  password: 'test1234',
  database: 'amine'
});

db.connect(err => {
  if (err) {
    console.error('Erreur de connexion à la base de données:', err);
    return;
  }
  console.log('Connecté à la base de données MySQL');
});

// Route to get all resources from Mano_STEG
app.get('/api/components/Mano_STEG', (req, res) => {
  const sql = 'SELECT * FROM `mano_steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number Mano_STEG
app.get('/api/components/Mano_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `mano_steg` WHERE `DÉSIGNATION DE L\'APPAREIL/N° SÉRIE` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Mano_entreprise
app.get('/api/components/Mano_entreprise', (req, res) => {
  const sql = 'SELECT * FROM `mano_entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number Mano_entreprise
app.get('/api/components/Mano_entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `mano_entreprise` WHERE `DÉSIGNATION DE L\'APPAREIL/N° SÉRIE` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});
// Route to get all resources from Compteur_Turbine_STEG
app.get('/api/components/Compteur_Turbine_STEG', (req, res) => {
  const sql = 'SELECT * FROM `compteurs____turbine___steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Turbine_STEG
app.get('/api/components/Compteur_Turbine_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs____turbine___steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Compteur_Piston_STEG
app.get('/api/components/Compteur_Piston_STEG', (req, res) => {
  const sql = 'SELECT * FROM `compteurs_pistons rotatifs _steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Piston_STEG
app.get('/api/components/Compteur_Piston_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs_pistons rotatifs _steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Compteur_Piston_Entreprise
app.get('/api/components/Compteur_Piston_Entreprise', (req, res) => {
  const sql = 'SELECT * FROM `compteurs_pistons rotatifs _entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Piston_Entreprise
app.get('/api/components/Compteur_Piston_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs_pistons rotatifs _entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Compteur_Turbine_Entreprise
app.get('/api/components/Compteur_Turbine_Entreprise', (req, res) => {
  const sql = 'SELECT * FROM `compteurs____turbine___entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Turbine_Entreprise
app.get('/api/components/Compteur_Turbine_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs____turbine___entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Compteur_Membrane_STEG
app.get('/api/components/Compteur_Membrane_STEG', (req, res) => {
  const sql = 'SELECT * FROM `compteurs_membrane_steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Membrane_STEG
app.get('/api/components/Compteur_Membrane_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs_membrane_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Compteur_Membrane_Entreprise
app.get('/api/components/Compteur_Membrane_Entreprise', (req, res) => {
  const sql = 'SELECT * FROM `compteurs_membrane_entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Compteur_Membrane_Entreprise
app.get('/api/components/Compteur_Membrane_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `compteurs_membrane_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Correcteurs_STEG
app.get('/api/components/Correcteurs_STEG', (req, res) => {
  const sql = 'SELECT * FROM `correcteurs_steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Correcteurs_STEG
app.get('/api/components/Correcteurs_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `correcteurs_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Correcteurs_Entreprise
app.get('/api/components/Correcteurs_Entreprise', (req, res) => {
  const sql = 'SELECT * FROM `correcteurs_entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Correcteurs_Entreprise
app.get('/api/components/Correcteurs_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `correcteurs_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Calculateurs_STEG
app.get('/api/components/Calculateurs_STEG', (req, res) => {
  const sql = 'SELECT * FROM `calculateur_steg`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Calculateurs_STEG
app.get('/api/components/Calculateurs_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `calculateur_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to get all resources from Calculateurs_Entreprise
app.get('/api/components/Calculateurs_Entreprise', (req, res) => {
  const sql = 'SELECT * FROM `calculateur_entreprise`';
  db.query(sql, (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(result);
  });
});

// Route to get details of a specific resource by its serial number from Calculateurs_Entreprise
app.get('/api/components/Calculateurs_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'SELECT * FROM `calculateur_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.length === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json(result[0]);
  });
});

// Route to add a new Compteur_Turbine_STEG entry
app.post('/api/components/Compteur_Turbine_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs____turbine___steg` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Turbine_STEG ajouté avec succès');
  });
});

// Route to add a new Compteur_Turbine_Entreprise entry
app.post('/api/components/Compteur_Turbine_Entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs____turbine___entreprise` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Turbine_Entreprise ajouté avec succès');
  });
});

// Route to add a new Compteur_Membrane_STEG entry
app.post('/api/components/Compteur_Membrane_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs_membrane_steg` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Membrane_STEG ajouté avec succès');
  });
});

// Route to add a new Compteur_Membrane_Entreprise entry
app.post('/api/components/Compteur_Membrane_Entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs_membrane_entreprise` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Membrane_Entreprise ajouté avec succès');
  });
});

// Route to add a new Compteur_Piston_STEG entry
app.post('/api/components/Compteur_Piston_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs_pistons rotatifs _steg` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Piston_STEG ajouté avec succès');
  });
});

// Route to add a new Compteur_Piston_Entreprise entry
app.post('/api/components/Compteur_Piston_Entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `compteurs_pistons rotatifs _entreprise` (`N° de Certificat`, `Entreprise/District`, `BPI/FACTURE/Numéro`, `BPI/FACTURE/Date d\'entrée`, `BPI/FACTURE/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`, `Désignation de l\'appareil/Calibre`, `Désignation de l\'appareil/DN`, `Désignation de l\'appareil/PN`, `Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceManufacturer,
    deviceModel,
    deviceCaliber,
    deviceDN,
    devicePN,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Compteur_Piston rotatifs_Entreprise ajouté avec succès');
  });
});

// Route to add a new Calculateurs_STEG entry
app.post('/api/components/Calculateurs_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `calculateur_steg` (`N° de Certificat`, `District`, `BPI/Numéro`, `BPI/Date d\'entrée`, `BPI/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Calculateur_STEG ajouté avec succès');
  });
});

// Route to add a new Calculateurs_Entreprise entry
app.post('/api/components/Calculateurs_Entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `calculateur_entreprise` (`N° de Certificat`, `District`, `BPI/Numéro`, `BPI/Date d\'entrée`, `BPI/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Calculateurs_Entreprise ajouté avec succès');
  });
});

// Route to add a new Correcteurs_STEG entry
app.post('/api/components/Correcteurs_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    TorO,
    deviceManufacturer,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `correcteurs_steg` (`N° de Certificat`, `District`, `BPI/Numéro`, `BPI/Date d\'entrée`, `BPI/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`,`Désignation de l\'appareil :T / O`,`Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    TorO,
    deviceManufacturer,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Correcteur_STEG ajouté avec succès');
  });
});

// Route to add a new Correcteur_Entreprise entry
app.post('/api/components/Correcteurs_Entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    TorO,
    deviceManufacturer,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `correcteurs_entreprise` (`N° de Certificat`, `District`, `BPI/Numéro`, `BPI/Date d\'entrée`, `BPI/Date de sortie`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`,`Désignation de l\'appareil :T / O`,`Désignation de l\'appareil/Fabricant`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    TorO,
    deviceManufacturer,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Correcteur_Entreprise ajouté avec succès');
  });
});


// Route to add a new Manometre_STEG entry
app.post('/api/components/Mano_STEG', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `mano_steg` (`N° de Certificat`, `Entreprise`, `Numéro de Facture`, `Date d\'entrée de Facture`, `Date de sortie de Facture`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Manometre_STEG ajouté avec succès');
  });
});

// Route to add a new Manometre_Entreprise entry
app.post('/api/components/Mano_entreprise', (req, res) => {
  const {
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  } = req.body;

  const sql = 'INSERT INTO `mano_entreprise` (`N° de Certificat`, `Entreprise`, `Numéro de Facture`, `Date d\'entrée de Facture`, `Date de sortie de Facture`, `Réalisé par`, `Nature de l\'intervention`, `Désignation de l\'appareil/Type`, `Désignation de l\'appareil/Modèle`,`Désignation de l\'appareil/N° Série`, `Etat`) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)';

  const values = [
    certificateNumber,
    district,
    bpiNumber,
    bpiEntryDate,
    bpiExitDate,
    performedBy,
    interventionNature,
    deviceType,
    deviceModel,
    deviceSerialNumber,
    state
  ];

  db.query(sql, values, (err, result) => {
    if (err) {
      console.error('Erreur lors de l\'insertion:', err);
      res.status(500).send('Erreur lors de l\'insertion');
      return;
    }
    res.send('Manometre_Entreprise ajouté avec succès');
  });
});

// Route to delete a specific resource by its serial number from Compteur_Turbine_STEG
app.delete('/api/components/Compteur_Turbine_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs____turbine___steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Compteur_Turbine_Entreprise
app.delete('/api/components/Compteur_Turbine_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs____turbine___entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Compteur_Membrane_STEG
app.delete('/api/components/Compteur_Membrane_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs_membrane_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Compteur_Membrane_Entreprise
app.delete('/api/components/Compteur_Membrane_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs_membrane_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Compteur_Piston_STEG
app.delete('/api/components/Compteur_Piston_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs_pistons rotatifs _steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Compteur_Piston_Entreprise
app.delete('/api/components/Compteur_Piston_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `compteurs_pistons rotatifs _entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Calculateurs_STEG
app.delete('/api/components/Calculateurs_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `calculateur_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Calculateurs_Entreprise
app.delete('/api/components/Calculateurs_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `calculateur_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Correcteurs_STEG
app.delete('/api/components/Correcteurs_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `correcteurs_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Correcteurs_Entreprise
app.delete('/api/components/Correcteurs_Entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `correcteurs_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});


// Route to delete a specific resource by its serial number from Mano_STEG
app.delete('/api/components/Mano_STEG/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `mano_steg` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

// Route to delete a specific resource by its serial number from Mano_entreprise
app.delete('/api/components/Mano_entreprise/:serialNumber', (req, res) => {
  const serialNumber = req.params.serialNumber;
  const sql = 'DELETE FROM `mano_entreprise` WHERE `Désignation de l\'appareil/N° Série` = ?';
  db.query(sql, [serialNumber], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    if (result.affectedRows === 0) {
      return res.status(404).json({ message: 'Ressource non trouvée' });
    }
    res.json({ message: 'Ressource supprimée avec succès' });
  });
});

app.listen(PORT, () => {
  console.log(`Serveur backend exécuté sur http://localhost:${PORT}`);
});