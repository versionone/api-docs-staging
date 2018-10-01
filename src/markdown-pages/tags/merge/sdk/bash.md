```bash
curl "https://V1Host/V1Instance/api/tags/command/merge"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "MergeTo": "Regression Tests",
    "MergeFrom": [
      "RegressionTests",
      "RegTests"
    ]
}'
```