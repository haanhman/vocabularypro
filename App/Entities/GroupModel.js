/**
 * Created by man.nv on 3/6/18.
 */
import Model from './Model'
export default class GroupModel extends Model {
  table = 'groups';

  getAllGroups(cb) {
    const sql = "SELECT id, name FROM " + this.table;
    this.select(sql, [], (results) => {
      cb(results);
    })
  }
}
