#!/bin/bash
pnpm exec openapi-generator-cli generate \
    -i ./headscale.swagger.json \
    -g typescript-fetch \
    -o ./ \
    --additional-properties=supportsES6=true,useSingleRequestParameter=true