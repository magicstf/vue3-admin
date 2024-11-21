<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 11:05:40
-->
<template>
  <div class="father">
    <h2>provide/inject-祖孙互传</h2>
    <h3>父组件</h3>
    <h3>money: {{ money }}</h3>
    <h3>car: {{ car }}</h3>
    <Child></Child>
  </div>
</template>

<script lang="ts" setup>
import { provide, ref } from "vue";
import Child from "./Child.vue";

// 数据
let money = ref(100);
let car = ref("奔驰");
// 方法
function setMoney(payload: number) {
  money.value -= payload;
}
// 向后代提供数据
provide("money", { money, setMoney });
provide("car", car);
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
</style>
