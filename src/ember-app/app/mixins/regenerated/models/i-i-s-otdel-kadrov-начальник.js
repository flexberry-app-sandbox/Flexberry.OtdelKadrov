import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('НачальникE', 'i-i-s-otdel-kadrov-начальник', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    сотрудник: belongsTo('i-i-s-otdel-kadrov-сотрудник', 'Сотрудник', {
      iDдолжности: attr('I dдолжности', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'iDдолжности' })
  });

  modelClass.defineProjection('НачальникL', 'i-i-s-otdel-kadrov-начальник', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    сотрудник: belongsTo('i-i-s-otdel-kadrov-сотрудник', 'I dдолжности', {
      iDдолжности: attr('I dдолжности', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
