#!/bin/bash
while [ true ]
do
  echo "`date` ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
  redis-cli -p 26379 -h aredis-dev.opsnow.io -a redispassword SENTINEL get-master-addr-by-name mymaster
  node redistest.js
  sleep 1
done
