<!--
 * @Author: sutengfei
 * @Date: 2024-11-21 11:50:04
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 15:49:08
-->
<template>
  <div class="game">
    <h5>游戏列表</h5>
    <slot :games="games"></slot>
  </div>
</template>

<script lang="ts" setup>
import { reactive } from "vue";
import { nanoid } from "nanoid";
const games = reactive([
  {
    id: nanoid(),
    name: "王者",
  },
  {
    id: nanoid(),
    name: "吃鸡",
  },
  {
    id: nanoid(),
    name: "下棋",
  },
]);
</script>

<style scoped>
.game {
  background-color: aqua;
  border-radius: 5px;
  box-shadow: 0 0 10px;
  padding: 10px;
  width: 75px;
  height: 100px;
  margin: 10px;
}
</style>
