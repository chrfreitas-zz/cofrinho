<script>
  import { Router, Link, Route } from "svelte-routing";
  import { goals } from "./store";
  import Goal from "./Goal.svelte";
  import Progress from "./Progress.svelte";
  import Transaction from "./Transaction.svelte";
</script>

<Router>
  <nav>
    <Link to="/goal">Add goal</Link>
    <Link to="/transaction">Add transaction</Link>
  </nav>
  <div>
    <Route path="/" component={Progress} />
    <Route path="/goal" component={Goal} />
    <Route path="/transaction" component={Transaction} />
  </div>
</Router>
