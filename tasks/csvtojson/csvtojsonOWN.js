const csvFile = "customer-data.csv";
const fs = require('fs');
const path = require('path');
var csvData;


fs.readFile(path.join(__dirname, csvFile), { encoding: 'utf-8' },
    function (error, data) {
        if (error) return console.error(error)
        csvData = data;
        const rows = (csvData.split('\n').shift().split(','))
        var csvdata = csvData.split('\n');
        let jsonData = []
        for (let i = 1; i < csvdata.length; i++) {
        var parseddata = csvdata[i].split(',');
        var temp = {};
            for (var j = 0; j < rows.length; j++) {
                temp[rows[j]] = parseddata[j];
            }
            jsonData.push(temp);
        }
        fs.writeFile('customer-own.json', JSON.stringify(jsonData,null,2), function (err, file) {
            if (err) console.log(err);
            console.log('Done');
        })
    })