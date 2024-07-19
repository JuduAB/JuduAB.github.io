<script setup>

import axios from 'axios';
import { reactive, watch } from 'vue';
import _ from 'lodash'
import { useWebStore } from '@/stores/webStores'


// const webStore = useWebStore()

// const axios = require('axios');

// async function makeRequests(interval) {
//     // 初始化 AbortController 和 signal
//     let controller = new AbortController();
//     let signal = controller.signal;

//     setInterval(async () => {
//         // 创建一个新的 AbortController 实例
//         const newController = new AbortController();
//         const newSignal = newController.signal;

//         try {
//             // 创建一个 axios 请求，并将 signal 与其关联
//             const response = await axios.get('your_api_endpoint', { signal: newSignal });

//             // 处理响应数据
//             console.log(response.data);

//         } catch (error) {
//             if (axios.isCancel(error)) {
//                 // 请求被取消
//                 console.log('Request cancelled');
//             } else {
//                 // 处理其他错误
//                 console.error('Error:', error.message);
//             }
//         } finally {
//             // 取消上一个请求
//             controller.abort();
//             controller = newController;
//             signal = newSignal;
//         }
//     }, interval);
// }

// a = async() =>{

// }
// // 调用 makeRequests 函数，传入定时器周期
// makeRequests(5000); // 5000 毫秒，即每 5 秒执行一次请求{ deep: true }

</script>

<template>


  <!-- {{ webStore.data.num }} -->
  <!-- <button @click="data.add">+</button> -->
  <RouterView />

</template>

<style scoped></style>
