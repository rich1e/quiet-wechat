<!--
 * @Author       : yuqigong@outlook.com
 * @Date         : 2024-12-23 09:18:14
 * @LastEditors  : yuqigong@outlook.com
 * @LastEditTime : 2025-01-23 01:19:30
-->
<template>
  <view class="demo">
    <view>
      欢迎使用 NutUI 开发 Taro 多端项目 <Dongdong />
      <image :src="swiperJPG" alt="" :style="{height: '150px', width: '100%'}" draggable="false" />
    </view>
    <view style="height: 150px">
      <nut-swiper
        :init-page="2"
        :auto-play="3000"
        pagination-visible
        pagination-color="#426543"
        pagination-unselected-color="#808080"
      >
        <nut-swiper-item v-for="(item, index) in 3" :key="index" style="height: 150px">
          <image :src="swiperJPG" alt="" :style="{height: '150px', width: '100%'}" draggable="false" />
        </nut-swiper-item>
      </nut-swiper>
    </view>
    <view>{{ count }}</view>
    <view>
      <nut-button type="primary" @click="handleClick">
        Count++
      </nut-button>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import { Dongdong } from '@nutui/icons-vue-taro';
import swiperJPG from '@/assets/images/index/NutUItaro34.jpg'

const count = ref(0);

const list = ref([
  swiperJPG,
  swiperJPG,
  swiperJPG,
  swiperJPG
])

const handleClick = () => {
  count.value++;
};
</script>

<style>
.demo {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: black;
}
</style>