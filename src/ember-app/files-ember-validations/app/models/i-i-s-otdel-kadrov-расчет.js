import {
  defineNamespace,
  Model as РасчетMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-расчет';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(РасчетMixin, {
});

defineNamespace(Model);

export default Model;
