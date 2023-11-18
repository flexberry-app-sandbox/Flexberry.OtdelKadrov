import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';

export let Model = Mixin.create({
  iDсотрдника: DS.attr('string'),
  сотрудник: DS.belongsTo('i-i-s-otdel-kadrov-сотрудник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-начальник.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  сотрудник: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-начальник.validations.сотрудник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};
