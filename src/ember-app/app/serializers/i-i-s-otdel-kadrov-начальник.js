import { Serializer as НачальникSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-начальник';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(НачальникSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
