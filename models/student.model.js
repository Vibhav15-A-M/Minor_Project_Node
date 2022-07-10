const mongoose = require('mongoose');

var studentSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: 'This field is required.'
    },
    email: {
        type: String
    },
    usn: {
      type: String,
      match: /^4[Nn][Ii]\d{2}[a-zA-Z]{2}\d{3}$/,
      required: 'This field is required.'
    },

    mobile: {
      type: String,
      match: /^\d{10}$/,
    },
    parentsMobile:{
      type: String,
      match: /^\d{10}$/,
    },
    address: {
        type: String,
    }
});

// Custom validation for email
studentSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid e-mail.');

mongoose.model('Student', studentSchema);
