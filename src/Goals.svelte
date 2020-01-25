<script>
  import { goals } from "./store";

  let goal = {
    name: null,
    value: null,
    data: null
  };

  const clearForm = () => {
    goal = { name: null, value: null, data: null };
  };

  const handleOnSubmit = () => {
    goals.add(goal);
    clearForm();
  };
</script>

<form on:submit|preventDefault={handleOnSubmit}>
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
    <li>
      <div>
        <span>Name: {goal.name}</span>
        <a href="?deleted" on:click={() => goals.delete(goal.name)}>Delete</a>
      </div>
    </li>
  {/each}
</ul>
