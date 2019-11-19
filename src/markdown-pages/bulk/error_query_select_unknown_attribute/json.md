## undefined

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
  "requestId": "e0ea8cb8-5d88-49aa-b0ab-81dc27d821b4",
  "createdDate": "2019-11-19T21:48:05.2069568Z",
  "completedDate": "2019-11-19T21:48:05.2069568Z",
  "duration": "00:00:00",
  "durationSeconds": 0,
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

