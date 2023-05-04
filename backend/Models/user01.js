import mongoose from 'mongoose';

import { Schema } from 'mongoose';


const user01Schema = new Schema({
    


    nom:{
        type: String,
        required: true,
    },

    prenom:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        require:true
    },

    
});


export default mongoose.model('User', user01Schema);
