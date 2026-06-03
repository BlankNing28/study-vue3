<template>
    pinia
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">

        <el-tab-pane label="简单计数" name="first"><PiniaDemo /> </el-tab-pane>
        <el-tab-pane label="Config" name="second">Config</el-tab-pane>
    </el-tabs>
</template>

<script setup lang="ts">
import PiniaDemo from '@/page/piniaDemo.vue'
import { ref, } from 'vue'

import type { TabsPaneContext } from 'element-plus'
const activeName = ref('first')

const handleClick = (tab: TabsPaneContext, event: Event) => {

}
</script>