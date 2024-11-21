<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:42:09
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 10:31:44
-->
<template>
  <div class="child">
    <h3>子组件二</h3>
    <h4>玩具：{{ toy }}</h4>
    <h4>书籍：{{ book }}</h4>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const toy = ref("奥特曼");
const book = ref(6);
// 对外暴露
defineExpose({ toy, book });
</script>

<style scoped>
.child {
  background: violet;
  padding: 20px;
}
</style>
