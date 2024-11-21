<!--
 * @Author: sutengfei
 * @Date: 2024-11-15 14:51:06
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-15 15:25:37
-->
<template>
  <div>
    <ul class="news-info">
      <li>编号:{{ query.id }}</li>
      <li>标题:{{ query.title }}</li>
      <li>内容:{{ query.content }}</li>
      <hr />
      <li>编号:{{ id }}</li>
      <li>标题:{{ title }}</li>
      <li>内容:{{ content }}</li>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref, toRefs } from "vue";
import { useRoute } from "vue-router";
defineProps(["id", "title", "content"]);
let route = useRoute();
let { query } = toRefs(route);
</script>

<style scoped></style>
