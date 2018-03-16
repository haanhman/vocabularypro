/**
 * Created by man.nv on 3/6/18.
 */
import Model from './Model'
export default class GroupModel extends Model {
  table = 'group';

  getAllGroups(cb) {
    const sql = "SELECT id, name, total_word, meant FROM " + this.table;
    this.select(sql, [], (results) => {
      cb(results);
    })
  }
}
