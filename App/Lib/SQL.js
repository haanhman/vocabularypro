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

  select = (sql, $arguments = [], successCallback, errorCallback = undefined) => {
    this.logQuery(sql);
    this.db.transaction((tx) => {
      let data = [];
      tx.executeSql(sql, $arguments, (tx, results) => {
        var len = results.rows.length;
        for (let i = 0; i < len; i++) {
          data.push(results.rows.item(i));
        }
        successCallback(data);
      }, (error) => {
        if (errorCallback != undefined) {
          errorCallback(error.message);
        } else {
          this.executeError(error);
        }
      });
    });
  }

  insert = (table, attributes = {}, successCallback, errorCallback = undefined) => {
    this.db.transaction((tx) => {
      let values = [];
      let placeHolder = [];
      let objKeys = Object.keys(attributes);
      objKeys.map(item => {
        placeHolder.push('?');
        values.push(attributes[item]);
      });

      let sql = 'INSERT INTO ' + table + ' (`' + objKeys.join('`, `') + '`) VALUES (' + placeHolder.join('`, `') + ')';
      this.logQuery(sql, values);

      tx.executeSql(sql, values, (tx, results) => {
        successCallback(true);
      }, (error) => {
        if (errorCallback != undefined) {
          errorCallback(error.message);
        } else {
          this.executeError(error);
        }
      });
    });
  }

  update = (table, attributes = {}, condition, successCallback, errorCallback = undefined) => {
    this.db.transaction((tx) => {

      let values = [];
      let attrPlaceHolder = [];
      let objKeys = Object.keys(attributes);
      objKeys.map(item => {
        attrPlaceHolder.push('`' + item + '` = ?');
        values.push(attributes[item]);
      });

      let sql = `UPDATE ${table} SET ${attrPlaceHolder.join('`, `')} WHERE `;

      if (typeof condition == 'object') {
        let conditionPlaceHolder = [];
        objKeys = Object.keys(condition);
        objKeys.map(item => {
          conditionPlaceHolder.push('`' + item + '` = ?');
          values.push(condition[item]);
        });

        sql += ` ${conditionPlaceHolder.join('`, `')}`;
      } else {
        sql += condition;
      }

      this.logQuery(sql, values);
      tx.executeSql(sql, values, (tx, results) => {
        successCallback(true);
      }, (error) => {
        if (errorCallback != undefined) {
          errorCallback(error.message);
        } else {
          this.executeError(error);
        }
      });
    });
  }

  logQuery = (sql, bind = []) => {
    console.log('SQL: ' + sql);
    if (bind.length > 0) {
      console.log('SQL Bind params: ' + JSON.stringify(bind));
    }
  }

  executeError = (error) => {
    console.error(error.message);
  }


}

export default SQL;
