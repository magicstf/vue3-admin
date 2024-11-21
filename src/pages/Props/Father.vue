<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 20:35:59
-->
<template>
  <div class="father">
    <h2>Props-父子互传</h2>
    <h3>父组件</h3>
    <h4>汽车:{{ car }}</h4>
    <h4 v-if="toy">来自孩子的玩具：{{ toy }}</h4>
    <Child :car="car" :sendToy="getToy"></Child>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Child from "./Child.vue";
// 数据
const car = ref("奔驰");
let toy = ref("");
// 接受子组件参数的方法
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
