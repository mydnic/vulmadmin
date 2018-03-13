<template>
    <div class="modal is-active">
        <div class="modal-background" @click="$emit('close')"></div>
        <slot></slot>
        <button class="modal-close" @click="$emit('close')"></button>
    </div>
</template>

<script>
export default {
    methods: {
        open: function (event) {
            if (event.id === this.id) {
                this.isOpen = true;
            }
        },
        close: function() {
            this.isOpen = false;
        },
    }
}
</script>
