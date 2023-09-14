<template>
    <div class="form-container">
        <base-card>
            <form @submit.prevent="submitData">
                <div>
                    <label for="user-name">Name</label>
                    <input
                        type="text"
                        name="user-name"
                        id="user-name"
                        ref="userInput" />
                </div>
                <div>
                    <label for="task">Task</label>
                    <input
                        type="text"
                        name="task"
                        id="task"
                        ref="taskInput" />
                </div>
                <div>
                    <label for="user-url">Avatar URL</label>
                    <input
                        type="url"
                        name="user-url"
                        id="user-url"
                        ref="linkInput" />
                </div>
                <div>
                    <label for="phone">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        id="phone"
                        ref="phoneInput" />
                </div>
                <div>
                    <label for="user-email">Email</label>
                    <input
                        type="email"
                        name="user-email"
                        id="user-email"
                        ref="emailInput" />
                </div>
                <div>
                    <label for="description">Description</label>
                    <textarea
                        name="description"
                        id="description"
                        rows="3"
                        ref="descriptionInput">
                    </textarea>
                </div>
                <div>
                    <base-button>Add Task</base-button>
                </div>
            </form>
        </base-card>
    </div>
</template>

<script>
    export default {
        inject: ["addNewTask"],

        data() {
            return {};
        },

        methods: {
            submitData() {
                let enteredUserName = this.$refs.userInput.value;
                let enteredTaskTitle = this.$refs.taskInput.value;
                let enteredLink = this.$refs.linkInput.value;
                let enteredPhone = this.$refs.phoneInput.value;
                let enteredEmail = this.$refs.emailInput.value;
                let enteredDescription = this.$refs.descriptionInput.value;

                this.addNewTask(
                    enteredTaskTitle,
                    enteredUserName,
                    enteredDescription,
                    enteredLink,
                    enteredPhone,
                    enteredEmail
                );

                enteredUserName = ''
                enteredTaskTitle = ''
                enteredLink = ''
                enteredPhone = ''
                enteredEmail = ''
                enteredDescription = ''
            },
        },
    };
</script>

<style scoped>
    .form-container {
        width: 20%;
        min-height: 50vh;

        margin: 0 auto;
    }

    div {
        display: flex;
        padding: 10px;
        justify-content: space-between;
    }

    label {
        padding-bottom: 7px;
        letter-spacing: 2px;
        font-size: 1.2em;
        margin-right: 20px;
    }

    input {
        font: inherit;
        padding: 0.15rem;
    }
</style>