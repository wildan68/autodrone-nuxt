<template>
    <div class="home">
        <span class="pt-[60px] font-medium text-[36px]">Representing Drone Light</span>
        <span class="pt-[10px] font-[300] text-[18px] text-gray">Look up the sky and beautiful world with simple navigation<br>
        Just record anmd get a lot memories to share, lighty and fast like a lightning</span>
        <btn class="mt-[30px]" to="detail">GET NOW</btn>
    </div>
</template>

<script>
import btn from '@/components/button'

export default {
    name: 'home_layouts',
    components: {
        btn
    }
}
</script>

<style lang="postcss" scoped>
    .home {
        @apply pt-[5em] h-[750px] bg-[url('@/assets/img/header-bg.jpg')] bg-cover bg-center bg-no-repeat text-white flex flex-col items-center text-center
    }
    @media (max-width: 768px) {
        .home {
            @apply px-[5%]
        }
    }
</style>