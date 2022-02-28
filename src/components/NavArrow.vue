<template>
  <div class="flex items-center justify-center">
    <img
      src="/arrow-sm-left.svg"
      alt="Arrow left"
      class="w-10 cursor-pointer m-3"
      @click="goBackward"
    />

    <img
      src="/arrow-sm-right.svg"
      alt="Arrow right"
      class="w-10 cursor-pointer m-3"
      @click="goForward"
    />
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router';
import { ref, Ref } from 'vue';

const route = useRoute();
const router = useRouter();


const id:Ref<number> = ref(Number(route.query.pages))

const goForward = (): void => {
  if (id.value) {
    router.push(`/?pages=${id.value + 1}`);
  } else {
    router.push(`/?pages=2`);
  }
};
const goBackward = (): void => {
  if (id.value <= 2) {
    router.push(`/`);
  } else {
    router.push(`/?pages=${id.value - 1}`);
  }
};
</script>
