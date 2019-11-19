## Error: Query where with unknown attribute

Demonstrates how the API will return a failure when you attempt to query using a where clause referencing an attribute that is unknown on the target asset type.




#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

"@user-alias":
  from: Scope
  where:
    MuddleBubble: BubbleMuddle
  select:
  - Name

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "4ebcc5ef-c142-4e88-947e-3181abd5f70f",
  "createdDate": "2019-11-19T22:29:09.2449485Z",
  "completedDate": "2019-11-19T22:29:09.2459482Z",
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

