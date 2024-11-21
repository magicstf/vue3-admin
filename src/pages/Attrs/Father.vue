<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 10:12:08
-->
<template>
  <div class="father">
    <h2>$attrs-祖孙互传</h2>
    <h3>父组件</h3>
    <h3>toy: {{ toy }}</h3>
    <h3>car: {{ car }}</h3>
    <Child :toy="toy" :car="car" :updateToy="updateToy"></Child>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Child from "./Child.vue";

// 数据
let toy = ref("奥特曼");
let car = ref("奔驰");

function updateToy(payload: string) {
  toy.value = payload;
}
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
</style>
