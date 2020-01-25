<script>
  import { goals } from "./store";

  const calculateTotalTransactions = goal =>
    goal.transactions.reduce(
      (total, current) => total + parseInt(current.value),
      0
    );

  const calculatePercentTransactions = goal => {
    const total = calculateTotalTransactions(goal);
    return Math.round((total / goal.value) * 100);
  };
</script>

<ul>
  {#each $goals as goal}
    <li>
      <div>
        <div>{goal.name}</div>
        <progress max={goal.value} value={calculateTotalTransactions(goal)} />
        <span>{calculatePercentTransactions(goal)}%</span>
        <div>
          <a href="?deleted" on:click={() => goals.delete(goal.name)}>Delete</a>
        </div>
      </div>
    </li>
  {/each}
</ul>
