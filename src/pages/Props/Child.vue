<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:42:09
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 20:19:38
-->
<template>
  <div class="child">
    <h3>子组件</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>来自父亲的车：{{ car }}</h4>
    <button @click="sendToy(toy)">把玩具给父亲</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// 声明接收props
defineProps(["car", "sendToy"]);
// 数据
const toy = ref("奥特曼");
</script>

<style scoped>
.child {
  background: violet;
  padding: 20px;
}
</style>
