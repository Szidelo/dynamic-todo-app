<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>

div {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: auto;
    padding: 20px;
}

@media (max-width: 590px) {
        div {
            flex-direction: column;
            gap: 10px;
        }
    }

</style>