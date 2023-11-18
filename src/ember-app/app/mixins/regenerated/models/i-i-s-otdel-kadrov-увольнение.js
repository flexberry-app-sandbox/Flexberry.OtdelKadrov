import Mixin from '@ember/object/mixin';
import $ from 'jquery';
import DS from 'ember-data';
import { validator } from 'ember-cp-validations';
import { attr, belongsTo, hasMany } from 'ember-flexberry-data/utils/attributes';

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

export let defineProjections = function (modelClass) {
  modelClass.defineProjection('УвольнениеE', 'i-i-s-otdel-kadrov-увольнение', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    iDподразделения: attr('I dподразделения', { index: 1 }),
    начальник: belongsTo('i-i-s-otdel-kadrov-начальник', 'Начальник', {
      iDсотрдника: attr('I dсотрдника', { index: 5, hidden: true })
    }, { index: 4, displayMemberPath: 'iDсотрдника' }),
    подразделения: belongsTo('i-i-s-otdel-kadrov-подразделения', 'Подразделения', {

    }, { index: 2 }),
    должности: belongsTo('i-i-s-otdel-kadrov-должности', 'Должности', {

    }, { index: 3 })
  });

  modelClass.defineProjection('УвольнениеL', 'i-i-s-otdel-kadrov-увольнение', {
    iDсотрдника: attr('I dсотрдника', { index: 0 }),
    iDподразделения: attr('I dподразделения', { index: 1 }),
    начальник: belongsTo('i-i-s-otdel-kadrov-начальник', 'I dсотрдника', {
      iDсотрдника: attr('I dсотрдника', { index: 2 })
    }, { index: -1, hidden: true })
  });
};
