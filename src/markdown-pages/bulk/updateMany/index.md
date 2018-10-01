## Update Many

Multiple assets can be updated in a single HTTP request using bulk API.

Find all the stories that are in the `Epic:1234` Epic and rename them.

#### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

```json
{
    "from": "Story",
    "where": {
        "Super": "Epic:1234"
    },
    "update": {
        "Name": "Updated Story"
    }
}
```

#### HTTP Response
```json
{
	"requestId": "a39afdd9-e471-4ecd-9ff5-73fad2b9ef03",
	"createdDate": "2018-08-29T01:59:12.5584932Z",
	"completedDate": "2018-08-29T01:59:12.5740873Z",
	"duration": "00:00:00.0155941",
	"durationSeconds": 0.0155941,
	"complete": true,
	"processing": false,
	"assetsCreated": {
		"oidTokens": [],
		"count": 0
	},
	"assetsModified": {
		"oidTokens": [
            "Story:1234",
            "Story:1235",
            "Story:1242"
		],
		"count": 3
	},
	"assetsOperatedOn": {
		"oidTokens": [],
		"count": 0
	},
	"queryResult": {
		"results": [],
		"count": -1
	}
}
```