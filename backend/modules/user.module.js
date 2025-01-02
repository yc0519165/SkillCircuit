// const mongoose = require("mongoose");
// const Schema = mongoose.Schema;

// const userSchema = new Schema(
//   {
//     name: {
//       type: String,
//       required: true,
//     },
//     email: {
//       type: String,
//       required: true,
//     },
//     password: {
//       type: String,
//       required: true,
//     },
//     roie: {
//       type: String,
//       enum: ["instructor", "student"],
//       default: "student",
//     },
//     enrolledCourses: [
//       {
//         type: mongoose.Schema.Types.ObjectId,
//         rer: "Course",
//       },
//     ],
//     photoUrl: {
//       type: String,
//       default: "",
//     },
//   },
//   { timestamps: true }
// );

// export const User = mongoose.model("user", userSchema);
