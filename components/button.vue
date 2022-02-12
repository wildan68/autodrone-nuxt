<template>
    <button @click.prevent="$router.push(to)">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'btn_component',
    props: {
        to: {
            type: String,
            default: '/'
        }
    }
}
</script>

<style lang="postcss" scoped>
    button {
        @apply bg-blue py-[12px] px-[3em] text-white font-[500] text-[18px] hover:bg-dark-blue rounded-full
    }
</style>