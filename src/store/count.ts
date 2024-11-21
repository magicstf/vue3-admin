/*
 * @Author: sutengfei
 * @Date: 2024-11-15 16:43:55
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-16 10:35:17
 */
import { defineStore } from "pinia";

export const useCount = defineStore("count", {
  state() {
    return {
      sum: 10,
      school: "hello world",
      address: "呼和浩特赛罕区",
    };
  },
  getters: {
    // 不用this的写法
    bigSum: (state) => state.sum * 10,
    // 用this时，不可用箭头函数
    upperSchool(): string {
      return this.school.toUpperCase();
    },
  },
  actions: {
    increment(value: number) {
      this.sum += value;
    },
  },
});
