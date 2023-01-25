<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string }>()

const count = ref(4)
</script>

<template>
  <h1>{{ msg }}</h1>

  <div @click="count++">{{ count }}</div>
  <div class="swatches">
    <div class="yellow"></div>
    <div class="purple"></div>
    <div class="red"></div>
    <div class="blue"></div>
    <div class="cyan"></div>
    <div class="pink"></div>
    <div class="black"></div>
  </div>
</template>

<style scoped lang="scss">
.swatches {
  display: flex;

  >* {
    height: 200px;
    width: 200px;
  }

  .yellow {
    background: #eab723;
  }

  .purple {
    background: #7f4d70;
  }

  .red {
    background: #f12a04;
  }

  .blue {
    background: #20467e;
  }

  .cyan {
    background: #36d9f2;
  }

  .pink {
    background: #f4b39d;
  }

  .black {
    background: #140d0c;
  }
}
</style>
