import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as УвольнениеMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-увольнение';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(УвольнениеMixin, Validations, {
});

export default Model;
