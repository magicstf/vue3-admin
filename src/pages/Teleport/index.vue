<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 16:51:37
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 17:11:00
-->
<template>
  <div class="outer">
    <h3>index组件</h3>
    <img src="../../assets/logo.svg" />
    <Model></Model>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Model from "@/components/Model.vue";
</script>

<style scoped>
.outer {
  background-color: bisque;
  border-radius: 10px;
  padding: 5px;
  box-shadow: 0 0 10px;
  width: 250px;
  height: 300px;
}
img {
  width: 50px;
  height: 50px;
  filter: saturate(200%);
}
</style>
