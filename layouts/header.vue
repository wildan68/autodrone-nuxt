<template>
    <div class="header">
        <div class="wrapper">
            <div class="logo">
                <img src="@/assets/img/logo.png"/>
            </div>
            <div class="nav-menu flex md:hidden md:animate-[showMenu_0.5s_ease]" ref="nav_menu">
                <nav class="nav-menu-items">
                    Home
                </nav>
                <nav class="nav-menu-items">
                    Gallery
                </nav>
                <nav class="nav-menu-items">
                    Products
                </nav>
                <nav class="nav-menu-items">
                    Review
                </nav>
                <nav class="nav-menu-items">
                    Supports
                </nav>
                <nav class="nav-menu-items md:order-first" @click.prevent="search ? search = false : search = true">
                    <i class="bi bi-search"></i>
                </nav>
                <div :class="search ? 'flex md:fixed md:top-[70px] md:bottom-auto md:right-auto absolute bottom-[-5em] right-0 bg-black p-[1em]' : 'hidden'">
                    <input type='text' placeholder='Search items..' class='p-[10px] outline-none bg-transparent rounded-[8px] focus:border-gray focus:border-[1px]'/>
                </div>
                <button class="hidden md:block md:absolute md:top-[30px] right-[30px] md:text-white" @click.prevent="onMenu">
                    <i class="bi bi-x-lg"></i>
                </button>
            </div>
            <div class="toggler-menu" @click.prevent="onMenu">
                <button><i class="bi bi-list"></i></button>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    name: 'header_layouts',
    data() {
        return {
            navMenu: false,
            search: false,
        }
    },
    methods: {
        onMenu() {
            if (this.navMenu) {
                this.navMenu = false
                this.$refs.nav_menu.classList.remove('md:flex')
                this.$refs.nav_menu.classList.add('md:hidden')
            }
            else {
                this.navMenu = true
                this.$refs.nav_menu.classList.add('md:flex')
                this.$refs.nav_menu.classList.remove('md:hidden')
            }
        }
    }
}
</script>

<style lang="postcss" scoped>
    .header {
        @apply h-[5em] bg-black text-white flex justify-center items-center fixed left-0 top-0 right-0 z-50
    }
    .header .wrapper {
        @apply w-[90%] flex gap-[100px] justify-center items-center
    }
    .header .wrapper .logo {
        @apply w-14 h-14 flex items-center justify-center 
    }
    .header .wrapper .logo img {
        @apply w-[48px]
    }
    .header .wrapper .nav-menu {
        @apply gap-[100px] items-center text-gray relative
    }
    .header .wrapper .nav-menu-items {
        @apply hover:text-white cursor-pointer
    }
    .header .wrapper .toggler-menu {
        @apply hidden 
    }
    @media (max-width: 768px) {
        .header .wrapper .nav-menu {
            @apply fixed left-0 top-0 right-0 bottom-0 bg-black flex-col gap-[30px] justify-center
        }
        .header .wrapper .toggler-menu {
            @apply  flex items-center flex-1 justify-end
        }

        .header .wrapper .toggler-menu button {
            @apply hover:bg-dark-white hover:text-black px-[1em] py-[0.5em] rounded-[10px]
        }
        .header .wrapper .toggler-menu button i {
            @apply text-[24px] 
        }
    }
</style>