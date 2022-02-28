<template>
  <div>
    <div
      class="grid <sm:grid-cols-1 gap-5 gap-y-10 grid-cols-4"
      v-if="pokemons"
    >
      <div
        v-for="pokemon in pokemons"
        :key="pokemon.name"
        class="flex flex-col shadow-lg p-2 bg-white rounded-2xl hover:cursor-pointer hover:shadow-xl transition ease-out duration-150"
      >
        <router-link :to="`/${pokemon.id}`">
          <div class="flex justify-center flex-col items-center">
            <div class="text-center font-bold">{{ pokemon.name }}</div>
            <div class="text-gray-600">#{{ pokemon.id }}</div>
          </div>

          <img
            :src="pokemon.img"
            :alt="`${pokemon.name} image`"
            class="w-[131px] h-[121px] rounded-2xl m-auto"
          />
          <div class="grid grid-cols-3 gap-2">
            <div v-for="type in pokemon.types" :key="type.type.name">
              <div
                :class="type.type.name"
                class="text-white text-center font-medium"
              >
                {{ type.type.name }}
              </div>
            </div>
          </div>
        </router-link>
      </div>
    </div>

    <div v-else>Loading...</div>
  </div>
</template>

<script setup lang="ts">
import { ref, Ref, onBeforeMount } from 'vue';
import axios from 'axios';
import { useRoute } from 'vue-router';

import pokemonBaseInterface from '../composables/pokemonBaseInterface';

const pokemons: Ref<pokemonBaseInterface[]> = ref([]);

const route = useRoute();

const show: Ref<boolean> = ref(false);
const id: Ref<number> = ref(Number(route.query.pages));

const fetchData = async (): Promise<void> => {
  const limit: Ref<number> = ref(20);
  const offset: Ref<number> = ref(0);

  offset.value = 20 * (id.value - 1);
  limit.value = 20;

  if (id.value) {
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=${offset.value}&limit=${limit.value}`,
      )
      .then(res => {
        pokemons.value = res.data.results;
      });
  } else {
    await axios
      .get(
        `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${limit.value}`,
      )
      .then(res => {
        pokemons.value = res.data.results;
      });
  }

  pokemons.value.forEach(async (pokemon): Promise<void> => {
    await axios.get(pokemon.url).then(res => {
      pokemon.img = res.data.sprites.front_default;
      pokemon.id = res.data.id;
      pokemon.types = res.data.types;
    });
  });
};

onBeforeMount(async () => {
  await fetchData();
  show.value = true;
});
</script>
