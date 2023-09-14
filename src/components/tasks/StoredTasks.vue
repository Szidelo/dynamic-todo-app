<template>
    <ul>
        <task-item
            v-for="task in listOfTasks"
            :key="task.id"
            :id="task.id"
            :task-id="task.id"
            :task-title="task.title"
            :user-name="task.user"
            :is-urgent="task.isUrgent"
            :user-avatar="task.avatarUrl"
            :task-description="task.info"
            :user-phone="task.phone"
            :user-email="task.mail"
            @toggle-urgency="toggleUrgency(task.id)"
            @remove-task="removeTask(task.id)"></task-item>
    </ul>
</template>

<script>
    import TaskItem from "./TaskItem.vue";
    export default {
        components: {
            TaskItem,
        },

        inject: ['listOfTasks'],

        data() {
            return {

            };
        },

        methods: {
            toggleUrgency(taskId) {
                const currentTask = this.listOfTasks.find(task => task.id === taskId);
                currentTask.isUrgent = !currentTask.isUrgent
            },

            removeTask(taskId) {
                const index = this.listOfTasks.findIndex(task => task.id === taskId)
                this.listOfTasks.splice(index, 1)
            }
        }
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        width: 70%;
    }
</style>
