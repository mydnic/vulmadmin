window.Vue = require('vue');

Vue.component('image-input', require('./components/ImageInput.vue'));
Vue.component('modal', require('./components/Modal.vue'));
Vue.component('notification', require('./components/Notification.vue'));

const app = new Vue({
    el: '#vulmadmin'
});
