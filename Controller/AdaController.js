const AdaSchema = require("../Schema/AdaSchema");

const updateAda = async (req,res) =>{
    const sub = req.params.ada;
    // const updatedAda  = await AdaSchema.findByIdAndUpdate(id,{attendanceStatus:true})
    // const id  = await AdaSchema.findOne({studentId : sub})
    // const updatedAdasub  = await AdaSchema.findByIdAndUpdate(id,{attendanceStatus:true})
    const ada = {
        studentId : sub,
        attendanceStatus: true
    }
    const adaSub = new AdaSchema(ada);
    adaSub.save().then((data)=>{
        res.status(200).json({
            message : "success"
        })
    })
    

    res.status(200).json({
        message : "success"
    })
}

module.exports = {
    updateAda
}