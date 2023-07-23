#!/bin/bash
find components -type f -name "*.js" -exec sh -c 'mv "$0" "${0%.js}.jsx"' {} \;
