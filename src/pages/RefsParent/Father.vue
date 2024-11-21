<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 19:41:59
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 10:44:12
-->
<template>
  <div class="father">
    <h2>$ref-父传子/$parent-子传父</h2>
    <h3>父组件</h3>
    <h3>房产：{{ house }}</h3>
    <button @click="updateChild1">修改child1的玩具</button>
    <button @click="updateChild2">修改child2的玩具</button>
    <button @click="getAllChildren($refs)">获取所有子组件实例对象</button>
    <Child1 ref="mark"></Child1>
    <Child2 ref="jack"></Child2>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Child1 from "./Child1.vue";
import Child2 from "./Child2.vue";
let mark = ref();
let jack = ref();
// 数据
let house = ref(4);
// 对外暴露
defineExpose({ house });
// 方法
function updateChild1() {
  mark.value.toy = "孙悟空";
}
function updateChild2() {
  jack.value.toy = "齐天大圣";
}
function getAllChildren(refs: any) {
  for (const key in refs) {
    if (Object.prototype.hasOwnProperty.call(refs, key)) {
      refs[key].book += 3;
    }
  }
}
</script>

<style scoped>
.father {
  background: #999;
  padding: 20px;
}
</style>
