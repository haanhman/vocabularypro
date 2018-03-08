/**
 * Created by man.nv on 3/6/18.
 */
import Model from './Model'
export default class WordModel extends Model {
  table = 'words';

  getAllWord(groupId = 0, wordType = 0, cb) {
    let sql = "SELECT id, name, word_type, phonic_uk, phonic_us FROM " + this.table + " WHERE 1 ";
    if(groupId > 0) {
      sql += " AND group_id = " + groupId;
    }
    if(wordType > 0) {
      sql += " AND word_type = " + wordType;
    }
    sql+= " ORDER BY id";
    this.select(sql, [], (results) => {
      cb(results);
    })
  }
}
