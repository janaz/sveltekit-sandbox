<script lang="ts">
  let count = 0

  const increment = (): void => {
    count += 1
  }
</script>

<button
  class="py-4 px-8 text-red-500 bg-red-500 bg-opacity-10 rounded-full border-opacity-100 outline-none w-48"
  on:click={increment}
>
  Clicks: {count}
</button>

<style style lang="postcss">
  button {
    font-family: inherit;
    font-size: inherit;
    height: 60px;
    font-variant-numeric: tabular-nums;
  }

  button:hover {
    border: 3px solid #ff3e00;
  }

  button:active {
    @apply bg-red-500 bg-opacity-20;
  }
</style>
