## Execute Operation Scope.AssignMemberWithRole for list of Members by OID Token

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
BeginDate: 2019-11-06T19:57:04.330Z
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

from: Scope:1265
execute:
 op: AssignMemberWithRole
 list:
 - Member: Member:1266
   Role: Role:3
   IsOwner: true
 - Member: Member:1267
   Role: Role:7
   IsOwner: false

```

#### HTTP Response 

Expect a result similar to this:

```json
{
  "requestId": "a9ed79a5-ce9b-4011-b0ce-0a68348894fe",
  "createdDate": "2019-11-06T19:57:04.9039905Z",
  "completedDate": "2019-11-06T19:57:04.9544909Z",
  "duration": "00:00:00.0505004",
  "durationSeconds": 0.0505004,
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
      "Scope:1265",
      "Scope:1265"
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

