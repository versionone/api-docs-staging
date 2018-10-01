```bash
curl "https://V1Host/V1Instance/query.v1"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "from": "Story",
    "select": [ 
        "Name",
        {
          "from": "Owners",
          "select": [
            "Name",
            "Avatar.Content"
          ]
        }
    ]
}'
```