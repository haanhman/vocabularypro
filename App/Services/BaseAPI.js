// a library to wrap and simplify api calls
import apisauce from 'apisauce'
import {NONE} from 'apisauce'

export const VALIDATE_CODE = 422;
export default class BaseAPI {
  cancelToken = {};
  api = null;
  constructor(baseURL) {
    this.api = apisauce.create({
      // base URL is read from the "constructor"
      baseURL,
      // here are some default headers
      headers: {
        'Cache-Control': 'no-cache'
      },
      // 30 second timeout...
      timeout: 30000
    });
  }



  processResponse(json) {
    if (json.problem == NONE) {
      return json.data;
    }
  }

  get = (endpoint, params = {},responseCallback) => {
    console.log(`GET: ${endpoint}`);
    this.api.get(endpoint, params, this.cancelToken).then((json) => this.processResponse(json)).then((json) => {
      responseCallback(json);
    }).catch((e) => {
      console.log('Error: ' + e.message);
    });
  }
}
