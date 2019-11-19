## undefined

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
  "requestId": "083c5336-94d1-460a-b10b-6931a77a42f1",
  "createdDate": "2019-11-19T21:48:05.1829562Z",
  "completedDate": "2019-11-19T21:48:05.1839559Z",
  "duration": "00:00:00.0009997",
  "durationSeconds": 0.0009996999999999999,
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

