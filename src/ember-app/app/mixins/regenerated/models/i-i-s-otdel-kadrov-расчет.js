import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDсотрдника: DS.attr('string'),
  начальник: DS.belongsTo('i-i-s-otdel-kadrov-начальник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-расчет.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начальник: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-расчет.validations.начальник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
