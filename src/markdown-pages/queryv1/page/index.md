## Page

You may limit the number of returned results, or start retrieving results starting from a particular index.

Results are returned in ID order if no other sorting is applied, so paging will always be deterministic.

Paging only works for the topmost query. You cannot limit/page the results of subselections.

#### HTTP Request

`POST http://V1Host/V1Instance/query.v1`

```json
{
    "from": "Story",
    "select": [ 
        "Name"
    ],
    "page": {
        "start": "0",
        "size": "5"
    }
}
```

#### HTTP Response

```json
[
  [
    {
      "_oid": "Story:1234",
      "Name": "Story One"
    },
    {
      "_oid": "Story:2345",
      "Name": "Story Two"
    },
    {
      "_oid": "Story:3456",
      "Name": "Story Three"
    },
    {
      "_oid": "Story:4567",
      "Name": "Story Four"
    },
    {
      "_oid": "Story:5678",
      "Name": "No more than page size of 5!"
    }
  ]
]
```