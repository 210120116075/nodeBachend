const qrSchema = require('../Schema/QRSchema');
const randomStr = async (len, arr) => {
    let ans = '';
    for (let i = len; i > 0; i--) {
        ans +=
            arr[(Math.floor(Math.random() * arr.length))];
    }
    return ans;
}
const generateQR = async (req, res) => {


    const qrText = await randomStr(20, '12345abcde');
    // console.log(qrText);
    const qrObj = {
        branch: req.body.branch,
        sem: req.body.sem,
        subject: req.body.subject,
        qrStatus: "generated",
        qrText: qrText
    }
    const qrCode = new qrSchema(qrObj);
    qrCode.save().then((data) => {
        res.status(200).json({
            message: "data add successfully",
            data: qrText
        })
    }).catch((err) => {
        res.status(500).json({
            message: "error",
            error: err
        })
    })
}

module.exports = {
    generateQR
}