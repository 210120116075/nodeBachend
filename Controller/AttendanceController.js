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
    console.log(qrData1);
    if (qrData1 && qrData1.length>0) {
        const attendanceObj = {
            branch: qrData1[0].branch,
            sem: qrData1[0].sem,
            subject: qrData1[0].subject,
            facultyId : qrData1[0].facultyId,
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
    else{
        res.status(500).json({
            message:"you are late sorry"
        })
    }

}
const getAllAttendance = async (req,res)=>{
    var studentId = req.body.sId;
    console.log("student : ",studentId);
    const attendance = await attendanceSchema.find({studentId:studentId}).populate('branch').populate('sem').populate('subject').populate('studentId').populate('facultyId');
    console.log(attendance);

    if(attendance){
        res.status(200).json({
            message : "attendance fetch successfully",
            data : attendance
        })
    }
    else{
        res.status(500).json({
            message : "error in fetch attendance"
        })
    }
}
module.exports = {
    addAttendance,
    getAllAttendance
}