<script>
  import { goals } from "./store";
</script>

<form>
  <input type="text" />

  <select name="" id="">
    {#each $goals as goal}
      <option value="">{goal.name}</option>
    {/each}
  </select>
</form>
