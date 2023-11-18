import { moduleForModel, test } from 'ember-qunit';

moduleForModel('i-i-s-otdel-kadrov-расчет', 'Unit | Serializer | i-i-s-otdel-kadrov-расчет', {
  // Specify the other units that are required for this test.
  needs: [
    'serializer:i-i-s-otdel-kadrov-расчет',
    'service:syncer',
    'transform:file',
    'transform:decimal',
    'transform:guid',

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
  ],
});

// Replace this with your real tests.
test('it serializes records', function(assert) {
  let record = this.subject();

  let serializedRecord = record.serialize();

  assert.ok(serializedRecord);
});
