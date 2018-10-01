<span class="badge">USE: ~/api/asset</span>

This endpoint provides read, write, and update access to assets. This endpoint queries for simple or complex sets of information, updates information, and executes system-defined operations.

Query Params | Meaning
----- | -------
asOf | Use the asof query parameter to retrieve data as it existed at some point in time.
filter | The filter parameter filters results to a subset that meet specific criteria. Whenever possible, use where or filter to explicitly choose specific assets, thereby reducing the load put on the application
findin | Used in conjunction with the find parameter, findin specifies the attributes to check for the find substring. The findin parameter is optional. If omitted, a base set of attributes will be searched. This free text search is relatively expensive for VersionOne, so when the exact contents of a field should be matched, use the where parameter instead.
from | Used in conjunction with the find parameter, findin specifies the attributes to check for the find substring. The findin parameter is optional. If omitted, a base set of attributes will be searched. This free text search is relatively expensive for VersionOne, so when the exact contents of a field should be matched, use the where parameter instead.
group | The group parameter organizes results by value within an attribute. For example, stories can be grouped by status.
op | The Operation op parameter calls an action for a single asset. For example, to delete an asset you must execute the Delete operation on the target asset. When executing an operation, a request must be an HTTP POST.
page | Since some results from a query may be very large, you may limit the number of returned results or start retrieving results starting from a particular index. Results are returned in ID order if no other sorting is applied, so paging will always be deterministic. The page parameter specifies how many assets you want to retrieve and where to start in the list of assets. The page start represents the number of items from which to start and is zero indexed. It is an item count, not a page count. The page size is the maximum number of items to return on a page. For example if you have 100 assets and want to see the first 10, you would use a page start of 0, and a page size of 10. To retrieve the second page simply ask for a page start of 10 with a page size of 10, and so on.
select | Without the select parameter, queries return a default set of attributes. The select parameter specifies which attributes to provide in the response. Whenever possible, use select to explicitly choose specific attributes, thereby reducing the load put on the application.
sort | Any attribute definition can be used to sort the results of a query. Tokens can be preceded by + or - to indicate ascending or descending sort respectively.
where | Without the where parameter, queries return the entire set of from assets. The where parameter filters the results to a subset that meet specific criteria. Whenever possible, use where or filter to explicitly choose specific assets, thereby reducing the load put on the application.
with | Without the where parameter, queries return the entire set of from assets. The where parameter filters the results to a subset that meet specific criteria. Whenever possible, use where or filter to explicitly choose specific assets, thereby reducing the load put on the application.

### Dichotomy of the Reponse

#### Assets
When requesting more than a single asset, the assets node helps navigate over the set of assets. The attributes `total`, `pageSize`, and `pageStart` can be used to navigate through a large set.

#### Asset
The Asset node has an `href` attribute containing the URL path used to retrieve this asset. The asset node has an `id` attribute with the [OID Token](https://community.versionone.com/VersionOne_Connect/Developer_Library/Getting_Started/Platform_Concepts/OID_Token) for this asset.

#### Attribute
`Name` refers to an [Attribute Definition](https://community.versionone.com/VersionOne_Connect/Developer_Library/Getting_Started/Platform_Concepts/Attribute_Definition).

#### Relation
`Name` refers to an [Attribute Definition](https://community.versionone.com/VersionOne_Connect/Developer_Library/Getting_Started/Platform_Concepts/Attribute_Definition). Contains another asset node with an `idref` to the [OID Token](https://community.versionone.com/VersionOne_Connect/Developer_Library/Getting_Started/Platform_Concepts/OID_Token) of the referenced asset.

### Request Body
Both creating and updating assets via rest-1.v1 has a POST body structured with a collection of attributes. When creating, it can contain Attributes that will exist on the new asset, and when updating it can contain Attributes that will modify an existing Asset.

The keys are valid Attribute names for a given Asset. The value of each key is valid based on the following:

* *Scalars*: like `Name`:
```
{
    "value": "New Name",
    "act": "set"
}
```

* *Single-value relation*: like `Scope`:
```
{
    "value": "Scope:0",
    "act": "set"
}
```

* *Multi-value relations*: like `ChangeSets` take an array. Each element of the array specifies an asset to add or remove from the relation and have the shape:  
```
[
    { "idref": "<OidToken>", "act": "add" }
    { "idref": "<OidToken>", "act": "remove" }
]
```