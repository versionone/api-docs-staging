```bash
curl "http://V1Host/V1Instance/rest-1.v1/Data/Story"
  -H "Authorization: Bearer <access-token>"
  -H "Accept: application/json"
  -H "Content-type: application/json"
  --request POST
  --data '{  
   "Attributes":{  
      "Name":{  
         "value":"New Name",
         "act":"set"
      },
      "Scope":{  
         "value":"Scope:123",
         "act":"set"
      },
      "ChangeSets":[  
         {  
            "idref":"ChangeSet:123",
            "act":"add"
         }
      ]
   }
}'
```