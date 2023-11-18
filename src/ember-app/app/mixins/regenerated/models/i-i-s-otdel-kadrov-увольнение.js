import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDподразделения: DS.attr('string'),
  iDсотрдника: DS.attr('string'),
  должности: DS.belongsTo('i-i-s-otdel-kadrov-должности', { inverse: null, async: false }),
  начальник: DS.belongsTo('i-i-s-otdel-kadrov-начальник', { inverse: null, async: false }),
  подразделения: DS.belongsTo('i-i-s-otdel-kadrov-подразделения', { inverse: null, async: false })
});

export let ValidationRules = {
  iDподразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-увольнение.validations.iDподразделения.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-увольнение.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  должности: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-увольнение.validations.должности.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  начальник: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-увольнение.validations.начальник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
  подразделения: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-увольнение.validations.подразделения.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
