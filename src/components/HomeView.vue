<template>
  <div class="inline-block h-164 bg-#F2F3F5 rounded-4 p-20 pt-16!">
    <div class="mb-8 text-14 text-#7A8699">示例（请按照示例上传真实、有效的集装箱照片）：</div>
    <div class="f-s">
      <div class="relative w-100 h-100 mr-8 last-mr-0" v-for="item in sampleBoxPics" :key="item.id">
        <img
          class="wh-full object-cover"
          :src="`https://filecdn.xxx.com/xxx/box_pic_${item.id}.png`"
          alt=""
        />
        <div class="absolute bottom-0 w-full f-c bg-#1D2129/80 text-white text-12">
          {{ item.name }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
let sampleBoxPics = [
  { id: 1, name: '1' },
  { id: 2, name: '2' },
  { id: 3, name: '3' }
]
</script>
