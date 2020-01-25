<script>
  import { navigate } from "svelte-routing";

  import { goals } from "./store";

  let goal = {
    name: null,
    value: null,
    data: null,
    investments: []
  };

  const clearForm = () => {
    goal = {
      name: null,
      value: null,
      data: null,
      investments: []
    };
  };

  const handleOnSubmit = () => {
    goals.add(goal);
    clearForm();
    navigate("/");
  };
</script>

<form on:submit|preventDefault={handleOnSubmit}>
  <label for="">Name</label>
  <input type="text" bind:value={goal.name} />

  <label for="">Value</label>
  <input type="text" bind:value={goal.value} />

  <label for="">Date</label>
  <input type="text" bind:value={goal.data} />

  <button>Save</button>
</form>
