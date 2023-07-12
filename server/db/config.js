const mongoose = require('mongoose');
const chalk = require('chalk')

mongoose.set("strictQuery", false);
mongoose.connect("mongodb+srv://alangomez0047:pcxkdHa4IPjPYpzu@cluster0.r3ynnkx.mongodb.net/")
    .then((e)=>{
        console.log(chalk.green('connected to database'),e.connections[0].name,'\n')
    })
