import { writable } from "svelte/store";

const init = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: goal => update(goals => [...goals, goal]),
    delete: () => {}
  };
};

export const goals = init();
