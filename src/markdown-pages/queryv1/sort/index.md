## Sort

Sort by selection tokens with ascending `+` or descending `-` order.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Estimate"
    ],
    "sort": [
      "+Name",
      "-Estimate"
    ]
}
```
#### HTTP Response

```json
[
  [
    {
      "_oid": "Story:1234",
      "Name": "Story A",
      "Estimate": "3"
    },
    {
      "_oid": "Story:1234",
      "Name": "Story A",
      "Estimate": "1"
    },
    {
      "_oid": "Story:4567",
      "Name": "Story B",
      "Estimate": "5"
    }
  ]
]
```
