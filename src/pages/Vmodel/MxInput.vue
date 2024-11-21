<!--
 * @Author: sutengfei
 * @Date: 2024-11-20 20:53:44
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-20 21:18:48
-->
<template>
  <div>
    <!-- <input
      :value="modelValue"
      @input="
        emit('update:modelValue', (<HTMLInputElement>$event.target).value)
      "
      class="mx-input"
      type="text"
    /> -->
    <!-- 3.4以后的写法 start-->
    <input v-model="model" class="mx-input" type="text" />
    <!-- 3.4以后的写法 end-->
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
// defineProps(["modelValue"]);
// const emit = defineEmits(["update:modelValue"]);

// 3.4以后的写法 start
const model = defineModel();
// 3.4以后的写法 end
</script>

<style scoped>
.mx-input {
  height: 30px;
  padding-left: 5px;
  border-radius: 5px;
  border: 1px solid #efefef;
}
</style>
