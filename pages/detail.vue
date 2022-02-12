<template>
    <div class="mainapp">
        <Header/>
        <Detail/>
        <Footer/>
    </div>
</template>

<script>
import Header from '@/layouts/header'
import Detail from '@/layouts/detail'
import Footer from '@/layouts/footer'

export default {
    name: 'detail',
    components: {
        Header,
        Footer,
        Detail,
    }
}
</script>