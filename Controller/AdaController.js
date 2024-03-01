const AdaSchema = require("../Schema/AdaSchema");

const updateAda = async (req,res) =>{
    const sub = req.params.ada;
    // const updatedAda  = await AdaSchema.findByIdAndUpdate(id,{attendanceStatus:true})
    const id  = await AdaSchema.findOne({studentId : sub})
    const updatedAdasub  = await AdaSchema.findByIdAndUpdate(id,{attendanceStatus:true})

    res.status(200).json({
        message : "success"
    })
}

module.exports = {
    updateAda
}