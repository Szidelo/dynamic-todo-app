<template>
    <base-card>
        <div>
            <base-button
                @click="setSelectedTab('add-task')"
                :mode="setAddTaskBtnClass"
                >Add Tasks</base-button
            >
            <base-button
                @click="setSelectedTab('stored-tasks')"
                :mode="setStoredTasksBtnClass"
                >Task List</base-button
            >
        </div>
    </base-card>
    <keep-alive>
        <component :is="selectedTab"></component>
    </keep-alive>
</template>

<script>
    import AddTask from "./AddTask.vue";
    import StoredTasks from "./StoredTasks.vue";
    export default {
        components: {
            AddTask,
            StoredTasks,
        },

        computed: {
            setAddTaskBtnClass() {
                return this.selectedTab === "add-task" ? null : "light-btn";
            },

            setStoredTasksBtnClass() {
                return this.selectedTab === "stored-tasks" ? null : "light-btn";
            },
        },

        provide() {
            return{
                listOfTasks: this.listOfTasks,
                addNewTask: this.addNewTask,
            }
            
        },

        data() {
            return {
                selectedTab: "stored-tasks",
                listOfTasks: [
                    {
                        id: "1",
                        title: "Task Title",
                        user: "Claudiu",
                        info: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo culpa minima quas quibusdam voluptas voluptate.",
                        isUrgent: true,
                        avatarUrl:
                            "https://images.pexels.com/photos/511313/pexels-photo-511313.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        phone: "+40758870906",
                        mail: "mail@gmail.com",
                    },
                    {
                        id: "2",
                        title: "Other Task Title",
                        user: "Eve",
                        info: "Finish two abstract paintings",
                        isUrgent: false,
                        avatarUrl:
                            "https://images.pexels.com/photos/3727219/pexels-photo-3727219.jpeg?auto=compress&cs=tinysrgb&w=1600",
                        phone: "+40758222111",
                        mail: "eveline@contact.com",
                    },
                ],
            };
        },

        methods: {
            setSelectedTab(tab) {
                this.selectedTab = tab;
            },

            addNewTask(title, user, info, avatarUrl, phone, mail) {
                const newTask = {
                    id: new Date().toISOString(),
                    title,
                    user,
                    info,
                    isUrgent: false,
                    avatarUrl,
                    phone,
                    mail
                }

                this.listOfTasks.unshift(newTask);

                this.selectedTab = 'stored-tasks'

            }
        },
    };
</script>

<style scoped>
    div {
        display: flex;
        justify-content: center;
        gap: 20px;
    }
</style>
