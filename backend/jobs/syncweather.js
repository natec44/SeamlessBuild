const cron = require('node-cron');
const updateWeatherData = require('../utils/weatherutils');

cron.schedule('0 * * * *', async () => {
  console.log('Running hourly weather sync');
  await updateWeatherData();
});
