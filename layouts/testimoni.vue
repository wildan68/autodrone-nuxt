<template>
    <div class="testimoni">
        <span class="font-[600] text-[64px] md:text-[36px]">What Our "Pilots<br>Are Saying</span>
        <Review :items="items" animation="flip-up"/>
    </div>
</template>

<script>
import Review from '@/components/review'

export default {
    name: 'testimoni_section',
    components: {
        Review,
    },
    data() {
        return {
            items: [{
                msg: "With high resolution camera, picture become clear and beautiful. It's so easy to operate drone.",
                pict: 'img/profile1.jpg',
                name: 'Hugo Adams',
                role: 'Content Creator'
            }, {
                msg: 'Taking high view video become easy and faster. Battery performance really helping for making film.',
                pict: 'img/profile2.jpg',
                name: 'Jennie Obrien',
                role: 'Director Film'
            }, {
                msg: 'Making video content for my tripvlog so powerful and wonderful. Love the video quality.',
                pict: 'img/profile3.jpg',
                name: 'Lisa Millz',
                role: 'Content WQCreator'
            }, ]
        }
    }
}
</script>

<style lang="postcss" scoped>
    .testimoni {
        @apply px-[150px] py-[50px] md:p-[2em] flex flex-col gap-[80px]
    }
</style>