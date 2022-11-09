const PORT = 3300
const startServer = (api) => {
    try{
        api.listen(PORT, ()=>{
            console.log(`App is up and running on port ${PORT}`);
        })
    }catch(error){
        console.log(error)
    }
   
}

module.exports = startServer