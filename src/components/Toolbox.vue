<template>
    <div class="tools" v-on:click="open($event)">
        <button v-on:click="tool.callback()" v-for="tool in tools" class="tool">
            <i :class="tool.icon"></i>
        </button>
    </div>
</template>

<script>
export default {
    name: 'toolbox',
    props: ['color'],
    data: ()=>{
        return {
            tools: [
                {id:1, tool: 'pen', size: 1, icon: "fas fa-pencil-ruler", callback: this.a.methods.paint},
                {id:2, tool: 'color', size: 1, icon: "fas fa-palette", callback: this.a.methods.picker},
                {id:3, tool: 'fill', size: 1, icon: "fas fa-fill", callback: this.a.methods.fill},
                {id:4, tool: 'close', size: 1, icon: "fas fa-times", callback: this.a.methods.close},
            ],
            width: 80,
            // mainColor: color
        }
    },
    methods:{
        open: (ev)=>{
            let toolbar = document.querySelector('div.tools')
            if (toolbar.offsetWidth == 80) {
                let tools = toolbar.children.length
                toolbar.style.width = 80 * tools + 'px'
            }
        },
        close: ()=>{
            let toolbar = document.querySelector('div.tools')
            console.log(toolbar)
            toolbar.style.width = '80px'
        },
        paint: ()=>{},
        picker: ()=>{
            let picker = document.querySelector('.vc-chrome')
            if (picker.style.display != 'block') {
                picker.style.display = 'block'
            }else{
                picker.style.display = 'none'
            }
        }
    }
}
</script>

<style>
    div.tools{
        width: 80px;
        height: 80px;
        border-radius: 4000px;
        background: #333333;
        display: flex;
        overflow-x: hidden;
        transition: .25s ease;
    }

    div.tools > button{
        height: 100%;
        width: 80px;
        border: none;
        flex:none;
        border-radius: 100%;
        background: transparent;
        color: white;
        font-size: 2.5em;
    }
</style>
