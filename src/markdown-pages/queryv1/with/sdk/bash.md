```bash
curl "https://V1Host/V1Instance/query.v1"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "filter": [
      "Name=$myName"
    ],
    "where": {
      "Scope": "$myScope"
    },
    "with": {
      "$myScope": "Scope:1234",
      "$myName": "Alice Agility"
    }
}'
```