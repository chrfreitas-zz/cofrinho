<script>
  import { goals } from "./store";

  goals.subscribe(console.log);
</script>

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
