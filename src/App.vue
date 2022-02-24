<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
});
</script>
<template>
  <router-link to="/" class="absolute"
    ><img src="../../public/Logo.svg" alt="Logo"
  /></router-link>
  <router-view />
</template>
