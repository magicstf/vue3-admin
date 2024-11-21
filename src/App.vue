<!--
 * @Author: sutengfei
 * @Date: 2024-11-13 11:09:04
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 20:52:01
-->
<script setup lang="ts">
import { RouterView, RouterLink } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <h3>Vue3</h3>
    <div class="nav-wrap">
      <ul class="nav">
        <li class="nav-item">
          <RouterLink to="/home" active-class="active">首页</RouterLink>
        </li>
        <li class="nav-item">
          <RouterLink :to="{ name: 'News' }" active-class="active"
            >新闻</RouterLink
          >
        </li>
        <li class="nav-item">
          <RouterLink :to="{ path: '/about' }" active-class="active"
            >关于</RouterLink
          >
        </li>
      </ul>
    </div>
    <div class="content"><RouterView></RouterView></div>
  </div>
</template>

<style scoped>
h3 {
  text-align: center;
  line-height: 30px;
  margin: 0 auto;
  background: aquamarine;
}
.nav {
  list-style: none;
  display: flex;
  margin: 10px auto;
  width: 400px;
  justify-content: start;
  .nav-item {
    width: 100px;
    height: 30px;
    border: 1px solid #efefef;
    text-align: center;
    a {
      display: inline-block;
      width: 100%;
      height: 100%;
      line-height: 1.5;
    }
  }
}
.active {
  background: pink;
  a {
    color: #000;
  }
}
.content {
  height: 500px;
  width: 500px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  box-sizing: border-box;
  padding: 10px;
}
</style>
