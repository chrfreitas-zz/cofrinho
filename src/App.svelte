<script>
  import { Router, Link, Route } from "svelte-routing";

  import { goals } from "./store";
  import Goals from "./Goals.svelte";
  import ListGoals from "./ListGoals.svelte";
  import Investments from "./Investments.svelte";
</script>

<Router>
  <nav>
    <Link to="/goals">Add goal</Link>
    <Link to="/investiments">Add investment</Link>
  </nav>
  <div>
    <Route path="/" component={ListGoals} />
    <Route path="/goals" component={Goals} />
    <Route path="/investiments" component={Investments} />
  </div>
</Router>
