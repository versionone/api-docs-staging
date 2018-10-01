```bash
curl "https://V1Host/V1Instance/api/asset"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "from":"Story",
    "where": {
      "Super": "Epic:1234"
    },
    "update": {
      "Name": "Updated Story"
    }
}'
```