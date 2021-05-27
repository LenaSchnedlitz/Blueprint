<script lang="ts">
  export let name: string;
  export let fat = false;
</script>

<svg width="24" height="24" viewBox="0 0 24 24" class="icon" class:fat aria-hidden="true">
  <use xlink:href="icons.svg#{name}" />
</svg>

<style>
  svg {
    fill: none;
    stroke: currentColor;
    stroke-width: 2px;
    stroke-linecap: round;
    width: 0.9em;
    height: 0.9em;
    position: relative;
    bottom: calc(var(--line-height) - 24px);
  }

  .fat {
    stroke-width: 3px;
  }
</style>
