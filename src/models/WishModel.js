const mongoose = require("mongoose");

const DataSchema = new mongoose.Schema(
    {
        productID: { type: mongoose.Schema.Types.ObjectId, required: true },
        userID: { type: mongoose.Schema.Types.ObjectId, required: true },
    },
    { timestamps: true, versionKey: false }
);


const WishModel = mongoose.models.Wish || mongoose.model("Wish", DataSchema);

module.exports = WishModel;
