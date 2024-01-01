let express = require("express")
let studentRouter = require("./router/studentRouter");
let app = express();
const cors=require("cors")

app.use(cors())
app.use(express.json())

app.use("/students", studentRouter)

app.listen(5000, () => {
    console.log('Server is started on 5000');
})
