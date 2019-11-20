## Execute Scope.AssignMemberWithRole operation for list of Members

Demonstrates how to use a single command to assign multiple Members to a Scope along with Scope-specific roles each Member will have for the target Scope.


#### Setup

For the context of this example, the following request will setup the instance with the needed starting conditions:

##### HTTP Request

`POST http://V1Host/V1Instance/api/asset`

###### Payload:

```yaml

from: Member
filter:
- Name='scopeListMember1','scopeListMember2'
execute: Delete
---
AssetType: Scope
Name: Project for List of Members
Parent: Scope:0
BeginDate: 2019-11-20T20:50:16.638Z
---
AssetType: Member
Name: scopeListMember1
Password: scopeListMember1
Nickname: scopeListMember1
Username: scopeListMember1
DefaultRole: Role.Name'Observer
---
AssetType: Member
Name: scopeListMember2
Password: scopeListMember2
Nickname: scopeListMember2
Username: scopeListMember2
DefaultRole: Role.Name'Observer

```



#### HTTP Request 

The following request invokes the behavior:

`POST http://V1Host/V1Instance/api/asset`

##### Payload:
```yaml

from: Scope:1067
execute:
 op: AssignMemberWithRole
 list:
 - Member: Member:1068
   Role: Role:3
   IsOwner: true
 - Member: Member:1069
   Role: Role:7
   IsOwner: false

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "b2fa31a4-f5ef-4631-9495-538e2d5ad4da",
  "createdDate": "2019-11-20T20:50:16.84034Z",
  "completedDate": "2019-11-20T20:50:16.8663387Z",
  "duration": "00:00:00.0259987",
  "durationSeconds": 0.0259987,
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
      "Scope:1067",
      "Scope:1067"
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

