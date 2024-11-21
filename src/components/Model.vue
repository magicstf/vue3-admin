<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 16:54:13
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 17:12:37
-->
<template>
  <button @click="visible = true">展示弹窗</button>
  <Teleport to="body">
    <div v-show="visible" class="model">
      <h3>弹窗标题</h3>
      <p>弹窗内容</p>
      <button @click="isShow">关闭弹窗</button>
    </div>
  </Teleport>
</template>

<script lang="ts" setup>
import { ref } from "vue";
let visible = ref(false);
function isShow() {
  visible.value = false;
}
</script>

<style scoped>
.model {
  width: 200px;
  height: 200px;
  background-color: blueviolet;
  box-shadow: 0 0 5px;
  text-align: center;
  position: fixed;
  left: 50%;
  top: 300px;
  transform: translateX(-50%);
}
</style>
