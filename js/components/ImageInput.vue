<template>
    <div class="image-input" :style="{width:componentWidth}">
        <input type="file" @change="updatePreview" :name="name">
        <img :src="previewImage">
    </div>
</template>

<script>
export default {
    props: ['imageSrc', 'name', 'width'],
    data() {
        return {
            previewImage: undefined,
            componentWidth: '100%'
        }
    },
    mounted() {
        this.previewImage = this.imageSrc;
        this.componentWidth = this.width;
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
