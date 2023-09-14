<template>
    <div>
        <slot></slot>
    </div>
</template>

<style scoped>

/* div {
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  padding: 1rem;
  margin: 2rem auto;
  max-width: 40rem;
} */

div {
    display: flex;
    margin-bottom: 20px;
    gap: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
    width: auto;
    padding: 20px;
}

</style>