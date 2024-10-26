const userModel = require("../../models/userModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

async function useSignInController(req, res) {
  try {
    const { email, password } = req.body;
    if (!email) {
      throw new Error("Please Provide Email...😣");
    }
    if (!password) {
      throw new Error("Please Provide Password...😣");
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      throw new Error("User Not Existed...😣");
    }

    const check = await bcrypt.compare(password, user.password);
    if (!check) {
      throw new Error("Invalid Password....🙄");
    }

    const token_data = {
      _id: user._id,
      email: user.email,
      name: user.name,
    };
    const token = jwt.sign(token_data, process.env.TOKEN_SECRET_KEY, {
      expiresIn: "3d", // Token expires in 3 days
    });    
    const token_options = {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      signed: true,
      secure: true,
    };

    res.cookie("token", token, token_options).status(200).json({
      success: true,
      error: false,
      message: "Login Successfully...🤩",
      data: token,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = useSignInController;
