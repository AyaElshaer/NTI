const mongoose = require('mongoose')
const validator = require('validator')


const Data = mongoose.model('Data' , {
    
        title:{
            type: String,
            required : true,
            minlength: 3,
            maxlength:30,
            trim:true
        },
        content:{
            type: String,
            required: true,
            minlength: 3,
            trim:true

        },
        date:{
            type:String,
            validate(value){
                if(!validator.isAfter(value)) {
                    throw new Error('Date must  be after today')
                }
            }
        }
})
module.exports = Data