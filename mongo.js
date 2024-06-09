const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true // Ensures email uniqueness
    },
    password: {
        type: String,
        required: true
    },
    phoneNo: {
        type: String,
        required: true
    },
    orders: [
        {
            items: [
                {
                    name: { type: String, required: true },
                    quantity: { type: Number, required: true },
                    price: { type: Number, required: true },
                }
            ],
            totalAmount: { type: Number, required: true },
            orderDate: { type: Date, default: Date.now }
        }
    ]
});

const User = mongoose.model("users", userSchema);

module.exports = User;
