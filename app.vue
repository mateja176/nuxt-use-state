<script lang="tsx" setup>
import { Hello } from '~/components/Hello';
import { useName } from '~/composables/useName';

const [name, setName] = useName('Nuxt');
</script>

<template>
  <div>
    <Hello />
    <button @click="setName('')">Reset</button>
  </div>
</template>
