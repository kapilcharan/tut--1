// const mongoose =require("mongoose");
// const Contact=mongoose.Schema({
//     name:String,
//     phone:String,
//     email:String,
// })

// module.exports=mongoose.model("--",Contact);
const mongoose =require("mongoose");
// const { sendmail }=require("./nodemailer.js");
const Contact=mongoose.Schema({
    // name:String,
    // phone:String,
    // email:String,
    fullName: {
        type: String,
        required: true,
      },
      emailAddress: {
        type: String,
        required: true,
      },
      phoneNumber: {
        type: Number,
        required: true,
      },
      gender: {
        type: String,
        enum: ['male', 'female', 'other'],
        required: true,
      },
      address: {
        streetAddressLine1: {
          type: String,
          required: true,
        },
        streetAddressLine2: {
          type: String,
          required: true,
        },
        country: {
          type: String,
          required: true,
        },
        city: {
          type: String,
          required: true,
        },
        region: {
          type: String,
          required: true,
        },
        postalCode: {
          type: Number,
          required: true,
        },
      },
      product: {
        type: String,
        enum: ['Solar Dryer', 'Battery'],
        required: true,
      },
      message: {
        type: String,
      },
})

module.exports=mongoose.model("submission",Contact);




// fullName: {
//     type: String,
//     required: true,
//   },
//   emailAddress: {
//     type: String,
//     required: true,
//   },
//   phoneNumber: {
//     type: Number,
//     required: true,
//   },
//   gender: {
//     type: String,
//     enum: ['male', 'female', 'other'],
//     required: true,
//   },
//   address: {
//     streetAddressLine1: {
//       type: String,
//       required: true,
//     },
//     streetAddressLine2: {
//       type: String,
//       required: true,
//     },
//     country: {
//       type: String,
//       required: true,
//     },
//     city: {
//       type: String,
//       required: true,
//     },
//     region: {
//       type: String,
//       required: true,
//     },
//     postalCode: {
//       type: Number,
//       required: true,
//     },
//   },
//   product: {
//     type: String,
//     enum: ['Solar Dryer', 'Battery'],
//     required: true,
//   },
//   message: {
//     type: String,
//   },