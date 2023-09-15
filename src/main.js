import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import BaseButton from './components/UI/BaseButton.vue'
import BaseErrorMessageVue from "./components/UI/BaseErrorMessage.vue";

const app = createApp(App);

app.component("base-card", BaseCard);
app.component('base-button', BaseButton);
app.component('base-error-message', BaseErrorMessageVue)

app.mount("#app");
