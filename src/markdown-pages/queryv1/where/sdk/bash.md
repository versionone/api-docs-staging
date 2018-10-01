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
    "where": {
      "Scope": "Scope:1234"
    }
}'
```