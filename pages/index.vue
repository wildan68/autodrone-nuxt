<template>
  <div class="mainapp">
    <Header/>
    <Home/>
    <Feature id="gallery"/>
    <Benefit/>
    <Product id="product"/>
    <Testimoni id="review"/>
    <Footer id="footer"/>
  </div>
</template>

<script>
import AOS from 'aos'
import Header from '@/layouts/header'
import Home from '@/layouts/home'
import Feature from '@/layouts/feature'
import Benefit from '@/layouts/benefit'
import Product from '@/layouts/product'
import Testimoni from '@/layouts/testimoni'
import Footer from '@/layouts/footer'

export default {
  name: 'index',
  components: {
    Header,
    Home,
    Feature,
    Benefit,
    Product,
    Testimoni,
    Footer,
  },
  mounted() {
    AOS.init();
  },
  head() {
    return {
      title: 'Autodrone Nuxt Version | Wildan Rizky'
    }
  }
}
</script>
