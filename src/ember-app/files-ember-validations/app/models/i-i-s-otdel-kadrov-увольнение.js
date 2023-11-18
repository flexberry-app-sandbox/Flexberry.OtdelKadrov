import {
  defineNamespace,
  Model as УвольнениеMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-увольнение';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(УвольнениеMixin, {
});

defineNamespace(Model);

export default Model;
