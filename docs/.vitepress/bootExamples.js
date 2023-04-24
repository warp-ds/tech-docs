import { buildWc } from './ex-base.js';
import Alert from '../alert/Example.vue';
import Button from '../buttons/Example.vue';
import TextArea from '../textarea/Example.vue';
import TextField from '../textfield/Example.vue';
import Select from '../select/Example.vue';

buildWc('alert-example', Alert);
buildWc('button-example', Button);
buildWc('textarea-example', TextArea);
buildWc('textfield-example', TextField);
buildWc('select-example', Select);
