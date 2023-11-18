import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDдолжности: DS.attr('string'),
  iDподразделения: DS.attr('string'),
  iDсотрдника: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-otdel-kadrov-должности', { inverse: null, async: false }),
  начальник: DS.belongsTo('i-i-s-otdel-kadrov-начальник', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-otdel-kadrov-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDдолжности: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.iDдолжности.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDподразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.iDподразделения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  начальник: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.начальник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-прием.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
