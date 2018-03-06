/**
 * Created by man.nv on 3/6/18.
 */
import Model from './Model'
export default class WordTypeModel extends Model {
  table = 'word_type';

  getAllType(cb) {
    const sql = "SELECT id, name, description FROM " + this.table + " WHERE weight > 0 ORDER BY weight ASC";
    this.select(sql, [], (results) => {
      cb(results);
    })
  }
}
