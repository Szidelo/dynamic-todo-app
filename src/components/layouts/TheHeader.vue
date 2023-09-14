<template>
    <header>
        <h1>{{ title }}</h1>
    </header>
</template>

<script>
export default {
    props: ['title']
}
</script>

<style scoped>

header {
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    margin: 0 auto 80px;
    padding: 20px;
    background-color: #020d35;
    color: #fff;
    text-align: center;
    width: 100%;
}

</style>