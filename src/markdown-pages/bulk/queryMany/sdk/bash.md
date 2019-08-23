```bash
curl "https://V1Host/V1Instance/api/asset"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '[
    {
      "from": "Story",
      "wwhere": {
        "Scope": "Scope:0"
      },
      "select": [
        "Name"
      ]
    },
    {
      "from": "Member",
      "where": {
        "Inactive": false
      },
      "select": [
        "Name",
        "Username",
        {
          "from": "OwnedWorkitems",
          "select": [
            "Name"
          ]
        }
      ]
    }
  ]'
```


