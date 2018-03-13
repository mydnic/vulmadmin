<template>
    <div class="flash notification" :class="[
        levelClass, isOpen ? isVisibleClass : ''
    ]">
        <button class="delete" @click="isOpen = false"></button>
        <slot></slot>
    </div>
</template>

<script>
export default {
    data() {
        return {
            isOpen: false,
            isVisibleClass: 'is-visible',
            closeAfter: 10000 // 10 seconds
        }
    },
    props: ['level'],
    created() {
        let self = this;

        setTimeout(function() {
            self.isOpen = true;
        }, 100);

        setTimeout(function() {
            self.isOpen = false;
        }, self.closeAfter);
    },
    computed: {
        levelClass() {
            return 'is-' + this.level;
        }
    },
}
</script>
