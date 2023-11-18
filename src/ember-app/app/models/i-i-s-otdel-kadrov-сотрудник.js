import { buildValidations } from 'ember-cp-validations';
import EmberFlexberryDataModel from 'ember-flexberry-data/models/model';

import {
  ValidationRules,
  Model as СотрудникMixin
} from '../mixins/regenerated/models/i-i-s-otdel-kadrov-сотрудник';

const Validations = buildValidations(ValidationRules, {
  dependentKeys: ['model.i18n.locale'],
});

let Model = EmberFlexberryDataModel.extend(СотрудникMixin, Validations, {
});

export default Model;
