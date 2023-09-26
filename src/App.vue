<template>
  <the-header title="ToDo App"></the-header>
  <the-nav></the-nav>
</template>

<script>
import TheHeader from './components/layouts/TheHeader';
import TheNav from './components/tasks/TheNav'
export default {
  components: {
    TheHeader,
    TheNav,
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Jost&display=swap");

* {
  list-style: none;
}

:root {
    --color-bg-blue: #020d35;
    --color-dark-blue: #353b57;
    --color-light-blue: #85acfa;
    --color-green: #9be1b3;
    --color-light: #fce6e9;
    --color-red: #d95151;
    --color-white: #fff;
    --color-black: #000;
    --color-shadow: rgba(0, 0, 0, 0.26);

    --transition: all 0.3s ease;
}

html {
    font-family: "Jost", sans-serif;
}

::-webkit-scrollbar {
    display: none;
}

body {
    margin: 0;
}

</style>