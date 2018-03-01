var Sound = require('react-native-sound');
function playSound(name, basePath = Sound.MAIN_BUNDLE) {
  var sound = new Sound(name, basePath, (error) => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
    // loaded successfully
    console.log('duration in seconds: ' + sound.getDuration() + 'number of channels: ' + sound.getNumberOfChannels());

    sound.play((e) => {
      sound.release();
    });
  });
  return sound;
}
export {playSound}
