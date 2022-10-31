const runCron = (cron) => {
    cron.schedule("*/30 * * * * *",async ()=>{
        console.log(`Listening for new users ...`);
    })
}

module.exports = runCron