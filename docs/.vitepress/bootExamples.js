import { buildWc } from './ex-base.js';
import Alert from '../components/alert/Example.vue';
import Box from '../components/box/Example.vue';
import Button from '../components/buttons/Example.vue';
import TextArea from '../components/textarea/Example.vue';
import Select from '../components/select/Example.vue';
import TextField from '../components/textfield/Example.vue';

buildWc('alert-example', Alert);
buildWc('box-example', Box);
buildWc('button-example', Button);
buildWc('select-example', Select);
buildWc('textarea-example', TextArea);
buildWc('textfield-example', TextField);
