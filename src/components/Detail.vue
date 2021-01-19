<template>
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
</template>
<meta property="og:title" content="The Rock" />
<meta property="og:description" content="The Rock" />
<meta property="og:type" content="video.movie" />
<meta property="og:url" content="https://www.imdb.com/title/tt0117500/" />
<meta property="og:image" content="https://ia.media-imdb.com/images/rock.jpg" />
<meta
  property="og:image:alt"
  content="A shiny red apple with a bite taken out"
/>
<script>
import api from "@/api";

export default {
  name: "Detail",
  data: () => ({
    pokemon: "",
    description: ""
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
    return api.getPokemon(this.$route.params.name).then(response => {
      this.pokemon = response.data;
      const types = response.data.types.map(pokemon => {
        return pokemon.type.name;
      });
      this.description =
        this.pokemon.name + ": " + types.join(" / ") + " type pokémon";
    });
  }
};
</script>
