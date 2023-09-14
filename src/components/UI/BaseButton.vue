<template>
    <button :class="mode">
        <slot></slot>
    </button>
</template>

<script>
export default {
    props: ['mode']
}
</script>

<style scoped>
button {
    padding: 12px 24px;
    border-radius: 5px;
    cursor: pointer;
    background-color: #020d35;
    border: 1px solid transparent;
    color: #fff;
    margin: 0 auto;
    transition: all 0.3s ease;
}

button:hover {
    background-color: #353b57;
}

.red-btn {
    background-color: #d95151;
}

.light-btn {
    background-color: transparent;
    border-color: #020d35;
    color: #020d35;
}

.light-btn:hover {
    color: #fff
}
</style>