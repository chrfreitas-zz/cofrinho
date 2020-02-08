<script>
  import { Link } from "svelte-routing";
  import Icon from "svelte-awesome";
  import { home, listUl, user } from "svelte-awesome/icons";
</script>

<style>
  .navigation {
    bottom: 0;
    position: absolute;
    width: 100%;
    display: flex;
  }

  .navigation-item {
    flex: 1;
    text-align: center;
    padding: 10px 0;
  }
</style>

<!-- #f57c00 -->
<nav class="navigation">
  <div class="navigation-item">
    <Link to="/">
      <Icon data={home} scale={1.5} />
    </Link>
  </div>
  <div class="navigation-item">
    <Link to="/goals">
      <Icon data={listUl} scale={1.5} />
    </Link>
  </div>
  <div class="navigation-item">
    <Link to="/profile">
      <Icon data={user} scale={1.5} />
    </Link>
  </div>
</nav>
