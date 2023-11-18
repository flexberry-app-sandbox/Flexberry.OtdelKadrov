import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-kadrov-должности', 'Unit | Model | i-i-s-otdel-kadrov-должности', {
  // Specify the other units that are required for this test.
  needs: [
    'model:i-i-s-otdel-kadrov-график',
    'model:i-i-s-otdel-kadrov-должности',
    'model:i-i-s-otdel-kadrov-начальник',
    'model:i-i-s-otdel-kadrov-подразделения',
    'model:i-i-s-otdel-kadrov-прием',
    'model:i-i-s-otdel-kadrov-расчет',
    'model:i-i-s-otdel-kadrov-сотрудник',
    'model:i-i-s-otdel-kadrov-увольнение',
    'validator:ds-error',
    'validator:presence',
    'validator:number',
    'validator:date',
    'validator:belongs-to',
    'validator:has-many',
    'service:syncer',
  ],
});

test('it exists', function(assert) {
  let model = this.subject();

  // let store = this.store();
  assert.ok(!!model);
});
