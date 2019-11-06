## Error: Create Epic and Subs where Scope is invalid causes cascade of four failures

Demonstrates how the API will return a cascade of failures when an invalid Scope is specified for a top-level Epic that has a collection of Subs. The failure messages can be modified and resubmitted to the API to create the original request's Assets.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

AssetType: Epic
Scope: Scope:9999
Name: My Epic on a Scope that DOES NOT EXIST which will produce a cascade of four failures!
Subs:
- AssetType: Story
  Name: My Story
  Children:
  - AssetType: Test
    Name: My Test
  - AssetType: Task
    Name: My Task

```

#### HTTP Response 

Expect a result similar to this:

```json
{
	"requestId": "97423220-e923-4b14-a9be-3d4bbeee36fe",
	"createdDate": "2019-11-05T21:28:16.5040456Z",
	"completedDate": "2019-11-05T21:28:16.5664309Z",
	"duration": "00:00:00.0623853",
	"durationSeconds": 0.0623853,
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
				"@2813a2a6-87bb-4cb3-bd2d-9ae7165c94bb": {
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
				"@7ff4fba2-873b-4b5e-b0a3-78f0efeb03f6": {
					"AssetType": "Story",
					"Name": "My Story",
					"#ContextOid": "@2813a2a6-87bb-4cb3-bd2d-9ae7165c94bb"
				},
				"error": {
					"message": "Invalid OID token: @2813a2a6-87bb-4cb3-bd2d-9ae7165c94bb",
					"sourceCommandIndex": 0
				}
			},
			{
				"@69faaf2b-7543-43dd-97c7-4a931aada69b": {
					"AssetType": "Test",
					"Name": "My Test",
					"#ContextOid": "@7ff4fba2-873b-4b5e-b0a3-78f0efeb03f6"
				},
				"error": {
					"message": "Invalid OID token: @7ff4fba2-873b-4b5e-b0a3-78f0efeb03f6",
					"sourceCommandIndex": 0
				}
			},
			{
				"@fff5dcb2-f7eb-4c1e-9e4d-fc913888994f": {
					"AssetType": "Task",
					"Name": "My Task",
					"#ContextOid": "@7ff4fba2-873b-4b5e-b0a3-78f0efeb03f6"
				},
				"error": {
					"message": "Invalid OID token: @7ff4fba2-873b-4b5e-b0a3-78f0efeb03f6",
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

