#!/bin/bash
while [ true ]
do
  echo "`date` ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^"
  node redis-client-slave.js
done
