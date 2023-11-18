import {
  defineNamespace,
  Model as НачальникMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-начальник';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(НачальникMixin, {
});

defineNamespace(Model);

export default Model;
