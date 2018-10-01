```bash
curl "https://V1Host/V1Instance/api/asset"
  -H "Authorization: Bearer <access-token>"
  -H "Content-Type: application/json"
  -H "Accept: application/json"
  --request POST
  --data '[ 
   "@newScope":{  
      "AssetType":"Scope",
      "Name":"New Scope",
      "Super": "Scope:0"
   },
   "@newStory":{  
      "AssetType":"Story",
      "Name":"New Story",
      "Scope": "@newScope"
   },
]'
```