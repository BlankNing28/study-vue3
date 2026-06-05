<template>
    <p>shallowRef 和 shallowReactive是浅层响应式</p>
    <p>只追踪第一层属性的变化，深层嵌套的属性不会被转换为响应式</p>
    <p>当深层属性发生变化时，不会触发组件的重新渲染。</p>
</template>