<script>
  import { navigate } from "svelte-routing";
  import { goals } from "../store";

  let transaction = {
    goal: null,
    date: null,
    value: null
  };

  const handleOnSubmit = () => {
    goals.addTransaction({
      ...transaction,
      date: new Date(Date.now())
    });

    navigate("/");
  };
</script>

<form on:submit|preventDefault={handleOnSubmit}>
  <label for="">Value</label>
  <input type="text" bind:value={transaction.value} />

  <label for="">Goal</label>
  <select name="" id="" bind:value={transaction.goal}>
    <option value={0}>Select a goal</option>
    {#each $goals as goal}
      <option value={goal.name}>{goal.name}</option>
    {/each}
  </select>

  <button>Save</button>
</form>
