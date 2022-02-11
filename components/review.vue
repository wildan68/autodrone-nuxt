<template>
  <div class="review">
    <div class="review-items" v-for="(data, i) in items" :key="i" data-aos="flip-up">
      <span class="text-[16px] font-[300]">
        {{ data.msg }}
      </span>
      <div class="flex gap-[30px]">
          <img :src="data.pict" class="rounded-full w-[70px] h-[70px]"/>
          <div class="flex flex-col">
              <span class="font-[600] text-[20px]"> {{ data.name }} </span>
              <span class="text-gray font-[300] text-[18px]"> {{ data.role }} </span>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
    export default {
        name: 'review_components',
        props: {
            items: Array,
        }
    }
</script>

<style lang="postcss" scoped>
    .review {
        @apply w-full flex flex-wrap gap-[50px]
    }
    .review .review-items {
        @apply p-[30px] border-[1px] border-gray rounded-[10px] flex flex-col gap-[30px] w-[347px]
    }
</style>