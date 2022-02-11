<template>
    <div class="product">
        <span class="font-[600] text-[36px]">New Product</span>
        <span class="font-[300] text-gray text-[16px] pt-[16px] text-center">
            New innovation, best quality than before.<br>
            Make every moment flying operation become unforgettable.
        </span>
        <ProductList :items="items" class="translate-x-[15%] md:translate-x-0 mt-[50px]"/>
    </div>
</template>

<script>
import ProductList from '@/components/product_list'
export default {
    name: 'product_section',
    components: {
        ProductList,
    },
    data() {
        return {
            items: [
                {
                    thumb: 'img/mini_drone.jpg',
                    title: 'Mini Drone',
                    caption: 'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.'
                },{
                    thumb: 'img/drone_light.jpg',
                    title: 'Drone Light',
                    caption: 'Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.',
                },{
                    thumb: 'img/phantom_drone.jpg',
                    title: 'Phantom Drone',
                    caption: 'Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.',
                },{
                    thumb: 'img/skeleton_drone.jpg',
                    title: 'Skeleton Drone',
                    caption: 'Skeleton Items',
                },
            ]
        }
    }
}
</script>

<style lang="postcss" scoped>
    .product {
        @apply p-[50px] md:p-[25px] flex flex-col items-center
    }
</style>