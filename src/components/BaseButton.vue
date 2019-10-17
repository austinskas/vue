<template>
 <button
    class="base-button"
    @click="$emit('click', $event)"
  >
    <slot />
  </button>

</template>
<script>
export default {
	name: 'BaseButton'
}
</script>


<style lang="scss">

</style>
