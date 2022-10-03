const fs = require('fs');

fs.writeFile('employees.json','{"name": "Employee 1 Name", "salary": 2000}', 'utf-8', (err) =>{

    if (err) {
        console.log(err);
    } else {
        console.log('JSON DOSYA OLUŞTURULDU');
    }

});

fs.readFile('./employees.json', 'utf-8', (err, data) =>{
    if (err) {
        console.log(err);
    } else {
        console.log('DOSYA OKUNDU');
        console.log(data);
    }
});

fs.appendFile('./employees.json', '\n{"name": "Employee 2 Name", "salary": 5000}', 'utf-8',(err) => {
    
    if (err) {
        console.log(err);
    } else {
        console.log('JSON DOSYAYA YENİ VERİ EKLENDİ');
    }
    
});

fs.unlink('./employees.json', (err) => {
    if (err) {
        console.log(err);
    }
    console.log('DOSYA SİLİNDİ')
});