#!/usr/bin/env bash
bucket_name=haydenhw.com

npm run build
aws2 s3 sync build s3://$bucket_name 


