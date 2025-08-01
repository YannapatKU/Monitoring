import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import 'primeicons/primeicons.css'


import Button from "primevue/button"
import Drawer from 'primevue/drawer';
import Card from 'primevue/card';
import { Form } from '@primevue/forms';
import Toast from 'primevue/toast';
import ToastService from 'primevue/toastservice';
import InputText from 'primevue/inputtext';
import IconField from 'primevue/iconfield';
import InputIcon from 'primevue/inputicon';
import Message from 'primevue/message';
import Avatar from 'primevue/avatar'
import DataTable from 'primevue/datatable';
import Column from 'primevue/column';
import ColumnGroup from 'primevue/columngroup';   
import Row from 'primevue/row';
import Chart from 'primevue/chart';
import Divider from 'primevue/divider';
import AutoComplete from 'primevue/autocomplete';
import Chip from 'primevue/chip';




const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(PrimeVue, {
    theme: {
        preset: Aura
    }
})
app.use(ToastService)


app.component('Button', Button);
app.component('Drawer', Drawer);
app.component('Card', Card);
app.component('Form', Form);
app.component('Toast', Toast);
app.component('InputText', InputText);
app.component('Message', Message);
app.component('DataTable', DataTable);
app.component('Column', Column);
app.component('ColumnGroup', ColumnGroup);
app.component('Row', Row);
app.component('Avatar', Avatar);
app.component('IconField', IconField);
app.component('InputIcon', InputIcon);
app.component('Chart', Chart);
app.component('Divider', Divider);
app.component('AutoComplete', AutoComplete);
app.component('Chip', Chip);

app.mount('#app')
