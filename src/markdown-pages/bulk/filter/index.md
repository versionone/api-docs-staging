## Filtering

Filter query results

Stories that have 1 or more of its children that have not been deleted (aka AssetState!=255).

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

```json
{
    "from": "Story",
    "filter": [
        "Children[AssetState!=\"255\"].@Count>\"0\""
    ]
}
```

#### HTTP Response
```json
{
	"requestId": "f380237e-e1e8-4310-950f-36ce16381e35",
	"createdDate": "2018-08-29T02:11:00.4022201Z",
	"completedDate": "2018-08-29T02:11:00.6050231Z",
	"duration": "00:00:00.2028030",
	"durationSeconds": 0.20280299999999998,
	"complete": true,
	"processing": false,
	"assetsCreated": {
		"oidTokens": [],
		"count": 0
	},
	"assetsModified": {
		"oidTokens": [],
		"count": 0
	},
	"assetsOperatedOn": {
		"oidTokens": [],
		"count": 0
	},
	"queryResult": {
		"results": [
			[
				{
					"_oid": "Story:2345"
				},
				{
					"_oid": "Story:3456"
				}
			]
		],
		"count": 1
	}
}
```