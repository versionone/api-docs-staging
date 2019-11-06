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
BeginDate: 2019-11-05T21:29:26.115Z
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

from: Scope:1253
execute:
 op: AssignMemberWithRole
 list:
 - Member: Member:1254
   Role: Role:3
   IsOwner: true
 - Member: Member:1255
   Role: Role:7
   IsOwner: false

```

#### HTTP Response 

Expect a result similar to this:

```json
{
	"requestId": "4f5350ab-7d5c-4440-b1ed-f1e68fd101b2",
	"createdDate": "2019-11-05T21:29:26.6749541Z",
	"completedDate": "2019-11-05T21:29:26.7319586Z",
	"duration": "00:00:00.0570045",
	"durationSeconds": 0.0570045,
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
			"Scope:1253",
			"Scope:1253"
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

