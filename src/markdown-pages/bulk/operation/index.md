## Execute Operation

Execute an operation on a single asset

Delete Story `Story:1234`

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

```json
{
    "from": "Story:1234",
    "execute": "Delete"
}
```

#### HTTP Response
```json
{
	"requestId": "340626bb-a623-4029-9eaa-e7441ee7fe3c",
	"createdDate": "2018-08-29T02:00:50.789788Z",
	"completedDate": "2018-08-29T02:00:51.133026Z",
	"duration": "00:00:00.3432380",
	"durationSeconds": 0.343238,
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
		"oidTokens": [
			"Story:1234"
		],
		"count": 1
	},
	"queryResult": {
		"results": [],
		"count": -1
	}
}
```