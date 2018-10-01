## With

Provide context to `where` clauses or `filter` with variables.  

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "filter": [
      "Name=$myName"
    ],
    "where": {
      "Scope": "$myScope"
    },
    "with": {
      "$myScope": "Scope:1234",
      "$myName": "Alice Agility"
    }
}
```

#### HTTP Response

```json
[
	[
		{
			"_oid": "Story:1234",
			"Name": "Story Name"
		}
	]
]
```