<script>
  import { goals } from "../store";
  import ProgressCircle from "../components/ProgressCircle.svelte";

  const calculateTotalGoals = goals =>
    goals.reduce((total, current) => parseInt(current.value) + total, 0);

  const getAllTransactions = goals => goals.flatMap(goal => goal.transactions);

  const calculateTotalTransactions = goals => {
    const transactions = getAllTransactions(goals);
    return transactions.reduce(
      (total, transaction) => parseInt(transaction.value) + total,
      0
    );
  };
</script>

<style>
  .home {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
  }
</style>

<div class="home">
  <div>
    <ProgressCircle
      max={calculateTotalGoals($goals)}
      current={calculateTotalTransactions($goals)} />
  </div>
</div>
