## Where

the where key takes a value that is also a mapping. The keys of the mapping are taken as selection tokens, and the values of the mapping are taken as the value to compare against in an "equal" comparison.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "where": {
      "Scope": "Scope:1234"
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