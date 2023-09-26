<template>
    <base-confirmation
        v-if="isModalVisible"
        @confirm="confirmRemove"
        @cancel="cancelRemove">
    </base-confirmation>

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
            @remove-task="removeTask(task.id)">
        </task-item>
    </ul>
</template>

<script>
    import TaskItem from "./TaskItem.vue";
    export default {
        components: {
            TaskItem,
        },

        inject: ["listOfTasks"],

        data() {
            return {
                isModalVisible: false,
                taskIdToRemove: "",
            };
        },

        methods: {
            toggleUrgency(taskId) {
                const currentTask = this.listOfTasks.find(
                    (task) => task.id === taskId
                );
                currentTask.isUrgent = !currentTask.isUrgent;
            },

            cancelRemove() {
                this.isModalVisible = false;
            },

            confirmRemove() {
                const index = this.listOfTasks.findIndex(
                    (task) => task.id === this.taskIdToRemove
                );

                if (index !== -1) {
                    this.listOfTasks.splice(index, 1);
                }

                this.isModalVisible = false;
            },

            removeTask(taskId) {
                this.isModalVisible = true;
                this.taskIdToRemove = taskId;
                console.log(this.taskIdToRemove);
            },
        },
    };
</script>

<style scoped>
    ul {
        list-style: none;
        margin: 0 auto;
        padding: 0;
        width: 70%;
        max-width: 1200px;
    }

    @media (max-width: 876px) {
        ul {
            width: 100%;
        }
    }
</style>
