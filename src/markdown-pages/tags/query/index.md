## Query

The following example returns usage information for the specified `<tag>`. It will let you know based on your scope visibility the total # of usages of the tag count vs the usage that are visible to your member visibleCount.

#### HTTP Request

`GET http://V1Host/V1Instance/api/tags?tag=<tag>`

#### HTTP Response
```json
{
  "tag": "UX",
  "count": 1,
  "visibleCount": 1
}
```