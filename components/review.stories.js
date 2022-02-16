import { action } from '@storybook/addon-actions'
import aos from 'aos'
import review from '../components/review'

export default {
    title: 'Review',
    component: review
}

const Template = (args, { argTypes }) => ({
    components: { review },
    props: Object.keys(argTypes),
    template: `<review v-bind="$props" :items="items" :animation="animation"/>`,
    mounted() {
        aos.init()
    },
});

export const FlipUp = Template.bind({});
export const FlipDown = Template.bind({});
export const FadeUp = Template.bind({});
export const FadeDown = Template.bind({});

FlipUp.args = {
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
    }, ],
    animation: 'flip-up'
};

FlipDown.args = {
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
    }, ],
    animation: 'flip-down'
};

FadeUp.args = {
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
    }, ],
    animation: 'fade-up'
};

FadeDown.args = {
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
    }, ],
    animation: 'fade-down'
};