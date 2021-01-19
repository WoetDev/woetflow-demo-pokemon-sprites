import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://pokeapi.co/api/v2/",
  timeout: 5000
});

export default {
  getPokemons() {
    return axiosInstance.get("/pokemon", { params: { limit: 151 } });
  },
  getPokemon(name) {
    return axiosInstance.get(`/pokemon/${name}`);
  }
};
