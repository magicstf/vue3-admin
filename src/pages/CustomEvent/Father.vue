<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 20:34:50
-->
<template>
  <div class="father">
    <h2>自定义事件-子传父</h2>
    <h3>父组件</h3>
    <h4 v-if="toy">来自子组件的玩具：{{ toy }}</h4>
    <Child @send-toy="getToy"></Child>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Child from "./Child.vue";
// 数据
let toy = ref("");
function getToy(payload: string) {
  toy.value = payload;
}
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
</style>
