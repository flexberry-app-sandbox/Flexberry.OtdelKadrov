import {
  defineNamespace,
  Model as ДолжностиMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-должности';

import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

let Model = EmberFlexberryDataModel.extend(ДолжностиMixin, {
});

defineNamespace(Model);

export default Model;
