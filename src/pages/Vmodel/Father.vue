<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 21:06:40
-->
<template>
  <div class="father">
    <h2>v-model</h2>
    <h3>父组件</h3>
    <p>{{ username }}</p>
    <!-- v-model用在html标签上 -->
    <!-- <input type="text" v-model="username" /> -->
    <!-- <input
      type="text"
      :value="username"
      @input="username = (<HTMLInputElement>$event.target).value"
    /> -->
    <!-- v-model用在组件上 -->
    <MxInput v-model="username"></MxInput>
    <!-- <MxInput
      :modelValue="username"
      @update:modelValue="username = $event"
    ></MxInput> -->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import MxInput from "./MxInput.vue";
let username = ref("zhangsan");
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
</style>
