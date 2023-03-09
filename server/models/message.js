const mongoose = require("mongoose");
const { Schema } = mongoose;

const messageSchema = new Schema (
    {
        text: String,
        file: Object,
        fileUrl: String,
        fileMime: String,
        fileExt: String,
        owner: [
            {
                type: Schema.Types.ObjectId,
                ref: "User"
            }
        ],
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model('Message', messageSchema);