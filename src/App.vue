<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
<template>
  <router-link to="/" class="fixed bg-warm-gray-200 w-full">
    <img src="../Logo.svg" alt="Logo"
  /></router-link>
  <router-view class="mx-[150px] <sm:m-0"/>
</template>
