<script>
    export default {
        data(){
            return {
                objstyles: {
                    class: 'title',
                    id: 'titleId',
                }
            }
        }
    }
</script>
<template>
    <div :class="'vBind'">绑定class</div>
    <div v-bind="objstyles">对象绑定</div>
</template>

<style>
    .vBind {
        color: red;
    }
    #titleId{
        color: palegoldenrod;
    }
</style>