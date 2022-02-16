<template>
    <Feature :items="items"/>
</template>

<script>
import Feature from '@/components/feature'
export default {
    name: 'feature_section',
    components: {
        Feature,
    },
    data() {
        return {
            items: [{
                bg: 'img/ultra_light.jpg',
                title: 'Ultra Light',
                caption: `Drone move faster with weighing component <span class="text-black">under 200 g</span>`,
                transition: 'fade-right',
            }, {
                bg: 'img/best_resolution.jpg',
                title: `<span class="text-white">Best Resolution</span>`,
                caption: `Take a beautiful view with best camera up to <span class="text-white">4K Camera Resolution</span>`,
                transition: 'fade-left',
            }, ]
        }
    }
}
</script>

