import { writable } from "svelte/store";

const init = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: goal => update(goals => goals.concat(goal)),
    delete: name => update(goals => goals.filter(goal => goal.name !== name))
  };
};

export const goals = init();
