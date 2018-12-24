const csvFile = "customer-data.csv";
const fs = require("fs")
const csv = require("csvtojson");
// let json = [];

csv().fromFile(csvFile)
// .on('json', (data) => {
//     json.push(data);
// })
// .on('done', (err) => {
//     if(err) return process.exit(1);
//     console.log(json);
//     fs.writeFile('customer.json', JSON.stringify(json, null, 2), (error) => {
//         if(error) return process.exit(1);
//         console.log('done');
//         process.exit(0);
//     })
// })
.then(
    (jsonObj)=>{
        fs.writeFile('customer.json', JSON.stringify(jsonObj,null,2), function (err, file) {
            if (err) console.log(err);
            console.log('Converted');
        })
    }
)