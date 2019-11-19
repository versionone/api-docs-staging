## Error: Query where with unknown attribute

Demonstrates how the API will return a failure when you attempt to query using a where clause referencing an attribute that is unknown on the target asset type.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "@user-alias": {
    "from": "Scope",
    "where": {
      "MuddleBubble": "BubbleMuddle"
    },
    "select": [
      "Name"
    ]
  }
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "2cc1e623-9dbe-474e-ac49-9774c8ba2c94",
  "createdDate": "2019-11-19T22:29:09.2679473Z",
  "completedDate": "2019-11-19T22:29:09.2689476Z",
  "duration": "00:00:00.0010003",
  "durationSeconds": 0.0010003,
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
          "where": {
            "MuddleBubble": "BubbleMuddle"
          },
          "select": [
            "Name"
          ]
        },
        "error": {
          "message": "Invalid QueryFilter2 token MuddleBubble='BubbleMuddle'",
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

* Notice that object returned in the `commandFailures.commands` property is in the form of a complete command. In this example, you could correct the where clause to refer to a legitimate attriute definition for the target asset type.

