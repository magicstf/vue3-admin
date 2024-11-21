/*
 * @Author: sutengfei
 * @Date: 2024-11-21 16:31:23
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-21 16:39:04
 */
import { customRef } from "vue";

export default function (initValue: string, delay: number) {
  let timer: number;
  let msg = customRef((track, trigger) => {
    return {
      get() {
        track();
        return initValue;
      },
      set(newValue) {
        clearTimeout(timer);
        timer = setTimeout(() => {
          initValue = newValue;
          trigger();
        }, delay);
      },
    };
  });

  return msg;
}
