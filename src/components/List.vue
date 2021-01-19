<template>
  <div class="text-left">
    <div v-if="isLoading">
      Catching pokémon...
    </div>
    <div v-else v-for="pokemon in list" :key="pokemon.id">
      <router-link target="_blank" :to="'/pokemon/' + pokemon.name">
        <div
          class="border-b-2 border-gray-700 p-4 rounded cursor-pointer hover:bg-gray-500"
        >
          <span>{{ pokemon.id }}</span>
          <img :src="pokemon.sprite" class="inline-block mx-4" />
          <span>{{
            pokemon.name.charAt(0).toUpperCase() +
              pokemon.name.slice(1).toLowerCase()
          }}</span
          >: {{ pokemon.types }} type pokemon
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import api from "@/api";
import axios from "axios";

export default {
  name: "List",
  data: () => ({
    list: [],
    isLoading: true,
    description: "All pokémon from first generation in the Kanto region"
  }),
  metaInfo() {
    return {
      title: "Kanto",
      meta: [
        { vmid: "description", name: "description", content: this.description },
        {
          vmid: "og:title",
          property: "og:title",
          content: "Kanto | Pokémon Sprites"
        },
        {
          vmid: "og:description",
          property: "og:description",
          content: this.description
        },
        {
          vmid: "og:image:alt",
          property: "og:image:alt",
          content: this.description
        },
        {
          vmid: "og:url",
          property: "og:url",
          content: `${window.location.origin}`
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png`
        }
      ]
    };
  },
  created() {
    api
      .getPokemons()
      .then(response => {
        const requests = response.data.results.map(pokemon => {
          return axios.get(pokemon.url);
        });
        axios
          .all(requests)
          .then(
            axios.spread((...responses) => {
              this.list = responses.map(response => {
                let types = response.data.types.map(pokemon => {
                  return pokemon.type.name;
                });
                types = types.join(" / ");

                return {
                  id: response.data.id,
                  name: response.data.name,
                  types: types,
                  sprite: response.data.sprites.front_default
                };
              });
              this.isLoading = false;
            })
          )
          .catch(err => console.log(err));
      })
      .catch(err => console.log(err));
  }
};
</script>
