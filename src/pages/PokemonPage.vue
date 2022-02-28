<template>
  <div v-if="show" class="grid grid-cols-3 bg-white">
    <div>
      <img
        :src="pokemon.sprites.front_default"
        :alt="pokemon.name"
        class="w-52"
      />
    </div>
    <div
      class="text-center border-red-500 rounded-xl border-4 grid grid-cols-2"
    >
      <h2 class="font-bold text-xl col-span-2">Stats</h2>
      <div>Weight: {{ pokemon.weight }}</div>
      <div>Height: {{ pokemon.height }}</div>
      <div
        v-for="type in pokemon.types"
        :key="type.type.name"
        :class="type.type.name"
      >
        {{ type.type.name }}
      </div>
    </div>
  </div>
  <div v-else>Loading</div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import { useRoute } from 'vue-router';
import axios from 'axios';
import { PokemonInterface } from '../composables/pokemonInterface';

const route = useRoute();
const id: string = route.params.id as string;

let pokemon: Ref<PokemonInterface> = ref({} as PokemonInterface);
let show: Ref<boolean> = ref(false);

onBeforeMount(async (): Promise<void> => {
  await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => {
    pokemon.value = res.data;
    console.log(pokemon.value);
  });
  show.value = true;
});
</script>

<style scoped></style>
