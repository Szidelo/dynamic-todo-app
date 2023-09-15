<template>
    <li>
        <base-card>
            <div class="img-wrapper">
                <img
                    :src="userAvatar"
                    alt="" />
            </div>
            <div class="card-content">
                <div>
                    <h2>
                        {{ taskTitle }} {{ isUrgent ? "(Urgent Task)" : "" }}
                    </h2>
                    <strong>{{ userName }}</strong>
                    <p>
                        {{ taskDescription }}
                    </p>
                </div>

                <base-card v-if="isVisible">
                    <ul>
                        <li>
                            <strong>Phone: </strong><span>{{ userPhone }}</span>
                        </li>
                        <li>
                            <strong>Email: </strong><span>{{ userEmail }}</span>
                        </li>
                    </ul>
                </base-card>

                <div class="btn-container">
                    <base-button @click="toggleVisibility"
                        >{{ isVisible ? "Hide" : "Show" }} Contact</base-button
                    >
                    <base-button @click="toggleUrgency"
                        >{{ isUrgent ? "Unmark" : "Mark" }} As
                        Urgent</base-button
                    >
                    <base-button
                        @click="removeTask"
                        mode="red-btn"
                        >Remove</base-button
                    >
                </div>
            </div>
        </base-card>
    </li>
</template>

<script>
    export default {
        props: {
            taskId: {
                type: String,
                required: true,
            },
            taskTitle: {
                type: String,
                required: true,
            },
            userName: {
                type: String,
                required: true,
            },
            userAvatar: {
                type: String,
                required: true,
            },
            taskDescription: {
                type: String,
                required: true,
            },
            userPhone: {
                type: String,
                required: true,
            },
            userEmail: {
                type: String,
                required: true,
            },
            isUrgent: {
                type: Boolean,
                required: false,
                default: false,
            },
        },

        emits: ["toggle-urgency", "remove-task"],

        data() {
            return {
                isVisible: false,
            };
        },

        methods: {
            toggleVisibility() {
                this.isVisible = !this.isVisible;
                console.log(this.isVisible);
            },

            toggleUrgency() {
                this.$emit("toggle-urgency", this.taskId);
            },

            removeTask() {
                this.$emit("remove-task", this.taskId);
            },
        },
    };
</script>

<style scoped>
    .img-wrapper {
        height: 120px;
        width: 120px;
        min-width: 120px;
        border-radius: 50%;
        background-size: cover;
        overflow: hidden;
        margin: 30px 0;
    }

    img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transition: all 0.3s ease;
    }

    img:hover {
        transform: scale(1.1);
    }

    h2 {
        color: #353b57;
        padding: 10px;
        width: 98%;
        border-bottom: 1px solid #353b57;
        margin-top: 10px;
    }

    .card-content {
        width: 100%;
    }

    .btn-container {
        display: flex;
        justify-content: flex-start;
        width: max-content;
        gap: 10px;
    }

    @media (max-width: 590px) {
        .img-wrapper {
            height: 250px;
            width: 100%;
            border-radius: 10px;
            background-size: cover;
            overflow: hidden;
            margin: 0;
        }

        .btn-container {
            width: 100%;
        }
    }

    @media (max-width: 390px) {
        .btn-container {
            flex-direction: column;
        }
    }
</style>
