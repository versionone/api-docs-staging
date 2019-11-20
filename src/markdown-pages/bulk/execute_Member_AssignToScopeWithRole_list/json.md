## Execute Member.AssignToScopeWithRole operation for list of scopes

Demonstrates how to assign multiple scopes to a member along with scope-specific roles the member will have for each of the assigned scopes.


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
      "Name='memberForScope1'"
    ],
    "execute": "Delete"
  },
  {
    "from": "Scope",
    "filter": [
      "Name='Project 1 for Member.AssignToScopeWithRole','Project 2 for Member.AssignToScopeWithRole'"
    ],
    "execute": "Delete"
  },
  {
    "AssetType": "Scope",
    "Name": "Project 1 for Member.AssignToScopeWithRole",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-20T20:56:06.561Z"
  },
  {
    "AssetType": "Scope",
    "Name": "Project 2 for Member.AssignToScopeWithRole",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-20T20:56:06.561Z"
  },
  {
    "AssetType": "Member",
    "Name": "memberForScope1",
    "Password": "memberForScope1",
    "Nickname": "memberForScope1",
    "Username": "memberForScope1",
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
  "from": "Member:1088",
  "execute": {
    "op": "AssignToScopeWithRole",
    "list": [
      {
        "Scope": "Scope:1086",
        "Role": "Role:3",
        "IsOwner": true
      },
      {
        "Scope": "Scope:1087",
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
  "requestId": "e08066c8-31fd-43f0-a313-523252793ff9",
  "createdDate": "2019-11-20T20:56:06.8228258Z",
  "completedDate": "2019-11-20T20:56:06.8408256Z",
  "duration": "00:00:00.0179998",
  "durationSeconds": 0.0179998,
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
      "Member:1088",
      "Member:1088"
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

* Notice that the `assetsOperatedOn.oidTokens` array property contains the same token twice. This is because in this example we invoked the `Member.AssignToScopeWithRole` operation on the same member, passing different scope oids each time.

