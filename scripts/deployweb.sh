#!/bin/sh

npm run clean
npm run build
cd dist
gzip *.html
gzip *.js*
aws s3 cp index.html.gz s3://joelnet-demos/remote-profile-card/web/index.html --content-type text/html --content-encoding gzip
aws s3 cp joel-head.png s3://joelnet-demos/remote-profile-card/web/joel-head.png --content-type image/png
aws s3 cp mojo-head.png s3://joelnet-demos/remote-profile-card/web/mojo-head.png --content-type image/png
aws s3 cp main.js.gz s3://joelnet-demos/remote-profile-card/lib/main.js --content-type application/javascript --content-encoding gzip
aws s3 cp main.js.map.gz s3://joelnet-demos/remote-profile-card/lib/main.js.map --content-type application/json --content-encoding gzip
