const attendanceSchema = require('../Schema/AttendanceSchema');
const qrSchema = require('../Schema/QRSchema');

const addAttendance = async (req,res)=>{
    var id =await req.params.id;
    var qrText1 =await req.params.qrText;
    console.log("id : "+id);
    console.log("qrText : "+qrText);
    const qrData =await qrSchema.find({qrText:qrText1},{qrStatus:"generated"});
    if(qrData){
        const attendanceObj = {
            branch: qrData.branch,
            sem: qrData.sem,
            subject: qrData.subject,
            studentId: id,
            attendanceStatus : "present"
        }
        const attendance = new attendanceSchema(attendanceObj);
        attendance.save().then((data)=>{
            res.status(200).json({
                message: "attendance fill successfully",
                data:id
            });
        }).catch((err)=>{
            res.status(500).json({
                message: "error",
                error : err
            });
        })
    }

}
module.exports={
    addAttendance
}