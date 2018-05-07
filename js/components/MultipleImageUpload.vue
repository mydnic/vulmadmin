<template>
    <div class="field">
        <input type="hidden" :value="JSON.stringify(selectedFiles)" :name="name">
        <label class="label">
            <slot></slot>
        </label>
        <div class="control multiple-image-upload" @drop="dropFiles" @dragover="dragOverHandler" @dragleave="showMessage = false">
            <div class="columns is-vcentered">
                <div class="column is-4">
                    <div class="input">
                        <span>
                            <font-awesome-icon icon="upload" size="3x" />
                        </span>
                        <input type="file" @change="addNewFiles" multiple>
                    </div>
                </div>
                <div class="column">
                    <ul>
                        <li v-for="file in selectedFiles">
                            <button type="button" class="button is-danger is-small" @click="removeFile(file)">
                                <font-awesome-icon icon="times" />
                            </button>
                            <span>
                                <font-awesome-icon icon="spinner" spin v-if="!file.filePath" />
                                <font-awesome-icon icon="check" v-if="file.filePath" class="has-text-success" />
                            </span>
                            {{ file.name }}
                        </li>
                    </ul>
                </div>
                <div v-if="showMessage" class="hover-message">
                    Drop you files here !
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import FontAwesomeIcon from '@fortawesome/vue-fontawesome'

export default {
    props: ['name', 'files'],
    mounted() {
        if (this.files) {
            this.selectedFiles = JSON.parse(this.files);
        }
    },
    data() {
        return {
            selectedFiles: [],
            showMessage: false,
        }
    },
    methods: {
        addNewFiles(event) {
            var input = event.target;
            if (input.files) {
                for (var i = input.files.length - 1; i >= 0; i--) {
                    this.addFile(input.files[i]);
                }
            }
        },
        addFile(file) {
            this.selectedFiles.push(file);
            this.uploadFile(file);
        },
        removeFile(file) {
            let index = this.selectedFiles.indexOf(file);
            this.selectedFiles.splice(index, 1);
        },
        uploadFile(file) {
            let index = this.selectedFiles.indexOf(file);
            let formData = new FormData();
            formData.append('file', file, file.name);

            axios.post('/api/file/upload', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            })
            .then(filePath => {
                this.$set(this.selectedFiles, index, {
                    name: file.name,
                    filePath: filePath.data
                });
            })
            .catch(error => {
                console.log(error);
            });
        },
        dropFiles(ev) {
            ev.preventDefault();

            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to access the file(s)
                for (var i = 0; i < ev.dataTransfer.items.length; i++) {
                    // If dropped items aren't files, reject them
                    if (ev.dataTransfer.items[i].kind === 'file') {
                        this.addFile(ev.dataTransfer.items[i].getAsFile());
                    }
                }
            } else {
                // Use DataTransfer interface to access the file(s)
                for (var i = 0; i < ev.dataTransfer.files.length; i++) {
                    this.addFile(ev.dataTransfer.files[i]);
                }
            }

            // Pass event to removeDragData for cleanup
            this.removeDragData(ev)
        },
        dragOverHandler(ev) {
            ev.preventDefault();
            this.showMessage = true;
        },
        removeDragData(ev) {
            this.showMessage = false;
            if (ev.dataTransfer.items) {
                // Use DataTransferItemList interface to remove the drag data
                ev.dataTransfer.items.clear();
            } else {
                // Use DataTransfer interface to remove the drag data
                ev.dataTransfer.clearData();
            }
        }
    },
    components: {
        FontAwesomeIcon
    }
}
</script>
