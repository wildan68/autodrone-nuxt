import { action } from '@storybook/addon-actions'
import btn from '../components/button'

export default {
    title: 'Button',
    component: btn

}

const Template = (args, { argTypes }) => ({
    components: { btn },
    props: Object.keys(argTypes),
    template: `<btn v-bind="$props" v-slot="label" v-html="label"/>`,
    methods: { action: action('clicked') },
});

export const Primary = Template.bind({});

Primary.args = {
    label: 'GET NOW',
};