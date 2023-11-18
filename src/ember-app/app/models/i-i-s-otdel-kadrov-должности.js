import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ДолжностиMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-должности';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ДолжностиMixin, Validations, {
});

export default Model;
