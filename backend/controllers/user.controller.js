// import User from "../modules/user.module";
// import { genrateToken } from "../utils/genrateToken";
// import bcrypt from "bcrypt";

// export const register = async (req, res, next) => {
//   try {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//       return res.status(400).json({
//         message: "All Field are required .",
//         success: false,
//       });
//     }
//     const user = await User.findOne({ email });
//     if (user) {
//       return res.status(400).json({
//         message: "User already exist with this email.",
//         success: false,
//       });
//     }
//     const hashedPassword = await bcrypt.hash(password, 10);
//     await User.create({
//       name,
//       email,
//       password: hashedPassword,
//     });
//     return res.status(200).json({
//       message: "Account created successfully.",
//       success: true,
//     });
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Registration failed",
//       success: false,
//     });
//   }
//   next();
// };

// export const login = async (req, res, next) => {
//   try {
//     const { email, password } = req.body;
//     if (!email || !password) {
//       return res.status(400).json({
//         message: "All Fields are required.",
//         success: false,
//       });
//     }
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.status(400).json({
//         message: "Incorrect email or password",
//         success: false,
//       });
//     }
//     const isPasswordMatch = await bcrypt.compare(password, user.password);
//     if (!isPasswordMatch) {
//       return res.status(400).json({
//         message: "Incorrect email or password.",
//         success: false,
//       });
//     }
//     genrateToken(res, user, `Welcome Back ${user.name}`);
//   } catch (error) {
//     console.log(error);
//     return res.status(500).json({
//       message: "Login are failed.",
//       success: false,
//     });
//   }
//   next();
// };
