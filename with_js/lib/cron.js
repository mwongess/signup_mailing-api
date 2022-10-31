const runCron = (cron) => {
    cron.schedule("*/30 * * * * *",async ()=>{
        console.log(`node-cron running ...`);
    })
}

module.exports = runCron