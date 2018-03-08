// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class SearchImageAPI extends BaseAPI {

  cx = '012765024062402930908:o-6v_muzdeu';

  getToken = (responseCallback) => {
    let url = 'https://cse.google.com/cse.js?cx=' + this.cx;
    this.get(url, {}, (response) => {
      var re = /"cse_token": ".*",/i;
      var found = response.match(re);
      var token = found[0];
      token = token.replace('"cse_token": "','');
      token = token.replace('",','');
      console.log('token: ' + token);
      responseCallback(token);
    });
  }

  search = (query, token, responseCallback) => {
    const params = {
      key: 'AIzaSyCVAXiUzRYsML1Pv6RwSG1gunmMikTzQqY',
      rsz: 'filtered_cse',
      num: 20,
      hl: 'vi',
      prettyPrint: false,
      source: 'gcsc',
      gss: '.com',
      sig: '45e50696e04f15ce6310843f10a3a8fb',
      searchtype: 'image',
      cx: this.cx,
      q: query,
      cse_tok: token,
      googlehost: 'www.google.com',
      nocache: Date.now()
    }
    this.get('customsearch/v1element', params, responseCallback);
  }
}
