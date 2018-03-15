<template>
    <div class="image-input">
        <input type="file" @change="updatePreview" :name="name">
        <img :src="previewImage" :style="{width:width}">
    </div>
</template>

<script>
export default {
    props: ['imageSrc', 'name', 'width'],
    data() {
        return {
            previewImage: undefined,
        }
    },
    mounted() {
        this.previewImage = this.imageSrc;
    },
    methods: {
        updatePreview(event) {
            var input = event.target;
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = (e) => {
                    this.previewImage = e.target.result;
                }

                reader.readAsDataURL(input.files[0]);
            }
        }
    }
}
</script>
