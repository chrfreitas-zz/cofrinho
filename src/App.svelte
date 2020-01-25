<script>
  import { Router, Link, Route } from "svelte-routing";
  import Goals from "./Goals.svelte";
</script>

<Router>
  <nav>
    <Link to="/goals">Add goal</Link>
    <Link to="/#">Add investment</Link>
  </nav>
  <div>
    <Route path="/goals" component={Goals} />
  </div>
</Router>
