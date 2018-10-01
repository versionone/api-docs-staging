## Subselect

Sub select a relation.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
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
}
```

#### HTTP Response

```json
[
	[
		{
			"_oid": "Story:1234",
			"Name": "Story Name",
			"Owners.@Count": "2",
			"Owners": [
				{
					"_oid": "Member:1234",
					"Name": "Andre Agile",
					"Avatar.Content": "iVBORw0KGgoAAAANSUh/ORK5CYII="
				},
				{
					"_oid": "Member:2345",
					"Name": "Alice Agility",
					"Avatar.Content": "/9j/4AAQSkZJRgABAQEAYAjlr2P/2Q=="
				}
			]
		}
	]
]
```