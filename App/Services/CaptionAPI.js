// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class CaptionAPI extends BaseAPI {

  constructor() {
    super('https://raw.githubusercontent.com/haanhman/caption/master/');
  }

  getCaption = (youtubeId, cb) => {
    let url = youtubeId[0] + '/' + youtubeId + '.json';
    this.get(url, {}, (response) => {
      cb(response);
    });
  }
}
