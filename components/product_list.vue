<template>
  <div v-swiper:mySwiper="swiper" class="swiper">
    <div class="swiper-wrapper">
      <div class="swiper-slide" v-for="(i, index) in items" :key="index">
        <div class="w-full h-[240px] overflow-hidden rounded-[10px]">
            <img :src="i.thumb" />
        </div>
        <span class="mt-[30px] font-[600] text-[36px]">{{ i.title }}</span>
        <span class="mt-[10px] font-[300] text-[20px]">{{ i.caption }}</span>
        <btn class="mt-[30px]">GET NOW</btn>
      </div>
    </div>
  </div>
</template>

<script>
    import btn from '@/components/button'

    export default {
        name: 'product_list_components',
        props: {
            items: Array,
        },
        components: {
            btn,
        },
        data() {
            return {
                swiper: {
                    slidesPerView: 3,
                    spaceBetween: 20,
                    breakpoints: {
                        768: {
                            direction: 'vertical'
                        }
                    }
                },
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .swiper {
        @apply overflow-hidden h-[648px] w-full
    }
    
    .swiper .swiper-slide {
        @apply p-[45px] border-[gray] rounded-[10px] border-[1px] flex flex-col items-center text-center
    }
    
    .swiper .swiper-slide img {
        @apply w-full h-full rounded-[10px] object-cover
    }
    @media (max-width:768px) {
        .swiper {
            @apply h-[2348px]
        }
        .swiper .swiper-slide {
            @apply p-[25px] border-none
        }
    }
</style>