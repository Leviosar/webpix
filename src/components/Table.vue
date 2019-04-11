<template>
    <div id="table">
        <toolbox :color="colors"></toolbox>
        <chrome-picker :value="colors" @input="updateValue($event)"></chrome-picker>
        <span class="line" v-for="y in totalY" :key="y">
            <span v-on:mouseover="paint($event)" class="block" v-for="x in totalX" :key="x" style="width: 20px; height: 20px"></span>
        </span>
    </div>
</template>

<script>
export default {
    name: 'table',
    data (color) {
        return {
            colors: "#003B6F",
            unit: 10,
            totalX: parseInt(window.innerWidth / 10),
            totalY: parseInt(window.innerHeight / 10)
        }
    },
    methods: {
        paint: (ev)=>{
            if (ev.buttons == 1) {
                ev.target.style.background = data.mainColor
            }
        },
        updateValue :(ev)=>{
            data.mainColor = 'rgba(' + ev.rgba.r + ',' + ev.rgba.g + ',' + ev.rgba.b + ',' + ev.rgba.a + ')'
        }
    },
    mounted: ()=>{
        this.a.data('#003B6F')
    }
}

const data = {
    mainColor: '#0036bf'
}
</script>

<style lang="scss">
    span.block{
        border: 1px solid #ccc;
        display: block;
        flex: none;
    }

    span.block:hover{
        border: 1px dashed #050490;
    }

    div#table{
        height: 100vh;
        width: 100vw;
        display: flex;
        align-items: center;
        justify-content: flex-start;
        flex-direction: column;
    }

    span.line{
        display: flex;
        height: 20px;
        width: 100%;
    }

    *{
        margin: 0;
        box-sizing: border-box;
    }

    div#table > .vc-chrome{
        position: absolute;
        top: 0;
        right: 0;
        display: none;
        border-radius: 1000px;
    }

    .vc-chrome > .vc-chrome-saturation-wrap{
        // border-radius: 300px 300px 0 0;
    }

    .vc-chrome > .vc-chrome-body{
        background: #333333;
        // border-radius: 0px 0px 300px 300px;
    }

    div.tools{
        position: absolute;
        top: 20px;
        left: 20px;
    }
</style>
