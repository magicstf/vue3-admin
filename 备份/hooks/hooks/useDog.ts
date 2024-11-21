/*
 * @Author: sutengfei
 * @Date: 2024-11-15 10:08:25
 * @LastEditors: sutengfei
 * @LastEditTime: 2024-11-15 10:18:30
 */
import { reactive, onMounted } from "vue";
import axios from "axios";

export default function () {
  //图片列表 https://dog.ceo/api/breed/pembroke/images
  let dogList = reactive([
    "https://images.dog.ceo/breeds/pembroke/n02113023_4373.jpg",
  ]);

  async function getDog() {
    try {
      let result = await axios.get(
        "https://dog.ceo/api/breed/pembroke/images/random"
      );
      dogList.push(result.data.message);
    } catch (error) {
      console.log(error);
    }
  }

  onMounted(() => {
    getDog();
  });
  return { dogList, getDog };
}
