<template>
  <view :class="styles['page-container']">
    <!-- sign board -->
    <view :class="styles['page-container__signboard']">
      <text style="font-size: 20px; margin-bottom: 10px;" :class="styles['gold']">逸萱琴馆</text>
      <view style="display: flex; margin-top: 10px;">
        <text :class="styles['gold']">联系</text>：13817196105
      </view>
      <view style="display: flex;">
        <text style="white-space: nowrap;" :class="styles['gold']">地址</text>：上海市虹口区花园路128号德必运动园区
      </view>
    </view>

    <view :class="styles['page-container__lesson']">
      <view style="display: flex; color: #fff; margin: 10px;">
        <view :class="styles['tag']"></view> 体验课
      </view>

      <view :class="styles['page-container__lesson-wrapper']">
        <view :class="styles['section']">
        </view>
        <view :class="styles['section']">
        </view>
        <view :class="styles['section']">
        </view>
      </view>
    </view>

  <view :class="styles['page-container__lesson']">
    <view style="display: flex; color: #fff; margin: 10px;">
      <view :class="styles['tag']"></view> 教师风采
    </view>

    <view :class="styles['page-container__lesson-wrapper']">
      <view :class="styles['section']">
      </view>
      <view :class="styles['section']">
      </view>
      <view :class="styles['section']">
      </view>
    </view>
  </view>

    <view :class="styles['page-container__footer']">
      <view><text>多少楼台烟雨中，而我在等你</text></view>
      <view><text>逸萱琴馆，恭候莅临</text></view>
      <view><text>营业时间：10:00—20:00</text></view>
    </view>
  </view>
</template>

<script setup>
import { ref } from 'vue';
import styles from './index.module.scss'
// import swiperJPG from '@/assets/images/index/NutUItaro34.jpg'
</script>

<style>
</style>