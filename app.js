const express = require("express");
const mongoose = require("mongoose");
const User = require("./mongo");
const cors = require("cors");
const bcrypt = require("bcrypt");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://0.0.0.0:27017/react-login-tut")
    .then(() => {
        console.log("MongoDB connected");
    })
    .catch((error) => {
        console.error("Failed to connect to MongoDB:", error);
    });

// Route to handle user signup
app.post("/signup", async (req, res) => {
    const { firstName, lastName, email, password, phoneNo } = req.body;

    try {
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.json("exist");
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
            phoneNo
        });

        await newUser.save();
        res.json("notexist");
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
});

// Route to handle user login
app.post("/login", async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(400).json({ message: "User not found" });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

        res.status(200).json({ user });
    } catch (error) {
        res.status(500).json({ message: "Internal server error" });
        console.error(error);
    }
});

// Route to handle order updates
app.post("/checkout", async (req, res) => {
    const { userId, items, totalAmount } = req.body;

    // Check if the user is logged in
    if (!userId) {
        return res.status(401).json({ message: "Please log in to place an order" });
    }

    try {
        // Create the order object
        const order = {
            items,
            totalAmount
        };

        // Find the user by ID and update their orders
        const user = await User.findByIdAndUpdate(
            userId,
            { $push: { orders: order } },
            { new: true }
        );

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Send a success response
        res.status(200).json({ message: "Order placed successfully", orders: user.orders });
    } catch (error) {
        console.error("Error during checkout:", error);
        res.status(500).json({ error: "Internal server error" });
    }
});

app.listen(8000, () => {
    console.log("Server running on port 8000");
});
