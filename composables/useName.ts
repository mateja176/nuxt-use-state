import { useState } from 'nuxt/app';
import { computed } from 'vue';

export const useName = (initialName = '') => {
  const nameState = useState<{ name: string }>('name', () => {
    return { name: initialName };
  });
  const name = computed(() => {
    return nameState.value.name;
  });
  const setName = (newName: string) => {
    nameState.value.name = newName;
  };
  return [name, setName] as const;
};
