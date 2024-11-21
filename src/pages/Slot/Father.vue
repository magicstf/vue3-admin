<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 15:22:59
-->
<template>
  <div class="father">
    <h2>slot</h2>
    <h3>父组件</h3>
    <div class="list">
      <Category>
        <template #title>
          <h5>游戏</h5>
        </template>
        <template #content>
          <ul>
            <li v-for="g in games" :key="g.id">{{ g.name }}</li>
          </ul>
        </template>
      </Category>
      <Category>
        <template #title>
          <h5>美食</h5>
        </template>
        <template #content>
          <div class="content">{{ imgUrl }}</div>
        </template>
      </Category>
      <Category>
        <template #title>
          <h5>电影</h5>
        </template>
        <template #content>
          <div class="content">{{ videoUrl }}</div>
        </template>
      </Category>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import Category from "./Category.vue";
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
const imgUrl = ref("图片");
const videoUrl = ref("视频");
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
.content {
  margin: 0;
  padding: 0;
  list-style: none;
  font-size: 12px;
  text-align: center;
}
h5 {
  text-align: center;
}
</style>
