```bash
curl "https://V1Host/V1Instance/api/asset"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '{  
   "AssetType": "Story",
   "Name": "Story\s Name",
   "Scope": "Scope:0"
}'
```