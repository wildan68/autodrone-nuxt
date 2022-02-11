<template>
  <div class="benefit">
    <div class="w-[90%] flex md:flex-col md:items-center gap-[80px]">
      <img src="@/assets/img/benefit_feature_image.png" />
      <div class="info">
        <span class="font-[600] text-[48px] md:text-[36px]">Why Drone Light?</span>
        <span class="pt-[15px] font-[300] text-[24px] md:text-center">
          We provide a best self drone easy to use and operate. With auto pilot, the device will take a beautiful view
          for the best of flying operation.
        </span>
        <div class="pt-[30px] flex gap-[70px] flex-wrap md:justify-center">
            <div class="flex flex-col gap-[5px] text-center justify-center" v-for="(data, i) in dataSpec" :key="i">
                <span class="text-[36px] md:text-[28px] font-[600]">{{ data.title }}</span>
                <span class="text-[20px] font-[300] text-gray" v-html="data.caption"></span>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'benefit_section',
        data() {
            return {
                dataSpec: [{
                    title: '4K',
                    caption: 'Camera<br>Resolution'
                }, {
                    title: '2 TB',
                    caption: 'Stroage<br>Capacity'
                }, {
                    title: '60 m/s',
                    caption: 'Super<br>Max Speed'
                }, {
                    title: '30 mins',
                    caption: 'Long Flight<br>Time'
                }, ]
            }
        }
    }
</script>

<style lang="postcss" scoped>
    .benefit {
        @apply bg-dark-white flex justify-center p-[80px]
    }
    
    .benefit img {
        @apply w-[342px] h-[358px]
    }
    
    .benefit .info {
        @apply flex flex-col
    }
    @media (max-width: 768px) {
        .benefit {
            @apply flex-col p-[30px] items-center
        }
        .benefit img {
            @apply w-[227px] h-[236px]
        }
        .benefit .info {
            @apply text-center
        }
    }
</style>