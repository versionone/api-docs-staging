## Execute Scope.AssignMemberWithRole operation for list of Members

Demonstrates how to use a single command to assign multiple Members to a Scope along with Scope-specific roles each Member will have for the target Scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```json
[
  {
    "from": "Member",
    "filter": [
      "Name='scopeListMember1','scopeListMember2'"
    ],
    "execute": "Delete"
  },
  {
    "AssetType": "Scope",
    "Name": "Project for List of Members",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-20T20:50:16.907Z"
  },
  {
    "AssetType": "Member",
    "Name": "scopeListMember1",
    "Password": "scopeListMember1",
    "Nickname": "scopeListMember1",
    "Username": "scopeListMember1",
    "DefaultRole": "Role.Name'Observer"
  },
  {
    "AssetType": "Member",
    "Name": "scopeListMember2",
    "Password": "scopeListMember2",
    "Nickname": "scopeListMember2",
    "Username": "scopeListMember2",
    "DefaultRole": "Role.Name'Observer"
  }
]
```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```json
{
  "from": "Scope:1070",
  "execute": {
    "op": "AssignMemberWithRole",
    "list": [
      {
        "Member": "Member:1071",
        "Role": "Role:3",
        "IsOwner": true
      },
      {
        "Member": "Member:1072",
        "Role": "Role:7",
        "IsOwner": false
      }
    ]
  }
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "fee67e0a-5bc8-4997-a531-c78c875b3029",
  "createdDate": "2019-11-20T20:50:17.1563425Z",
  "completedDate": "2019-11-20T20:50:17.188342Z",
  "duration": "00:00:00.0319995",
  "durationSeconds": 0.0319995,
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
      "Scope:1070",
      "Scope:1070"
    ],
    "count": 2
  },
  "commandFailures": {
    "commands": [],
    "count": 0
  },
  "queryResult": {
    "results": [],
    "count": -1
  }
}
```

* Notice that the `assetsOperatedOn.oidTokens` array property contains the same token twice. This is because in this example we invoked the `Scope.AssignMemberWithRole` operation on the same scope, passing different member oids each time.

