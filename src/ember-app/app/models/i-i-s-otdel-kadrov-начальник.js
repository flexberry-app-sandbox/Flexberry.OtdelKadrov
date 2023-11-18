import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as НачальникMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-начальник';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(НачальникMixin, Validations, {
});

export default Model;
