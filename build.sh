#!/bin/sh

npm run build

docker build -t flammarion/agricola:latest .

docker save flammarion/agricola:latest > ./agricola.tar

gzip -f ./agricola.tar