<script lang="ts">
  export let primary = false;

  export let onclick: () => void;
</script>

<button on:click={onclick} class:primary>
  <slot />
</button>

<style>
  button {
    padding: 1rem 1.5rem;
    border-radius: 5rem;

    background: transparent;
    border: solid 1px var(--primary-color-7);
    color: var(--gray-9);

    font-family: var(--monospace);
    font-size: var(--font-size);
    font-weight: 700;
    text-transform: uppercase;

    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);

    cursor: pointer;
    outline: none;
    z-index: 1;
  }

  button:hover {
    color: var(--gray-1);
    background: linear-gradient(to right, var(--primary-color), var(--primary-color-6));
    box-shadow: 2px 5px 16px 2px var(--primary-color-2);
    border-color: transparent;
  }

  button.primary {
    color: var(--gray-1);
    background-image: linear-gradient(to right, var(--primary-color-6), var(--primary-color), var(--primary-color-6));
    background-size: 200% auto;
    border: none;
  }

  button.primary:hover {
    background-position: right center;
  }

  @media all and (min-width: 900px) {
    button:not(.primary):focus-visible {
      color: var(--gray-1);
      border-color: transparent;
      background: linear-gradient(to right, var(--primary-color), var(--primary-color-6));
      box-shadow: 2px 5px 16px 2px var(--primary-color-2), 0 0 0 4px var(--secondary-color-3);
    }

    button.primary:focus-visible {
      background-position: right center;
      box-shadow: 2px 5px 16px 2px var(--primary-color-2), 0 0 0 4px var(--secondary-color-3);
    }
  }
</style>
