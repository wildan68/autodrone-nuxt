<template>
    <div class="footer">
        <div class="footer-items">
            <div class="flex gap-[20px] items-center">
                <img src="@/assets/img/logo.png" class="w-[68px] h-[24px]">
                <span class="font-[600] text-[26px]">autodrone</span>
            </div>
            <span class="font-[300] text-[18px]">
                Look up the sky and beutiful world easily
            </span>
        </div>
        <div class="footer-items">
            <b>Explore</b>
            <div class="flex flex-col gap-[15px] text-gray">
                <span>Our Service</span>
                <span>Specification</span>
                <span>Refund</span>
                <span>Playlist</span>
            </div>
        </div>
        <div class="footer-items">
            <b>Account</b>
            <div class="flex flex-col gap-[15px] text-gray">
                <span>My Account</span>
                <span>Top Benefit</span>
                <span>How-to Tutorials</span>
                <span>Moment</span>
            </div>
        </div>
        <div class="footer-items">
            <b>Office</b>
            <div class="flex flex-col gap-[15px] text-gray">
                <span>+021 2208 1996</span>
                <span>SCBD, Jakarta</span>
                <span>No. 2 (Autodrone)</span>
                <span>support@autodrone.id</span>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'footer_layout'
}
</script>

<style lang="postcss" scoped>
    .footer {
        @apply flex gap-[100px] bg-black h-[410px] px-[150px] py-[100px] text-white
    }
    .footer .footer-items {
        @apply flex flex-col gap-[18px]
    }
    .footer .footer-items span {
        @apply hover:text-white cursor-pointer
    }
    @media (max-width:768px) {
        .footer {
            @apply flex-col h-auto px-[25px] py-[55px] gap-[30px]
        }
    }
</style>