<template>
    <div class="feature">
        <div class="feature-item" :data-aos="data.transition" v-for="(data, i) in items" :key="i">
            <img :src="data.bg">
            <span class="title" v-html="data.title"></span>
            <span class="caption" v-html="data.caption"></span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'feature_components',
    props: {
        items: Array,
    }
}
</script>

<style lang="postcss" scoped>
    .feature {
        @apply flex gap-[20px] p-[30px] justify-center
    }
    .feature .feature-item {
        @apply w-[680px] h-[660px] relative pt-[120px] overflow-hidden flex flex-col gap-[10px] items-center text-center px-[30px]
    }
    .feature .feature-item img {
        @apply absolute w-full h-full left-0 top-0 bottom-0 right-0 object-cover hover:scale-125 transition-all ease-in-out
    }
    .feature .feature-item .title {
        @apply font-[600] text-[48px] z-10
    }
    .feature .feature-item .caption {
        @apply text-[28px] font-[300] text-gray z-10
    }
    @media (max-width: 768px) {
        .feature {
            @apply flex-col p-[15px]
        }
        .feature .feature-item {
            @apply w-full h-[460px] pt-[36px]
        }
        .feature .feature-item .title {
            @apply text-[36px]
        }
    }
</style>