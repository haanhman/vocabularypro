/**
 * Created by man.nv on 3/5/18.
 */
const SQLite = require('react-native-sqlite-storage');
class SQL {
  db = null;

  constructor() {
    this.db = SQLite.openDatabase({
      name: 'database.sqlite',
      createFromLocation: 1
    });
  }

  select = (query, $arguments = [], successCallback, errorCallback) => {
    this.db.transaction((tx) => {
      let data = [];
      tx.executeSql(query, $arguments, (tx, results) => {
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          data.push(results.rows.item(i));
        }
        successCallback(data);
      }, (error) => {
        errorCallback(error.message);
      });
    });
  }

  insert = (table, attributes, successCallback, errorCallback) => {
    this.db.transaction((tx) => {

      let values = [];
      let placeHolder = [];
      let objKeys = Object.keys(attributes);
      objKeys.map(item => {
        placeHolder.push('?');
        values.push(attributes[item]);
      });

      let sql = `INSERT INTO ${table} ('${objKeys.join("', '")}') VALUES (${placeHolder.join(', ')})`;
      console.log(sql);
      tx.executeSql(sql, values, (tx, results) => {
        successCallback(true);
      }, (error) => {
        errorCallback(error.message);
      });
    });
  }
}

export default SQL;
