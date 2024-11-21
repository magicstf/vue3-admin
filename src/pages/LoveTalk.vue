<!--
 * @Author: sutengfei
 * @Date: 2024-11-16 09:32:39
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-19 11:44:30
-->
<template>
  <div class="love-talk">
    <button @click="getLoveTalk">获取一句</button>
    <ul class="list">
      <li class="item" v-for="item in talkList" :key="item.id">
        {{ item.title }}
      </li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { useLoveTalk } from "@/store/loveTalk";
import { storeToRefs } from "pinia";
const talkStore = useLoveTalk();

const { talkList } = storeToRefs(talkStore);
// 监听store变化
talkStore.$subscribe((mutate, state) => {
  console.log("变化了", mutate, state);
  localStorage.setItem("talkList", JSON.stringify(state.talkList));
});
async function getLoveTalk() {
  talkStore.getATalk();
}
</script>

<style scoped>
.love-talk {
  border: 1px solid #efefef;
  margin-top: 20px;
  padding: 10px;
  border-radius: 5px;
  background: yellowgreen;
}
</style>
