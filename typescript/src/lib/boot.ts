import { Application } from "express"

const PORT = process.env.PORT || 8000

export const startServer = (app: Application) => {
    app.listen(PORT, ()=>{
        console.log(`App is up on port ${PORT}`)
    })
}