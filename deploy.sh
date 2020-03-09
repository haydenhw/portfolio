#!/usr/bin/env bash
distributionId=E34P8R1QKSYYHP

yarn bd &&
aws2 cloudfront create-invalidation \
    --distribution-id $distributionId \
    --paths "/*"

