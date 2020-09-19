import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:9010/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getEtudiantBoard = () => {
  return axios.get(API_URL + "etudiant", { headers: authHeader() });
};

const getEnseignantBoard = () => {
  return axios.get(API_URL + "enseignant", { headers: authHeader() });
};


export default {
  getPublicContent,
  getEtudiantBoard,
  getEnseignantBoard,
};
