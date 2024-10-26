async function userLogout(req, res) {
  try {
    req.res.clearCookie("token", {
      path: "/",
      httpOnly: true,
      sameSite: "none",
      signed: true,
      secure: true, // Required for cross-site cookies
    });
    res.json({
      message: "Logged Out SuccessFully...😥",
      success: true,
      error: false,
      data: [],
    });
  } catch (err) {
    res.json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userLogout;
