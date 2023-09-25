<template>
    <div @click="$emit('cancel')"></div>
    <dialog open>
        <header>
            <slot name="header">
                <h2>{{ title }}</h2>
            </slot>
        </header>

        <section>
            <slot></slot>
        </section>

        <section class="action">
            <slot name="confirm">
                <base-button @click="$emit('confirm')" mode="red-btn">Confirm</base-button>
                <base-button @click="$emit('cancel')">Cancel</base-button>
            </slot>
        </section>
    </dialog>
</template>

<script>
    export default {
        emits: ["cancel", 'confirm'],
        props: {
            title: {
                type: String,
                required: false,
                default: "Are You Sure?",
            },
        },
    };
</script>

<style scoped>
    div {
        background-color: rgba(0, 0, 0, 0.26);
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100vh;
    }

    dialog {
        position: fixed;
        top: 30%;
        left: 0;
        width: 20%;
        min-width: 380px;
        border-radius: 10px;
        border: 2px solid #020d35;
        box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
        padding: 0;
    }

    header {
        background-color: #020d35;
        color: #fff;
        height: 40px;
        padding: 20px;
        display: flex;
        align-items: center;
    }

    h2 {
        margin: 0;
    }

    section {
        padding: 20px;
    }

    .action {
        display: flex;
        justify-content: flex-start;
        width: min-content;
        gap: 10px;
    }

    @media (max-width: 590px) {
        dialog {
            width: 95%;
            min-width: auto;
        }

        .btn-close button {
            margin: 0;
            width: auto;
        }
    }
</style>
