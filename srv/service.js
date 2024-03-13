const cds = require('@sap/cds');
const { parseArgs } = require('util');
module.exports = cds.service.impl(async function () {
    let {
        patient_det1, 
        patient_det2
    } = this.entities;
    // const c5re = await cds.connect.to('iflow1');
    this.on('READ', patient_det2.drafts, async (req,next) => {
        // debugger
        if(req.data.firstnum){
        // var data1 = await SELECT.from(stud.drafts);
            const sum = req.data.firstnum + req.data.secondnum;
        console.log(req);
        await cds.update(patient_det2.drafts)
        .set({result:sum }) // Update with new data
        .where({ patient_id : req.data.id});
    }
        return next();
    });
    });