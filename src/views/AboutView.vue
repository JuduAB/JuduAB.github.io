<script setup>
import { reactive, ref, onMounted, onUpdated } from 'vue';


const data = reactive({
  btnShow: true,
  txt: "xxx",
  log: () => {
    console.log("左键单击");
  }
})

const edit = () => {
  data.btnShow = !data.btnShow
}
onUpdated(() => {
  if (!data.btnShow) {
    document.getElementById('txt').focus()
    console.log(document.getElementById('txt'));
  }
})

</script>

<template>
  <input type="button" v-if="data.btnShow" @click="data.log" @contextmenu.prevent="edit" v-model="data.txt">
  <input id="txt" type="text" v-if="!data.btnShow" @blur="edit" v-model="data.txt">

</template>

<style scoped>
input {
  width: 100px;
  height: 30px;
}
</style>
