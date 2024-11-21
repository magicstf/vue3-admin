/*
 * @Author: sutengfei
 * @Date: 2024-11-15 10:08:05
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-15 10:20:12
 */
import { ref, onMounted, computed } from "vue";

export default function () {
  let sum = ref<number>(0);
  function add() {
    sum.value += 1;
  }

  onMounted(() => {
    add();
  });

  let bigSum = computed(() => {
    return sum.value * 10;
  });
  return { sum, add, bigSum };
}
