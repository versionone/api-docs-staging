## Error: Query select unknown attribute

Demonstrates how the API will return a failure when you attempt to invoke an unknown attribute definition on an asset.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

"@user-alias":
  from: Scope
  select:
  - MuddleBubble

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "36124694-2bee-4088-b5cc-f0b0dce7d5a0",
  "createdDate": "2019-11-21T15:26:13.426533Z",
  "completedDate": "2019-11-21T15:26:13.7025335Z",
  "duration": "00:00:00.2760005",
  "durationSeconds": 0.2760005,
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
        "@user-alias": {
          "from": "Scope",
          "select": [
            "MuddleBubble"
          ]
        },
        "error": {
          "message": "Unknown AttributeDefinition: Scope.MuddleBubble",
          "sourceCommandIndex": 0
        }
      }
    ],
    "count": 1
  },
  "queryResult": {
    "results": [],
    "count": -1
  }
}
```

* Notice that object returned in the `commandFailures.commands` property is in the form of a complete command. In this example, you could correct the selected attribute name to reference a legitimate attribute that exists on the Scope asset type.

