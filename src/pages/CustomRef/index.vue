<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 16:31:55
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 16:41:01
-->
<template>
  <div>
    <h3>默认ref</h3>
    <p>{{ msg }}</p>
    <input type="text" v-model="msg" />
    <hr />
    <h3>自定义ref</h3>
    <p>{{ delayMsg }}</p>
    <input type="text" v-model="delayMsg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomRef from "@/hooks/useMsgRef";
let msg = ref("你好");
let delayMsg = CustomRef("web3", 1000);
</script>

<style lang="scss" scoped></style>
