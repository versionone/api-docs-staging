## Query

Query for assets of a specific asset type.

#### HTTP Request

`GET http://V1Host/V1Instance/rest-1.v1/Data/:AssetType`

#### HTTP Response

```json
{
	"_type": "Assets",
	"total": 13768,
	"pageSize": 5,
	"pageStart": 0,
	"Assets": [
		{
			"_type": "Asset",
			"href": "/V1Instance/rest-1.v1/Data/Story/1234",
			"id": "Story:1432",
			"Attributes": {
				"Name": {
					"_type": "Attribute",
					"name": "Name",
					"value": "Story Name"
                },
                "Number": {
					"_type": "Attribute",
					"name": "Number",
					"value": "S-1001"
				},
                "Super": {
					"_type": "Attribute",
					"name": "Super",
					"value": "Epic:1234"
				}
			}
        }
    ]
}
```