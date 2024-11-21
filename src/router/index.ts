/*
 * @Author: sutengfei
 * @Date: 2024-11-15 10:31:46
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 16:52:15
 */
import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import News from "@/pages/News.vue";
import About from "@/pages/About.vue";
import Detail from "@/pages/Detail.vue";
import Props from "@/pages/Props/Father.vue";
import CustomEvent from "@/pages/CustomEvent/Father.vue";
import Vmodel from "@/pages/Vmodel/Father.vue";
import GrandChild from "@/pages/Attrs/Father.vue";
import RefsParent from "@/pages/RefsParent/Father.vue";
import ProvideInject from "@/pages/ProvideInject/Father.vue";
import Pinia from "@/pages/Pinia/Father.vue";
import Slot from "@/pages/Slot/Father.vue";
import ScopedSlot from "@/pages/ScopedSlot/Father.vue";
import CustomRef from "@/pages/CustomRef/index.vue";
import Teleport from "@/pages/Teleport/index.vue";
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      name: "Home",
      path: "/home",
      component: Home,
    },
    {
      name: "News",
      path: "/news",
      component: News,
      children: [
        {
          name: "Detail",
          path: "detail",
          component: Detail,
          props(route) {
            return route.query;
          },
        },
      ],
    },
    {
      name: "About",
      path: "/about",
      component: About,
      children: [
        {
          name: "Props",
          path: "props",
          component: Props,
        },
        {
          name: "CustomEvent",
          path: "customevent",
          component: CustomEvent,
        },
        {
          name: "Vmodel",
          path: "vmodel",
          component: Vmodel,
        },
        {
          name: "Attrs",
          path: "attrs",
          component: GrandChild,
        },
        {
          name: "RefsParent",
          path: "refsparent",
          component: RefsParent,
        },
        {
          name: "ProvideInject",
          path: "provideinject",
          component: ProvideInject,
        },
        {
          name: "Pinia",
          path: "pinia",
          component: Pinia,
        },
        {
          name: "Slot",
          path: "slot",
          component: Slot,
        },
        {
          name: "ScopedSlot",
          path: "scopedslot",
          component: ScopedSlot,
        },
        {
          name: "CustomRef",
          path: "customref",
          component: CustomRef,
        },
        {
          name: "Teleport",
          path: "teleport",
          component: Teleport,
        },
      ],
    },
    {
      path: "/",
      redirect: "/home",
    },
  ],
});
export default router;
