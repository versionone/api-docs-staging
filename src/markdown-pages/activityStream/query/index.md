## Query Activity

View the activities for asset with the given `OidToken`

#### HTTP Request

`GET http://V1Host/V1Instance/api/ActivityStream/:OidToken`

#### HTTP Response

```json
[
    {
        "body": {
            "actor": {
                "id": "Member:1065",
                "assetType": "Member",
                "displayName": "Tammy Coder",
                "username": "tammy",
                "email": "tammy.coder@company.com",
                "avatar": "Image:1936"
            },
            "verb": "Updated",
            "object": {
                "id": "Story:1220",
                "assetType": "Story",
                "displayName": "Delete RMA",
                "number": "S-01047",
                "assetState": "Active",
                "scope": "Scope:1258"
            },
            "time": "2014-04-22T14:11:01.1175003Z",
            "summary": "Tammy Coder Updated Story 'Delete RMA'",
            "provider": {
                "stream": "MetaStream",
                "commitSeq": "237",
                "commitId": "01a7b036-01f9-47a1-86b0-17a9c4c25544"
            },
            "target": [
                {
                    "name": "Timebox",
                    "newValue": {
                        "id": "Timebox:1785",
                        "assetType": "Timebox",
                        "displayName": "Sprint 6",
                        "assetState": "Future"
                    },
                    "oldValue": "",
                    "verb": "Set",
                    "summary": "Timebox was Set to 'Sprint 6'"
                },
                {
                    "name": "Estimate",
                    "newValue": "3.00",
                    "oldValue": "2.00",
                    "verb": "Set",
                    "summary": "Estimate was Set to '3.00'"
                },
                {
                    "name": "Priority",
                    "newValue": "Medium",
                    "oldValue": "High",
                    "verb": "Set",
                    "summary": "Priority was Set to 'Medium'"
                },
                {
                    "name": "Risk",
                    "newValue": "Low",
                    "oldValue": "High",
                    "verb": "Set",
                    "summary": "Risk was Set to 'Low'"
                }
            ]
        }
    }
]
```