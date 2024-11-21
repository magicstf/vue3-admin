<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 10:12:52
-->
<template>
  <div class="grand-child">
    <h3>孙组件</h3>
    <h3>toy: {{ toy }}</h3>
    <h3>car: {{ car }}</h3>
    <button @click="updateToy(toy)">更换玩具</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
const toy = ref("孙悟空");
defineProps(["toy", "car", "updateToy"]);
// 数据
</script>

<style scoped>
.grand-child {
  background: #999;
  padding: 20px;
}
</style>
