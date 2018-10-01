```bash
curl "https://V1Host/V1Instance/api/asset"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "from": "Story",
    "select": [ 
        "Name",
        "Owners.@Count",
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