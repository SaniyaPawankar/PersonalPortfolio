import express from "express"
import dotenv from "dotenv"

const app = express();

dotenv.config({path: "./config.env"})

const port = process.env.PORT || 5030

app.use(express.json());
app.use(express.urlencoded({extended : true}))


app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
})