<script setup>
import { onMounted } from 'vue';



onMounted(() => {
    const imgs = document.querySelectorAll('.img');
    const pointer = document.querySelector('.pointer');

    for (const img of imgs) {
        img.onmouseenter = () => {
            pointer.style.setProperty('display', 'block')
            pointer.style.setProperty('--s', `${img.offsetWidth}px`);
            console.log(img.offsetWidth);
            pointer.style.setProperty('--x', `${img.offsetLeft}px`);
            pointer.style.setProperty('--y', `${img.offsetTop}px`);
        }
    }
})

// document.querySelector('.container').onmouseleave = () => {
//     pointer.style.setProperty('display', 'none')
// }

</script>

<template>
    <div class="container">
        <div class="pointer" ref="pointer"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
        <div class="img"></div>
    </div>
</template>

<style scoped>
* {
    margin: 0;
    padding: 0;
}

body {
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
}

.container {
    display: grid;
    grid-template-columns: repeat(3, 100px);
    grid-template-rows: 100px;
    grid-gap: 20px;
    position: relative;
}

.img {
    width: 100px;
    height: 100px;
    background: aquamarine;
}


.pointer {
    --l: 15px;
    /* 线框长度 */
    --t: 2px;
    /* 线框粗细 */
    --g: 10px;
    /* 线框与图片间隙 */
    --s: 100px;
    /* 图片尺寸 */
    --x: 0px;
    /* 图片左上角的横坐标 */
    --y: 0px;
    /* 图片左上角的纵坐标 */
    position: absolute;
    display: none;
    width: calc(var(--s) + var(--g) * 2 - var(--t) * 2);
    height: calc(var(--s) + var(--g) * 2 - var(--t) * 2);
    border: var(--t) solid #fff;
    border-radius: 5px;
    box-sizing: content-box;
    left: calc(var(--x) - var(--g));
    top: calc(var(--y) - var(--g));
    transition: 0.2s;
    mask: conic-gradient(at var(--l) var(--l),
            transparent 75%,
            black 75% 100%) 0 0 / calc(100% - var(--l)) calc(100% - var(--l)) repeat;
}
</style>
