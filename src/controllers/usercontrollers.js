const User = require("../model/userModel");
const bcrypt = require("bcrypt");

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check if user already exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "User already exists"
      });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password,10);

    // Create user
    const newUser = await User.create({
      name,
      email,
      password: hashedPassword
    });

    res.status(201).json({
      message: "User registered successfully",
      user: {
        name: newUser.name,
        email: newUser.email
      }
    });

  } catch (error) {
    res.status(500).json({
      message: "Registration failed",
      error: error.message
    });
  }
};


//login user
const loginUser = async (req, res) => {
    try {

        const { email, password } = req.body;

    // find user by email 
    const user = await User.findOne({ email });

    if (!user) {
        return res.status(404).json({
            message: "User not found"
        });
    }

    // compare the password
    const isPasswordCorrect = await bcrypt.compare(
        password,
        user.password
    );

    if (!isPasswordCorrect) {
            return res.status(400).json({
                message: "Invalid password"
            });
        }
        res.status(200).json({
            message: "Login successful",
            user: {
                name: user.name,
                email: user.email
            }
        }); 

    } catch (error) {
        res.status(500).json({
            message: "Login failed",
            error: error.message
        });
    }
};

module.exports = {
    registerUser,
    loginUser
};

