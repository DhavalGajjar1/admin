const mongoose = require("mongoose")

module.exports.db=async()=>{
    try {
        await mongoose.connect("mongodb+srv://dhaval10gajjar:1234@cluster1.vi0dm.mongodb.net/");
        console.log("database connected");

    } catch (error) {
        console.log("database not connected");
    }
}