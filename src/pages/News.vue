<!--
 * @Author: sutengfei
 * @Date: 2024-11-15 10:34:49
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-18 20:25:50
-->
<template>
  <div class="news">
    <ul>
      <li class="news-item" v-for="item in newsList" :key="item.id">
        <button @click="showDetail(item)">查看详情</button>
        <RouterLink :to="{ path: '/news/detail', query: { ...item } }">{{
          item.title
        }}</RouterLink>
      </li>
    </ul>
    <div class="new-content">
      <RouterView></RouterView>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";

const newsList = reactive([
  {
    id: "1",
    title: "如何一夜暴富",
    content: "做梦",
  },
  {
    id: "2",
    title: "如何轻松年入百万",
    content: "好好学习",
  },
  {
    id: "3",
    title: "好消息！好消息！",
    content: "明天放假",
  },
]);

const router = useRouter();
interface newsType {
  id: string;
  title: string;
  content: string;
}
function showDetail(news: newsType) {
  router.push({
    path: "/news/detail",
    query: {
      ...news,
    },
  });
}
</script>

<style scoped>
.news {
  display: flex;
}
.news-item:hover {
  cursor: pointer;
  background: bisque;
}
.new-content {
  border: 1px solid #cfcfcf;
  width: 300px;
  margin-left: 20px;
  border-radius: 5px;
  box-shadow: 5px 5px #ebeaea;
}
</style>
