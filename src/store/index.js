import { writable } from "svelte/store";

const init = () => {
  const { subscribe, set, update } = writable([]);

  return {
    subscribe,
    add: goal => update(goals => goals.concat(goal)),
    delete: name => update(goals => goals.filter(goal => goal.name !== name)),
    addTransaction: transaction =>
      update(goals =>
        goals.map(goal =>
          goal.name == transaction.goal
            ? {
                ...goal,
                transactions: [...goal.transactions, transaction]
              }
            : goal
        )
      )
  };
};

export const goals = init();
