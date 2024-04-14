import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
      name: {type: String, required: true, unique: true},
      description: String,
      course: {type: String, required: true},
      lessons: [{
        name: {type: String, required: true},
        description: String,
        module: {type: String, required: true},
      }],
    },
    {collection: "modules"});
export default moduleSchema;