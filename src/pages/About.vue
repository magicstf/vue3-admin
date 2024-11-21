<!--
 * @Author: sutengfei
 * @Date: 2024-11-15 10:35:12
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 16:53:15
-->
<template>
  <div class="props-wrap">
    <div class="left-nav">
      <ul>
        <li><RouterLink to="/about/props">props</RouterLink></li>
        <li><RouterLink to="/about/customevent">自定义事件</RouterLink></li>
        <!-- <li><RouterLink to="/about/props">mitt</RouterLink></li> -->
        <li><RouterLink to="/about/vmodel">v-model</RouterLink></li>
        <li><RouterLink to="/about/attrs">$attrs</RouterLink></li>
        <li><RouterLink to="/about/refsparent">$refs\$parent</RouterLink></li>
        <li>
          <RouterLink to="/about/provideinject">provide/inject</RouterLink>
        </li>
        <li><RouterLink to="/about/pinia">pinia</RouterLink></li>
        <li><RouterLink to="/about/slot">slot</RouterLink></li>
        <li><RouterLink to="/about/scopedslot">作用域插槽</RouterLink></li>
        <li><RouterLink to="/about/customref">自定义ref</RouterLink></li>
        <li><RouterLink to="/about/teleport">Teleport</RouterLink></li>
      </ul>
    </div>
    <div class="right-content"><RouterView></RouterView></div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
</script>

<style scoped>
.props-wrap {
  display: flex;
}
.left-nav ul {
  list-style: none;
  padding: 0;
}
.left-nav ul li {
  border: 1px solid #efefef;
  border-bottom: none;
  width: 120px;
}
.left-nav ul li a {
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 5px;
}
.left-nav ul li:last-child {
  border-bottom: 1px solid #efefef;
}
.left-nav ul li:hover {
  background: whitesmoke;
  cursor: pointer;
}
.right-content {
  border: 1px solid #efefef;
  width: 100%;
  margin-left: 15px;
}
</style>
