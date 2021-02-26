#!/bin/bash

# Run react build
npm run build

# Remove old gzipped bundle
rm /Users/alekortiz/Documents/Hack Reactor/Immersive/Week17-2/rpt25-front-end-capstone/FEC-footer/public/footer_bundle.js.gz

# Gzip new bundle
gzip /Users/alekortiz/Documents/Hack\ Reactor/Immersive/Week17-2/rpt25-front-end-capstone/FEC-footer/public/footer_bundle.js

# Upload bundle to aws s3 bucket
aws s3 cp /Users/alekortiz/Documents/Hack\ Reactor/Immersive/Week17-2/rpt25-front-end-capstone/FEC-footer/public/footer_bundle.js.gz s3://fec-blitva-footer/ --grants read=uri=http://acs.amazonaws.com/groups/global/AllUsers --content-encoding gzip --content-type application/javascript

