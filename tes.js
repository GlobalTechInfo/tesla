const Qasim = require('api-qasim');

(async () => {
  try {

    // === Ringtones Dl ===
    const ringtoneResult = await Qasim.ringtone('Nokia');
    console.log('Ringtones:', ringtoneResult);

    // === Apk Search ===
    const apksearchResult = await Qasim.apksearch('Telegram');
    console.log('Android1 APK:', apksearchResult);

    // === Weather Info ===
    const weatherResult = await Qasim.weather('Karachi');
    console.log('Weather of Karachi:', weatherResult);

  } catch (error) {
    console.error('Error:', error);
  }
})();
