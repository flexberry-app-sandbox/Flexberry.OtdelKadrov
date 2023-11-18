import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as ПодразделенияMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-подразделения';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(ПодразделенияMixin, Validations, {
});

export default Model;
