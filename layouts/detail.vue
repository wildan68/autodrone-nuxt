<template>
  <div class="detail">
    <div class="flex gap-[50px] w-full md:flex-col">
      <div class="picture">
        <div
          class="flex items-center justify-center w-[725px] md:w-full h-[550px] md:h-[263px] p-[15px] border-gray border-[1px] rounded-[10px] overflow-hidden">
          <img :src="dataImage[pointer]"
            class="object-cover w-full h-full hover:scale-125 transition-all ease-in-out"/>
        </div>
        <div class="flex gap-[15px] justify-between">
          <div class="pointer cursor-pointer" :id="pointer == i ? 'active' : 0" v-for="(data, i) in dataImage" :key="i" @click.prevent="pointer = i">
            <img :src="data" class="w-full h-full rounded-[10px] md:rounded-[5px]" />
          </div>
        </div>
      </div>
      <div class="info">
        <span class="font-[600] text-[28px]">Drone Light</span>
        <span class="font-[300] text-[20px]">Super fast, easy control drone</span>
        <span class="mt-[10px] font-[600] text-[48px]">$ 4.500,00</span>
        <span class="mt-[10px] font-[500] text-[22px]">Drone features:</span>
        <div class="mt-[10px] flex flex-col gap-[20px]">
          <div class="flex gap-[20px]">
            <img src="@/assets/img/svg/camera.svg" />
            <span class="font-[300] text-[20px]">4K Camera Resolution</span>
          </div>
          <div class="flex gap-[20px]">
            <img src="@/assets/img/svg/memory.svg" />
            <span class="font-[300] text-[20px]">2 TB Storage</span>
          </div>
          <div class="flex gap-[20px]">
            <img src="@/assets/img/svg/spedo.svg" />
            <span class="font-[300] text-[20px]">60 m/s Speed</span>
          </div>
          <div class="flex gap-[20px]">
            <img src="@/assets/img/svg/battery.svg" />
            <span class="font-[300] text-[20px]">5000 mAh Battery</span>
          </div>
        </div>
        <btn class="mt-[30px]">GET NOW</btn>
      </div>
    </div>
    <div class="description">
      <b class="text-[28px]">Description</b>
      <span class="font-[300] text-[18px]">
        We provide a best self drone easy to use and operate. With auto pilot, the device
        will take a beautiful view for the best of flying operation. Drone light is every
        creators dream. Setting apperture manually and high battery performance. With 2
        Terabyte storage, you can take a lot of picture in one take. 4K Camera resolution
        make your video clean and feels like a real environtment. Capture your moment in
        easy way effortlesly with auto pilot system. No need to learn how to fly and
        operate drone. Enjoy your simple and easy flying experience. Drone light is
        everything you need.
      </span>
    </div>
  </div>
</template>

<script>
    import Btn from "@/components/button";

    export default {
        name: "detail_layouts",
        components: {
            Btn,
        },
        data() {
            return {
                pointer: 1,
                dataImage: [
                  'img/highlight1.jpg',
                  'img/highlight_large.jpg',
                  'img/highlight3.jpg',
                  'img/highlight4.jpg',
                ]
            }
        },
    };
</script>

<style lang="postcss" scoped>
    .detail {
        @apply px-[150px] py-[10em] flex flex-col gap-[50px];
    }
    
    .detail .picture {
        @apply flex flex-col gap-[20px];
    }
    
    .detail .info {
        @apply flex flex-col;
    }
    
    .detail .description {
        @apply p-[22px] flex flex-col gap-[22px] rounded-[10px] border-[1px] border-gray;
    }
    
    .detail .pointer {
        @apply flex items-center justify-center w-[170px] h-[120px] rounded-[10px] p-[10px] border-[1px] border-gray md:h-[68px] md:rounded-[5px];
    }
    .detail .pointer#active {
        @apply border-blue
    }
    @media (max-width: 768px) {
        .detail {
            @apply px-[5%] py-[7em];
        }
    }
</style>