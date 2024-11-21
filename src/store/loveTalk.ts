/*
 * @Author: sutengfei
 * @Date: 2024-11-15 16:55:57
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-19 11:42:19
 */
import axios from "axios";
import { nanoid } from "nanoid";
import { defineStore } from "pinia";
import { reactive } from "vue";
// 选项式写法
// export const useLoveTalk = defineStore("talk", {
//   state() {
//     return {
//       talkList: JSON.parse(localStorage.getItem("talkList") as string) || [],
//     };
//   },
//   actions: {
//     async getATalk() {
//       const {
//         data: { content: title },
//       } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
//       this.talkList.unshift({ id: nanoid(), title });
//     },
//   },
// });
// 组合式写法
export const useLoveTalk = defineStore("talk", () => {
  let talkList = reactive(
    JSON.parse(localStorage.getItem("talkList") as string) || []
  );

  async function getATalk() {
    const {
      data: { content: title },
    } = await axios.get("https://api.uomg.com/api/rand.qinghua?format=json");
    talkList.unshift({ id: nanoid(), title });
  }

  return { talkList, getATalk };
});
