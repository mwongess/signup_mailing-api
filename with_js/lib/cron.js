const runCron = (cron) => {
  cron.schedule("*/30 * * * * *", async () => {
    console.log(`%cListening for new users ...`,'color: green');
  });
};

module.exports = runCron;
