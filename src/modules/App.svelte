<script>
  import { Router, Link, Route } from "svelte-routing";
  import { goals } from "../store";
  import Goal from "./Goal.svelte";
  import Progress from "./Progress.svelte";
  import Transaction from "./Transaction.svelte";
  import Home from "./Home.svelte";
  import Navigation from "../components/Navigation.svelte";
</script>

<style>
  :global(body) {
    padding: 0;
  }
  .main {
    background-color: white;
    height: 100%;
    position: relative;
  }
</style>

<div class="main">
  <Router>
    <Route path="/" component={Home} />
    <Route path="/goals" component={Progress} />
    <Route path="/goals/new" component={Goal} />
    <Route path="/transactions/new" component={Transaction} />
    <Navigation />
  </Router>
</div>
