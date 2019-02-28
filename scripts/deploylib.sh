#!/bin/sh

npm run clean
npm run build:lib
cd lib
gzip *
aws s3 cp component.js.gz s3://joelnet-demos/remote-profile-card/lib/component.js --content-type application/javascript --content-encoding gzip
aws s3 cp component.js.map.gz s3://joelnet-demos/remote-profile-card/lib/component.js.map --content-type application/json --content-encoding gzip
