import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDдолжности: DS.attr('string'),
  iDПодразделения: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-otdel-kadrov-должности', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-otdel-kadrov-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDдолжности: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-сотрудник.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDПодразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-сотрудник.validations.iDПодразделения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-сотрудник.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-сотрудник.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
