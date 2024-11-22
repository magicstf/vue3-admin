<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 16:31:55
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-22 16:25:46
-->
<template>
  <div>
    <h3>默认ref</h3>
    <p>{{ msg }}</p>
    <input
      class="input input-bordered input-primary"
      type="text"
      v-model="msg"
    />
    <hr />
    <h3>自定义ref</h3>
    <p>{{ delayMsg }}</p>
    <input class="input input-bordered" type="text" v-model="delayMsg" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import CustomRef from "@/hooks/useMsgRef";
let msg = ref("你好");
let delayMsg = CustomRef("web3", 1000);
</script>

<style lang="scss" scoped>
p {
  color: aqua;
}
</style>
