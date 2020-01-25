<script>
  import { goals } from "./store";
</script>

<ul>
  {#each $goals as goal}
    <li>
      <div>
        <span>{goal.name}</span>
        <a href="?deleted" on:click={() => goals.delete(goal.name)}>Delete</a>
      </div>
    </li>
  {/each}
</ul>
