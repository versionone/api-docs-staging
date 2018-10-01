## Query

Retrieve only the attributes you need from an asset.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Scope.Name"
    ]
}
```

#### HTTP Response

```json
[
	[
		{
			"_oid": "Story:1234",
			"Name": "Their Story",
			"Scope.Name": "Project A"
		},
		{
			"_oid": "Story:5678",
			"Name": "My Story",
			"Scope.Name": "Project B"
		}
	]
]
```