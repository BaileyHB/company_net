const http = require('http');
const fs = require('fs');
const path = require('path');
http.createServer((req, res) => {
  let fp = '.' + decodeURI(req.url.split('?')[0]);
  if (fp === './') fp = './index.html';
  const m = {'.html':'text/html','.css':'text/css','.js':'text/javascript','.png':'image/png','.jpg':'image/jpeg','.webp':'image/webp','.mp4':'video/mp4','.svg':'image/svg+xml'};
  fs.readFile(fp, (e,d) => {
    if(e){res.writeHead(404);res.end('404');return;}
    res.writeHead(200, {'Content-Type':m[path.extname(fp)]||'text/plain','Cache-Control':'no-cache'});
    res.end(d);
  });
}).listen(8080, () => console.log('Server: http://localhost:8080'));
