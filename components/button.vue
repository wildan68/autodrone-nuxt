<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'btn_component'
}
</script>

<style lang="postcss" scoped>
    button {
        @apply bg-blue py-[12px] px-[3em] text-white font-[500] text-[18px] hover:bg-dark-blue rounded-full
    }
</style>