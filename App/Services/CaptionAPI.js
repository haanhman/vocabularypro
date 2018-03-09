// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class CaptionAPI extends BaseAPI {

  constructor() {
    super('https://raw.githubusercontent.com/haanhman/caption/master/');
  }

  getCaption = (youtubeId, cb) => {
    let letter = youtubeId[0].toLocaleLowerCase();
    let url = letter + '/' + youtubeId + '.json';
    this.get(url, {}, (response) => {
      cb(response);
    });
  }
}
