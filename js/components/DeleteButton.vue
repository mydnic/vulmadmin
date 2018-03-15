<template>
    <div>
        <button class="button is-danger"
            type="submit"
            @click="openConfirmationModal">
            <span class="icon"><i class="fas fa-ban"></i></span>
            <span>Delete</span>
        </button>
        <modal v-if="isModalOpen" @close="isModalOpen = false">
            <div class="modal-card">
                <header class="modal-card-head">
                    <p class="modal-card-title">Please confirm your action</p>
                    <button class="delete" aria-label="close"></button>
                </header>
                <section class="modal-card-body">
                    Are you sure you want to delete this ?
                </section>
                <footer class="modal-card-foot">
                    <button class="button is-success" type="submit">Yes, I Confirm</button>
                    <button class="button">Cancel</button>
                </footer>
            </div>
        </modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                isModalOpen : false,
            }
        },
        methods: {
            openConfirmationModal(el) {
                el.preventDefault();
                this.isModalOpen = true;
            }
        }
    }
</script>
