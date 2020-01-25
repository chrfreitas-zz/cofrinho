<script>
  import { goals } from "./store";

  let investment = {
    goal: null,
    date: null,
    value: null
  };

  const clearForm = () => {
    investment = {
      goal: null,
      date: null,
      value: null
    };
  };

  const handleOnSubmit = () => {
    const now = new Date(Date.now());

    goals.addInvestment({
      ...investment,
      date: now
    });
  };
</script>

<form on:submit|preventDefault={handleOnSubmit}>
  <label for="">Value</label>
  <input type="text" bind:value={investment.value} />

  <label for="">Goal</label>
  <select name="" id="" bind:value={investment.goal}>
    <option value={0}>Select a goal</option>
    {#each $goals as goal}
      <option value={goal.name}>{goal.name}</option>
    {/each}
  </select>

  <button>Save</button>
</form>
