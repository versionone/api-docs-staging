## Execute Member.AssignToScopeWithRole operation for single scope

Demonstrates how to assign a single scope to a member along with a scope-specific role the member will have for assigned scope.


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
      "Name='memberForSoloScope'"
    ],
    "execute": "Delete"
  },
  {
    "from": "Scope",
    "filter": [
      "Name='Solo project for Member.AssignToScopeWithRole'"
    ],
    "execute": "Delete"
  },
  {
    "AssetType": "Scope",
    "Name": "Solo project for Member.AssignToScopeWithRole",
    "Parent": "Scope:0",
    "BeginDate": "2019-11-20T20:51:00.341Z"
  },
  {
    "AssetType": "Member",
    "Name": "memberForSoloScope",
    "Password": "memberForSoloScope",
    "Nickname": "memberForSoloScope",
    "Username": "memberForSoloScope",
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
  "from": "Member:1082",
  "execute": {
    "op": "AssignToScopeWithRole",
    "args": {
      "Scope": "Scope:1081",
      "Role": "Role:3",
      "IsOwner": true
    }
  }
}
```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "a136c5fb-4cdc-4ace-8e9e-826fade360fc",
  "createdDate": "2019-11-20T20:51:00.505373Z",
  "completedDate": "2019-11-20T20:51:00.5143698Z",
  "duration": "00:00:00.0089968",
  "durationSeconds": 0.0089968,
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
      "Member:1082"
    ],
    "count": 1
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

* Notice that the `assetsOperatedOn.oidTokens` array property contains a single member token. This is because in this example we invoked the `Member.AssignToScopeWithRole` operation once on the member for a single scope.

