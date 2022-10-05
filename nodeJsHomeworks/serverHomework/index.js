const http = require('http');

const server = http.createServer((req, res) => {
    
    const url = req.url;

    if (url === '/') {
        res.write('<h2>ANASAYFAYA HOSGELDINIZ</h2>');
    } else if (url === '/index') {
        res.write('<h2>INDEX SAYFASINA HOSGELDINIZ</h2>');
    } else if (url === '/hakkimda') {
        res.write('<h2>HAKKIMDA SAYFASINA HOSGELDINIZ</h2>');
    } else if (url === '/iletisim') {
        res.write('<h2>ILETISIM SAYFASINA HOSGELDINIZ</h2>');
    }
    res.end();

});

const port = 5000;

server.listen(port, () => {
  console.log(`Sunucu port ${port} de başlatıldı.`);
});