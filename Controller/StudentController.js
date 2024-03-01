const studentSchema = require("../Schema/StudentSchema");
const mailUtil = require('../Util/MailUtil');
const passwordUtil = require('../Util/PasswordUtil');
const tokenUtil = require('../Util/TokenUtil');
const loginStudent = async (req, res) => {
    var sEmail = req.body.email;
    var sPassword = req.body.password;
    var enrollmentNumber = req.body.enrollmentNumber;
    console.log(sEmail);
    console.log(sPassword);
    console.log(enrollmentNumber);
    const student = await studentSchema.findOne({ email: sEmail, password: sPassword });
    console.log(student);
    if (student) {
        res.status(200).json({
            message: "login Success",
            data: student
        })
    } else {
        res.status(404).json({
            message: "Invalid Credentials",
        })
    }
}

const updateStudent = async (req,res) =>{
    const id = req.params.id;
    const updatedStudent  = await studentSchema.findByIdAndUpdate(id,{attendanceStatus:true})
    res.status(200).json({
        message : "success"
    })
}

const loginUserWithEnc = async (req, res) => {
    var sEmail = req.body.email;
    var sPassword = req.body.password;
    console.log(sEmail);
    console.log(sPassword);
    const student = await studentSchema.findOne({ email: sEmail});
    const token = tokenUtil.generateToken(student.toObject());
    console.log(token);
    console.log(student);
    if (student) {
        if (await passwordUtil.comparePassword(sPassword, student.password)) {
            res.status(200).json({
                message: "login Success",
                data: student._id,token
            })
        }
        else {
            res.status(404).json({
                message: "Invalid credentials"
            })
        }
    } else {
        res.status(404).json({
            message: "Invalid Credentials",
        })
    }
}

const registerUserWithEnc = async (req, res) => {
    const hashedPassword = await passwordUtil.encryptPassword(req.body.password);
    const studentObj = {
        fName: req.body.fName,
        lName: req.body.lName,
        enrollmentNumber: req.body.enrollmentNumber,
        email: req.body.email,
        password: hashedPassword,
        mobileNo: req.body.mobileNo,
    }
    const student = new studentSchema(studentObj);
    var token = tokenUtil.generateToken(student.toObject());
    student.save().then((data) => {

        mailUtil.sendMail(req.body.email, "welcome to our app", "this is test mail from nodejs").then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })

        res.status(201).json({
            message: "user registration is successful",
            data: token,
            // date : student
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

const registerStudent = (req, res) => {
    const student = new studentSchema(req.body);
    student.save().then((data) => {

        mailUtil.sendMail(req.body.email, "welcome to our app", "this is test mail from nodejs").then((data) => {
            console.log(data);
        }).catch((err) => {
            console.log(err);
        })

        res.status(201).json({
            message: "user registration is successful",
            data: data,
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}


module.exports = {
    // loginStudent,
    // registerStudent
    loginUserWithEnc,
    registerUserWithEnc,
    updateStudent
    
}