import { useState } from 'nuxt/app';

export const useName = (initialName = '') => {
  const name = useState<string>('name', () => initialName);
  const setName = (newName: string) => {
    name.value = newName;
  };
  return [name, setName] as const;
};
