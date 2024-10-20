import { useState } from 'nuxt/app';
import { toRefs } from 'vue';

export const useName = (initialName = '') => {
  const nameState = useState<{ name: string }>('name', () => {
    return { name: initialName };
  });
  const { name } = toRefs(nameState.value);
  const setName = (newName: string) => {
    name.value = newName;
  };
  return [name, setName] as const;
};
