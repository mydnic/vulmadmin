require('./bootstrap');
require('./nav');

import { ServerTable, ClientTable, Event } from 'vue-tables-2';
Vue.use(ClientTable, {}, false, 'bulma');

Vue.component('image-input', require('./components/ImageInput.vue'));
Vue.component('multiple-image-upload', require('./components/MultipleImageUpload.vue'));
Vue.component('modal', require('./components/Modal.vue'));
Vue.component('notification', require('./components/Notification.vue'));
Vue.component('delete-button', require('./components/DeleteButton.vue'));
