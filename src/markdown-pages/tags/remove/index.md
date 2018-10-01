## Remove Tags

The following example will allow you to remove tags from every asset they exist on.

<div class="notice">
    <div class="content">
        Remove command is restricted to users that have Project Admin access and will only work for projects they have scope visibility to. A user cannot remove tags on assets they cannot see or edit in the system.
    </div>
 </div>

#### HTTP Request

`POST http://V1Host/V1Instance/api/tags/command/remove`

```json
{
    "MergeTo" : "Regression Tests",
    "MergeFrom" : ["RegressionTests", "RegTests"]
}
```