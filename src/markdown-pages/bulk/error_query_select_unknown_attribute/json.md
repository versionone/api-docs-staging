## Error: Query select unknown attribute

Demonstrates how the API will return a failure when you attempt to invoke an unknown attribute definition on an asset.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "@user-alias": {
    "from": "Scope",
    "select": [
      "MuddleBubble"
    ]
  }
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "9a4b517a-06a3-407f-9ff1-551e0343e382",
  "createdDate": "2019-11-21T15:26:14.0465326Z",
  "completedDate": "2019-11-21T15:26:14.0495334Z",
  "duration": "00:00:00.0030008",
  "durationSeconds": 0.0030007999999999996,
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

