#!/bin/bash
while [ true ]
do
  echo "`date` ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
  node redis-client-master.js
done
