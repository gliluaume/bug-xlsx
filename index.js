const fs  = require('fs');
const XLSX = require('xlsx');

const parseFile = (path) => {
    console.log(path);
    const buffer = fs.readFileSync("./bug-xlsx.xlsx");

    const workbook = XLSX.read(buffer, { type: "array" });
    const obj = XLSX.utils.sheet_to_json(workbook.Sheets["Sheet1"], { raw: true });
    console.log(obj);
}

parseFile("./bug-xlsx.xlsx");
parseFile("./bug-xlsx-excel5.xlsx");

