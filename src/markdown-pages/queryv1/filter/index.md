## Filter

Filter on a collection of filter tokens which apply comparison operators to attributes and values.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name",
        "Owners.@Count"
    ],
    "filter": [
      "Owners.@Count>'2'"
    ]
}
```

#### HTTP Response

```json
[
  [
    {
      "_oid": "Story:1234",
      "Name": "Story Two",
      "Owners.@Count": "3"
    },
    {
      "_oid": "Story:4567",
      "Name": "Story Two",
      "Owners.@Count": "1"
    }
  ]
]
```