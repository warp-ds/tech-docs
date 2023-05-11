import { buildWc } from './ex-base.js';

import Alert from '../components/alert/Example.vue';
import Box from '../components/box/Example.vue';
import Breadcrumbs from '../components/breadcrumbs/Example.vue';
import Expandable from '../components/expandable/Example.vue';
import Button from '../components/buttons/Example.vue';
import Select from '../components/select/Example.vue';
import Slider from '../components/slider/Example.vue';
import Steps from '../components/steps/Example.vue';
import TextArea from '../components/textarea/Example.vue';
import TextField from '../components/textfield/Example.vue';

buildWc('alert-example', Alert);
buildWc('box-example', Box);
buildWc('breadcrumbs-example', Breadcrumbs);
buildWc('button-example', Button);
buildWc('expandable-example', Expandable);
buildWc('select-example', Select);
buildWc('slider-example', Slider);
buildWc('steps-example', Steps);
buildWc('textarea-example', TextArea);
buildWc('textfield-example', TextField);
