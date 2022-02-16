import { action } from '@storybook/addon-actions'
import Product from '../components/product_list'

export default {
    title: 'Product List',
    component: Product,
}

const Template = (args, { argTypes }) => ({
    components: { Product },
    props: Object.keys(argTypes),
    template: `<Product v-bind="$props" :items="items"/>`,
});

export const ProductList = Template.bind({});

ProductList.args = {
    items: [{
        thumb: 'img/mini_drone.jpg',
        title: 'Mini Drone',
        caption: 'Powerful camera drone at an affordable price range. Camera up to 4K resolution, optimize shots automatically.'
    }, {
        thumb: 'img/drone_light.jpg',
        title: 'Drone Light',
        caption: 'Drone light is every creators dream. Setting apperture manually and high battery  performance. Drone light is everything you need.',
    }, {
        thumb: 'img/phantom_drone.jpg',
        title: 'Phantom Drone',
        caption: 'Inspired by phantom, drone can move faster and quickly like a ghost. Focus on speed so you can investigate environtment quickly.',
    }, {
        thumb: 'img/skeleton_drone.jpg',
        title: 'Skeleton Drone',
        caption: 'Skeleton Items',
    }, ]
};