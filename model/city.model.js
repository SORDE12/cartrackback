let mongoose = require("mongoose")

let citySchema=mongoose.Schema({
    city:{type:String,required:true},
    location:{type:String,required:true},
    project:{type:String,required:true},
    latitude:{type:Number,required:true},
    longitude:{type:Number,required:true}
})

let CityModal=mongoose.model("cities",citySchema)

module.exports={
    CityModal
}


