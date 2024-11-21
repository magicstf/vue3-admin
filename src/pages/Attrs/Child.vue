<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:42:09
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 10:08:52
-->
<template>
  <div class="child">
    <h3>子组件</h3>
    <h3>{{ $attrs }}</h3>
    <GrandChild v-bind="$attrs"></GrandChild>
  </div>
</template>

<script lang="ts" setup>
import GrandChild from "./GrandChild.vue";
</script>

<style scoped>
.child {
  background: violet;
  padding: 20px;
}
</style>
