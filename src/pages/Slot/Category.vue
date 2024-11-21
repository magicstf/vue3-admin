<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 11:50:04
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 15:14:49
-->
<template>
  <div class="category">
    <slot name="title"></slot>
    <slot name="content"></slot>
  </div>
</template>

<script lang="ts" setup></script>

<style scoped>
.category {
  background-color: aqua;
  border-radius: 5px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 75px;
  height: 100px;
  margin: 10px;
}
</style>
