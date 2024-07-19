<script setup>
import axios from 'axios'
import { onMounted, reactive, ref, watch } from 'vue';

const slider = ref();

const data = reactive({
    isDrawing: false,
    y: 0,
    b: 0,
    top: 0,
    click: event => {
        if (event.layerY <= 120) {
            slider.value.style.setProperty('top', `${event.layerY}px`)

        } else if (event.layerY > 120) {
            slider.value.style.setProperty('top', '120px')
        }
    },
    mousedown: event => {
        data.isDrawing = true;
        data.y = event.clientY;
        data.b = slider.value.offsetTop;
        slider.value.focus();
    },
    mousemove: event => {
        if (data.isDrawing) {

            console.log(event.layerY);
            if (event.layerY <= 120) {
                slider.value.style.setProperty('margin-top', `${event.layerY}px`)
            } else if (event.layerY > 120) {
                slider.value.style.setProperty('margin-top', '120px')
            }
        }

    },
    focus:() => {
        document.onkeydown = event => {
            let a = slider.value.offsetTop;
            switch (event.keyCode) {
                case 38:
                    a -= 1.2
                    break;
                case 40:
                    a += 1.2;
                    break;
                default:
                    break;
            }
            if(a > 120) a = 120;
            if(a < 0 ) a = 0;
            slider.value.style.setProperty('top', `${a}px`)
        }
    }
});

onMounted(() => {
    document.onmouseup = () => {
        data.isDrawing = false;
    }

    document.onmousemove = (event) => {
        if (data.isDrawing) {
            let a = ((event.clientY - data.y) * 1.2) + data.b
            if (a < 0) {
                a = 0
            }
            if (a > 120) {
                a = 120
            }
            slider.value.style.setProperty('top', `${a}px`)

        }
    }
})


</script>

<template>
    <div class="container">
        <div>
            <input type="text" v-model="data.top">
        </div>
        <div style="position: relative;" @mousedown="data.click" >
            <div class="slider" ref="slider" @mousedown.stop="data.mousedown" @focus="data.focus" tabindex="0"></div>
        </div>
        <div>
            <input type="text">
        </div>
    </div>
</template>

<style scoped>
.container {
    width: 100px;
    height: 270px;
    position: relative;
    /* background: url(@/assets/output_1.png); */
    display: grid;
    grid-template-rows: 70px 160px 40px;
}

.container::before {
    content: '';
    display: block;
    width: 3px;
    height: 160px;
    background: black;
    position: absolute;
    top: 70px;
    left: calc(100px / 2 - 3px / 2);
}

.container>div:nth-child(odd) {
    display: flex;
    align-items: center;
    justify-content: center;
}

.slider {
    --y: 100px;
    width: 30px;
    height: 40px;
    position: absolute;
    left: calc(50% - 15px);
    top: calc(var(--y) * 1.2);
    background: white;
    border-radius: 5px;
    /* background: url(@/assets/Sli.png); */
    user-select: none;
    /* transition: 50ms; */
    
}

[type='text'] {
    width: 55px;
    background: transparent;
    border: 0;
}
</style>
