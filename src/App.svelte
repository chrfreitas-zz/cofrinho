<script>
  import { goals } from "./App.store.js";

  let goal = {
    name: null,
    value: null,
    data: null
  };
</script>

<form on:submit|preventDefault={() => goals.add(goal)}>
  <label for="">Name</label>
  <input type="text" bind:value={goal.name} />

  <label for="">Valor</label>
  <input type="text" bind:value={goal.value} />

  <label for="">Data</label>
  <input type="text" bind:value={goal.data} />

  <button>Save</button>
</form>

<ul>
  {#each $goals as goal}
    <li>{goal.name} {goal.value}</li>
  {/each}
</ul>
