
const PORT = 3300
const startServer = (api) => {
    api.listen(PORT, ()=>{
        console.log(`App listening on port ${PORT}`);
    })
}

module.exports = startServer