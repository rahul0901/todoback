import mongoose, { Schema } from "mongoose";

const todoSchema = new Schema({
    content: {
        type: String,
        required: true
    }
})

export default mongoose.model("TodoData", todoSchema)