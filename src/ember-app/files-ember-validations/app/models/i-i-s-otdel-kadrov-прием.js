import {
  defineNamespace,
  Model as ПриемMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-прием';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ПриемMixin, {
});

defineNamespace(Model);

export default Model;
