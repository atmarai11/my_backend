const mongoose = require("mongoose");

mongoose.connect("mongodb://420.0.0.1:57097/my_backend",{
    useUnifiedTopology: true,
    useNewUrlParser: true
})