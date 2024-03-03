const attendanceSchema = require('../Schema/AttendanceSchema');
const qrSchema = require('../Schema/QRSchema');

const addAttendance = async (req, res) => {
    // var id =await req.params.id;
    // var qrText1 =await req.params.qrText;
    var id = await req.body.id;
    var qrText1 = await req.body.qrText;
    console.log("id : " + id);
    console.log("qrText : " + qrText1);
    const qrData1 = await qrSchema.find({
        'qrText':qrText1,
        'qrStatus':"generated"
    });
    // console.log("qr :", qrData1[0].branch);
    if (qrData1) {
        const attendanceObj = {
            branch: qrData1[0].branch,
            sem: qrData1[0].sem,
            subject: qrData1[0].subject,
            studentId: id,
            attendanceStatus: "present"
        }
        const attendance = new attendanceSchema(attendanceObj);
        attendance.save().then((data) => {
            res.status(200).json({
                message: "attendance fill successfully",
                data: id
            });
        }).catch((err) => {
            res.status(500).json({
                message: "error",
                error: err
            });
        })
    }

}
module.exports = {
    addAttendance
}