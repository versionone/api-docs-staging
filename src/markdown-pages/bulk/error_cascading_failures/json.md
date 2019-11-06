## Error: Create Epic and Subs where Scope is invalid causes cascade of four failures

Demonstrates how the API will return a cascade of failures when an invalid Scope is specified for a top-level Epic that has a collection of Subs. The failure messages can be modified and resubmitted to the API to create the original request's Assets.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
	"AssetType": "Epic",
	"Scope": "Scope:9999",
	"Name": "My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!",
	"Subs": [
		{
			"AssetType": "Story",
			"Name": "My Story",
			"Children": [
				{
					"AssetType": "Test",
					"Name": "My Test"
				},
				{
					"AssetType": "Task",
					"Name": "My Task"
				}
			]
		}
	]
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
	"requestId": "62cf5d73-e05f-4266-acf0-f0741fe73955",
	"createdDate": "2019-11-05T21:28:16.5909662Z",
	"completedDate": "2019-11-05T21:28:16.5984342Z",
	"duration": "00:00:00.0074680",
	"durationSeconds": 0.007468,
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
	"commandFailures": {
		"commands": [
			{
				"@eef2cc08-3c76-41ab-825b-8ba959b50731": {
					"AssetType": "Epic",
					"Scope": "Scope:9999",
					"Name": "My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!"
				},
				"error": {
					"message": "Violation'Invalid'Epic.Scope",
					"sourceCommandIndex": 0
				}
			},
			{
				"@38c17c5c-8ca1-4a08-9ca0-74622a703b48": {
					"AssetType": "Story",
					"Name": "My Story",
					"#ContextOid": "@eef2cc08-3c76-41ab-825b-8ba959b50731"
				},
				"error": {
					"message": "Invalid OID token: @eef2cc08-3c76-41ab-825b-8ba959b50731",
					"sourceCommandIndex": 0
				}
			},
			{
				"@18b3cee9-8d13-4578-b4e9-eaf250e4cbc8": {
					"AssetType": "Test",
					"Name": "My Test",
					"#ContextOid": "@38c17c5c-8ca1-4a08-9ca0-74622a703b48"
				},
				"error": {
					"message": "Invalid OID token: @38c17c5c-8ca1-4a08-9ca0-74622a703b48",
					"sourceCommandIndex": 0
				}
			},
			{
				"@a5f1e145-463e-41fc-aef8-eb9b320407b4": {
					"AssetType": "Task",
					"Name": "My Task",
					"#ContextOid": "@38c17c5c-8ca1-4a08-9ca0-74622a703b48"
				},
				"error": {
					"message": "Invalid OID token: @38c17c5c-8ca1-4a08-9ca0-74622a703b48",
					"sourceCommandIndex": 0
				}
			}
		],
		"count": 4
	},
	"queryResult": {
		"results": [],
		"count": -1
	}
}
```

* Notice that objects returned in the `commandFailures.commands` property are in the form of complete commands. In this particular example, you would be able to edit the `Scope` value to point to an actual scope and resubmit either the original payload that had the nested assets, or simply submit the array of four commands in the failure details. Since the descendant nodes have been auto-aliased by the server and linearized, they will get processed properly by reference when resubmitted. The special `#ContextOid` keys that the server generated tell the server how to relate the descendant assets back to original hierarchy from the source command.
* Also notice that each failure has a `sourceCommandIndex` property that identifies a zero-based index of the command that generated this error from your original payload. Because our original payload contained nested assets, each of these commands has `0` for this value.

