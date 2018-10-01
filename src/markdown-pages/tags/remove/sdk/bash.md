```bash
curl "https://V1Host/V1Instance/api/tags/command/remove"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{
    "removeFrom": [
      "RegressionTestDetails",
      "RegressionTests"
    ]
}'
```