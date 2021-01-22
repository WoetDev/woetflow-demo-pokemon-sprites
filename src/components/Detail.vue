<template>
  <div>
    <div v-if="error" class="text-white">
      {{ error }}
    </div>
    <div v-if="pokemon">
      <div class="text-white text-center">
        <div>
          <img
            class="m-auto"
            :src="
              pokemon['sprites']['other']['official-artwork']['front_default']
            "
          />
        </div>
        <div class="text-3xl">
          <img
            class="inline"
            :src="
              pokemon['sprites']['versions']['generation-vii']['icons'][
                'front_default'
              ]
            "
          />
          {{ pokemon.name }}
        </div>
        <div class="mt-5">
          <img class="inline-block" :src="pokemon.sprites.front_default" />
          <img class="inline-block" :src="pokemon.sprites.back_default" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from "@/api";

export default {
  name: "Detail",
  data: () => ({
    pokemon: "",
    description: "",
    error: ""
  }),
  metaInfo() {
    const pokemon = this.pokemon;
    return {
      title:
        pokemon &&
        pokemon.name.charAt(0).toUpperCase() +
          pokemon.name.slice(1).toLowerCase(),
      meta: [
        { vmid: "description", name: "description", content: this.description },
        {
          vmid: "og:title",
          property: "og:title",
          content:
            pokemon &&
            pokemon.name.charAt(0).toUpperCase() +
              pokemon.name.slice(1).toLowerCase(),
          template: chunk => `${chunk} | Pokémon Sprites`
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
          content: `${window.location.origin}/pokemon/${pokemon.name}`
        },
        {
          vmid: "og:image",
          property: "og:image",
          content: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`
        }
      ]
    };
  },
  created() {
    return api
      .getPokemon(this.$route.params.name)
      .then(response => {
        this.pokemon = response.data;
        const types = response.data.types.map(pokemon => {
          return pokemon.type.name;
        });
        this.description =
          this.pokemon.name + ": " + types.join(" / ") + " type pokémon";
      })
      .catch(err => {
        this.error = `Woops! ${err.response.config.url} returned status ${err.response.status} ${err.response.data}`;
      });
  }
};
</script>
