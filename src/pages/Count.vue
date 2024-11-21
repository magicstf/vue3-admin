<!--
 * @Author: sutengfei
 * @Date: 2024-11-16 09:32:27
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-19 11:19:08
-->
<template>
  <div class="count">
    <span class="count-span">{{ sum }} | </span>
    <span>{{ school }} | </span>
    <span>{{ address }}</span>
    <select class="count-sel" v-model.number="n">
      <option>1</option>
      <option>2</option>
      <option>3</option>
    </select>
    <button class="btn" @click="add">加</button>
    <button class="btn" @click="minus">减</button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { useCount } from "@/store/count";
import { storeToRefs } from "pinia";
const countStore = useCount();
let { sum, school, address } = storeToRefs(countStore);

let n = ref(1);

function add() {
  // 修改store方法一：
  //   countStore.sum += n.value;
  // 修改store方法二：
  //   countStore.$patch({
  //     sum: 999,
  //     school: "北京大学",
  //     address: "北京",
  //   });
  // 修改store方法三：
  countStore.increment(n.value);
}
function minus() {
  countStore.sum -= n.value;
}
</script>

<style scoped>
.count {
  width: 100%;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  padding: 10px;
  box-sizing: border-box;
  background: antiquewhite;
}
.count-span {
  display: inline-block;
  width: 45px;
  text-align: center;
}
.count-sel {
  width: 40px;
  height: 24px;
  display: inline-block;
  line-height: 20px;
  margin-left: 10px;
  margin-right: 10px;
}
.btn {
  width: 40px;
  margin-right: 10px;
}
</style>
