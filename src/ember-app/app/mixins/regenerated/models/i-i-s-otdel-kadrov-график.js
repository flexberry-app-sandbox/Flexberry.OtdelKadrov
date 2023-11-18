import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

export let Model = Mixin.create({
  iDсотрдника: DS.attr('string'),
  начальник: DS.belongsTo('i-i-s-otdel-kadrov-начальник', { inverse: null, async: false })
});

export let ValidationRules = {
  iDсотрдника: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-график.validations.iDсотрдника.__caption__',
    validators: [
      validator('ds-error'),
    ],
  },
  начальник: {
    descriptionKey: 'models.i-i-s-otdel-kadrov-график.validations.начальник.__caption__',
    validators: [
      validator('ds-error'),
      validator('presence', true),
    ],
  },
};

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('ГрафикE', 'i-i-s-otdel-kadrov-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    начальник: belongsTo('i-i-s-otdel-kadrov-начальник', 'Начальник', {
      iDсотрдника: attr('I dсотрдника', { index: 2, hidden: true })
    }, { index: 1, displayMemberPath: 'iDсотрдника' })
  });

  modelClass.defineProjection('ГрафикL', 'i-i-s-otdel-kadrov-график', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    начальник: belongsTo('i-i-s-otdel-kadrov-начальник', 'I dсотрдника', {
      iDсотрдника: attr('I dсотрдника', { index: 1 })
    }, { index: -1, hidden: true })
  });
};
