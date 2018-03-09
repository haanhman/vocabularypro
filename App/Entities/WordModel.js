/**
 * Created by man.nv on 3/6/18.
 */
import Model from './Model'
export default class WordModel extends Model {
  table = 'words';

  getAllWord(groupId = 0, wordType = 0, cb) {
    let sql = "SELECT t1.id, t1.name, t1.phonic_uk, t1.phonic_us, t2.name AS `word_type` FROM " + this.table + " AS t1 ";
    sql += " INNER JOIN word_type AS t2 ON (t1.word_type = t2.id) WHERE 1 ";
    if(groupId > 0) {
      sql += " AND t1.group_id = " + groupId;
    }
    if(wordType > 0) {
      sql += " AND t1.word_type = " + wordType;
    }
    sql+= " ORDER BY t1.id";
    this.select(sql, [], (results) => {
      cb(results);
    })
  }

  getWordDetail(id, cb) {
    const sql = "SELECT t1.*, t2.name AS `type` FROM " + this.table + " AS t1 INNER JOIN word_type AS t2 ON (t1.word_type = t2.id) WHERE t1.id = " + id;
    this.select(sql, [], (results) => {
      cb(results[0]);
    })
  }
}
