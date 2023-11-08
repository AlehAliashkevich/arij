#!/bin/bash
echo mongo_setup.sh time now: `date +"%T" `
# setup cluster
sleep 15
mongosh --host mongo:27017 <<EOF
  var cfg = {
    "_id": "rs0",
    "version": 1,
    "members": [
      {
        "_id": 0,
        "host": "mongo:27017",
        "priority": 2
      },
      {
        "_id": 1,
        "host": "mongo-slave-1:27017",
        "priority": 0
      },
      {
        "_id": 2,
        "host": "mongo-slave-2:27017",
        "priority": 0
      }
    ]
  };
  rs.initiate(cfg);
EOF

# setup users and database
sleep 30
mongosh --host mongo:27017 --eval  "db.getSiblingDB('arij').createUser({user:'arij', pwd:'arij', roles:[{role:'readWrite',db:'arij'}]});"
