import { useName } from '~/composables/useName';

export const Hello = () => {
  const [name, setName] = useName();
  const onInput = (e: Event) => {
    if (!(e.target instanceof HTMLInputElement)) {
      return;
    }
    setName(e.target.value);
  };
  return (
    <div>
      <input type="text" value={name.value} onInput={onInput} />
      <p>Hello {name.value}</p>
    </div>
  );
};
