## Merge Tags

The following example will merge multiple tags into a single tag.  It is possible to merge into an existing tag, or into a new tag.  This will remove all of the tags listed in the MergeFrom array in the Post Data and will add the MergeTo tag to the assets the other tags were removed from.

<aside class="notice">
    <div class="content">
        Merge command is restricted to users that have Project Admin access and will only work for projects they have scope visibility to.  A user cannot remove tags on assets they cannot see or edit in the system.
    </div>
</aside>

#### HTTP Request

`POST http://V1Host/V1Instance/api/tags/command/merge`

```json
{
    "MergeTo" : "Regression Tests",
    "MergeFrom" : ["RegressionTests", "RegTests"]
}
```