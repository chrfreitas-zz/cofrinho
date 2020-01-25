import { writable } from "svelte/store";

const init = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: goal => update(goals => goals.concat(goal)),
    delete: name => update(goals => goals.filter(goal => goal.name !== name)),
    addInvestment: investment =>
      update(goals =>
        goals.map(goal => {
          if (goal.name == investment.goal) {
            return {
              ...goal,
              investments: [...goal.investments, investment]
            };
          }

          return goal;
        })
      )
  };
};

export const goals = init();
