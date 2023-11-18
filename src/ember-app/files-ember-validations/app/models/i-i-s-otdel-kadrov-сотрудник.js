import {
  defineNamespace,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-сотрудник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(СотрудникMixin, {
});

defineNamespace(Model);

export default Model;
