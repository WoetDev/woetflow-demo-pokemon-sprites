<template>
  <div id="app" class="bg-gray-700 min-h-screen">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from "@/components/Header";

export default {
  name: "App",
  metaInfo: {
    titleTemplate: "%s | Pokémon Sprites"
  },
  jsonld() {
    return {
      "@context": "https://schema.org",
      "@type": "Organization",
      url: window.location.origin,
      logo: "https://i.imgur.com/bhxp07I.png"
    };
  },
  components: {
    Header
  }
};
</script>

<style lang="scss">
#app {
  font-family: "Yusei Magic", Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
