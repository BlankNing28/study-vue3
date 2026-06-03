<template>
    <el-tabs v-model="activeName" class="demo-tabs" @tab-click="handleClick">
        <el-tab-pane :label="item.name" :name="item.path" v-for="item in routerChild"></el-tab-pane>
    </el-tabs>
    <RouterView></RouterView>
</template>

<script setup lang="ts">
import { ref,  } from 'vue'
import { useRouter, RouterView } from "vue-router";

import type { TabsPaneContext } from 'element-plus'
import { routerChild } from "../router/children";

const router = useRouter()

const activeName = ref(routerChild[0]?.path)

const handleClick = (tab: TabsPaneContext, event: Event) => {
     const data = routerChild.find((item) => item.path === tab.props.name)
    if(!data) return

   // query用path， params需要用name
    if (data.type === 'params') {
        router.push({
            name: data.key,
            params:  { name: 'zhangsan', age: 18 }
        })
    } else {
        router.push({
            path: '/routerDemo/' + data.path,
            query: { name: 'zhangsan', age: 18 }
        })
    }
}
</script>