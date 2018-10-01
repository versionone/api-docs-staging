## Create

Update attributes a specific asset

#### HTTP Request

`POST http://V1Host/V1Instance/rest-1.v1/Data/:AssetType`

```json
{  
   "Attributes":{  
      "Name":{  
         "value":"New Name",
         "act":"set"
      },
      "Scope":{  
         "value":"Scope:123",
         "act":"set"
      },
      "ChangeSets": {
		  "value": [  
			{  
				"idref":"ChangeSet:123",
				"act":"add"
			},
			{  
				"idref":"ChangeSet:789",
				"act":"remove"
			}
     	 ]
	  }
   }
}
```

#### HTTP Response

```json
{
	"_type": "Asset",
	"href": "/V1Instance/rest-1.v1/Data/Story/4462/4631",
	"id": "Story:4462:4631",
	"Attributes": {
		"Name": {
			"_type": "Attribute",
			"name": "Name",
			"value": "New Name"
		},
		"Scope": {
			"_type": "Relation",
			"name": "Scope",
			"value": {
				"_type": "Asset",
				"href": "/V1Instance/rest-1.v1/Data/Scope/0",
				"idref": "Scope:0"
			}
		},
		"ChangeSets": {
			"_type": "Relation",
			"name": "ChangeSets",
			"value": [
				{
					"_type": "Asset",
					"href": "/V1Instance/rest-1.v1/Data/ChangeSet/123",
					"idref": "ChangeSet:123"
				}
			]
		}
	}
}
```