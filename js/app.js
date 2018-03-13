window.Vue = require('vue');

Vue.component('image-input', require('./components/ImageInput.vue'));
Vue.component('modal', require('./components/Modal.vue'));

const app = new Vue({
    el: '#vulmadmin'
});
