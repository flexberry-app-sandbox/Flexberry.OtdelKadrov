import {
  defineNamespace,
  Model as ПодразделенияMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-подразделения';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПодразделенияMixin, {
});

defineNamespace(Model);

export default Model;
