<script setup>
import { useAstrosStore } from '@/stores/astros.js';
import {computed} from "vue";

const props = defineProps({
  astro: {
    type: Object,
    required: true,
  },
});

const store = useAstrosStore();
const imageUrl = computed(() => store.images[props.astro.englishName] || '/img/celestial-bodies/default.png');
</script>

<template>
  <div class="border shadow-lg">
    <div>
      <img
          :src="imageUrl"
          alt="Imagen de astro"
      >
    </div>

    <div class="p-5">
      <h2 class="text-2xl truncate font-extrabold">{{ astro.englishName }}</h2> <!-- Muestra el nombre del astro -->
      <!-- Agrega más detalles aquí según sea necesario -->
    </div>
  </div>
</template>