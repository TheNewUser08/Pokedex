<template>
  <h1 class="font-bold text-center text-[100px]">Pokédex</h1>
  <form @submit.prevent="" class="bg-red-600 flex h-[97px] items-center mt-20">
    <input
      type="search"
      class="h-[50px] rounded-xl ml-6 p-2 w-[535px]"
      placeholder="Pikachu"
    />
  </form>
  <NavArrow :key="$route.fullPath" />
  <PokemonGrid ref="PokemonGrid" :key="$route.fullPath" class="mt-6" />
  <NavArrow :key="$route.fullPath" />
</template>

<script setup lang="ts">
</script>

<style scoped></style>
