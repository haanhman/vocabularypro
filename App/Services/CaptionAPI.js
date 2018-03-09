// a library to wrap and simplify api calls
import BaseAPI from './BaseAPI'

export default class CaptionAPI extends BaseAPI {

  constructor() {
    super('https://raw.githubusercontent.com/haanhman/caption/master/');
  }

  getCaption = (youtubeId, cb) => {
    let letter = youtubeId[0];
    const upperCase = ['a', 'c', 'd', 'e', 'f', 'g', 'l', 'o', 'p', 'q', 's', 't', 'y', 'z'];
    if (upperCase.indexOf(letter) >= 0) {
      letter = letter.toUpperCase();
    }
    let url = letter + '/' + youtubeId + '.json';
    this.get(url, {}, (response) => {
      cb(response);
    });
  }
}
