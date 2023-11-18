import { Serializer as РасчетSerializer } from
  '../mixins/regenerated/serializers/i-i-s-otdel-kadrov-расчет';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РасчетSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
