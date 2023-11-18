import {
  defineNamespace,
  Model as ГрафикMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-график';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ГрафикMixin, {
});

defineNamespace(Model);

export default Model;
