// import jwt from "jsonwebtoken";

// export const genrateToken = (req, res, message) => {
//   const token = jwt.sign({ userId: user._id }, process.env.SECRET_KEY, {
//     expiresIn: "1d",
//   });

//   return res
//     .status(200)
//     .cookie("token", token, {
//       httpOnly: true,
//       sameSite: "strict",
//       maxAge: 24 * 60 * 60 * 1000, //1 Day
//     })
//     .json({
//       message,
//       success: true,
//       user,
//     });
// };
