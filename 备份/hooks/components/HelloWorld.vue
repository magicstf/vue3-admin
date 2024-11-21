<!--
 * @Author: sutengfei
 * @Date: 2024-11-13 11:09:04
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-15 10:21:51
-->
<script setup lang="ts">
import useDog from "@/hooks/useDog";
import useSum from "@/hooks/useSum";

const { dogList, getDog } = useDog();
const { sum, add, bigSum } = useSum();
</script>

<template>
  {{ sum }} 放大10倍后的值{{ bigSum }}
  <div><button @click="add">点我sum+1</button></div>
  <hr />
  <img v-for="(dog, index) in dogList" :src="dog" :key="index" />
  <hr />
  <button @click="getDog">再来一只狗</button>
</template>

<style scoped>
img {
  height: 100px;
  margin: 10px;
}
</style>
