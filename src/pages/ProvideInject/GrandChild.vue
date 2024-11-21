<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 11:07:10
-->
<template>
  <div class="grand-child">
    <h3>孙组件</h3>
    <h3>money: {{ money }}</h3>
    <h3>car: {{ car }}</h3>
    <button @click="setMoney(5)">花钱</button>
  </div>
</template>

<script lang="ts" setup>
import { inject, ref } from "vue";
// 数据及方法
const { money, setMoney } = inject("money", {
  money: 0,
  setMoney: (x: number) => {},
});
const car = inject("car");
</script>

<style scoped>
.grand-child {
  background: #999;
  padding: 20px;
}
</style>
