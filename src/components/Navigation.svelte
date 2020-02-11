<script>
  import { Link } from "svelte-routing";
  import Icon from "svelte-awesome";
  import { home, listUl, user } from "svelte-awesome/icons";

  const handleProps = ({ isPartiallyCurrent, isCurrent }) => {
    return isCurrent ? { class: "active" } : { class: "" };
  };
</script>

<style>
  .navigation {
    bottom: 0;
    position: fixed;
    width: 100%;
    display: flex;
    box-shadow: 0px 10px 20px 0px rgba(0, 0, 0, 0.75);
  }

  .navigation-item {
    flex: 1;
    text-align: center;
    padding: 15px 0;
  }

  .navigation-item :global(a) {
    transition: 0.5s color;
    color: #9ea7aa;
  }

  .navigation-item :global(.active) {
    color: #f57c00;
  }
</style>

<nav class="navigation">
  <div class="navigation-item">
    <Link to="/" getProps={handleProps}>
      <Icon data={home} scale={1.5} />
    </Link>
  </div>
  <div class="navigation-item">
    <Link to="/goals" getProps={handleProps}>
      <Icon data={listUl} scale={1.5} />
    </Link>
  </div>
  <div class="navigation-item">
    <Link to="/profile" getProps={handleProps}>
      <Icon data={user} scale={1.5} />
    </Link>
  </div>
  <!-- TODO: Remove it after tests -->
  <div class="navigation-item">
    <Link to="/goals/new" getProps={handleProps}>
      <Icon data={user} scale={1.5} />
    </Link>
  </div>
  <div class="navigation-item">
    <Link to="/transactions/new" getProps={handleProps}>
      <Icon data={user} scale={1.5} />
    </Link>
  </div>
</nav>
