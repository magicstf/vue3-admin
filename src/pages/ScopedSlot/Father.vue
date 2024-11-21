<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 15:58:49
-->
<template>
  <div class="father">
    <h2>scoped slots</h2>
    <p>数据来自子组件，但是根据数据生成的结构由父组件决定</p>
    <h3>父组件</h3>
    <div class="list">
      <Game>
        <template v-slot="{ games }">
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Game>
      <Game>
        <template v-slot="{ games }">
          <ol>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ol>
        </template>
      </Game>
      <Game>
        <template v-slot="{ games }">
          <p v-for="g in games" :key="g.id">{{ g.name }}</p>
        </template>
      </Game>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Game from "./Game.vue";
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
.list {
  display: flex;
  justify-content: center;
}
ul,
ol,
.content {
  margin: 0;
  padding: 0;
  font-size: 12px;
  text-align: center;
  list-style-position: inside;
}
h5 {
  text-align: center;
}
p {
  font-size: 12px;
}
</style>
