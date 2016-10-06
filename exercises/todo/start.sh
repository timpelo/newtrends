#! /bin/bash
mongod &
sleep 5
nodejs server.js &
sleep 5
exit
