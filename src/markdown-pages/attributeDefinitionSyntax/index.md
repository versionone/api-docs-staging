An attribute is a single or multi-value property on an asset. For example a Story has an attribute called Reference which contains text, while the Owners attribute is a multi-value relationship which allows multiple people to own a single Workitem asset. Attributes can be very simple such as the previously mentioned Reference attribute or they may be complex including downcasting, filters, and aggregates.

## Projection
Often it is useful to follow a relationship from one asset through another to get another piece of information. For example if you wanted to know the name of a Category attribute on a Story asset you could ask for the attribute Category.Name on a Story and it would return the Name attribute of the StoryCategory which the Story asset relates to.

https://V1Host/V1Instance/rest-1.v1/Data/Story/1000/Category.Name

## Downcast
A Scope asset has a relation called Workitems which points to all the Workitem assets that belong to the given Scope. This includes Story, Defect, Task, and Test asset types. If you wish to only get Story assets you can use downcasting to filter to Workitem assets to a specific type. The following example would return only those Story assets that are in Scope with ID 0.

https://V1Host/V1Instance/rest-1.v1/Data/Scope/0/Workitems:Story

## Filter
In another example you may wish to know all the Workitem assets in a given Scope that are owned by a specific Member. A filtered attribute would help solve this problem. You can use Workitems[Owners='Member:20'] to return only those Workitem assets that are owned by Member with ID 20. An example URL would look like the following.

https://V1Host/V1Instance/rest-1.v1/Data/Scope/0/Workitems[Owners='Member:20']

## Aggregation
Lets say you wanted to get the total number of Workitem assets in a particular Scope. You can use the aggregate portion of an attribute to count the number of Workitem assets. The following example would return the total number of Workitem assets that belong to Scope with ID 0.

https://V1Host/V1Instance/rest-1.v1/Data/Scope/0/Workitems.@Count

## Combination
To combine all of this into a more complex example, you may also wish to get the total Estimate for all Story assets that have an owner and are in a given Scope. Rather than getting all Workitem assets and programmatically sorting them into buckets, the API can help you. You can follow a relationship, filter the relationship, and then finally use an aggregate to return the final count all using a single attribute on a Scope asset.

The corresponding attribute would be something like this: Workitems:Story[Owners.@Count!='0'].Estimate.@Sum In this example the Scope.Workitems attribute will be downcast to only include Story assets, then filtered where the number of Owners is not zero. Once the filtered list is determined, then Estimate for those Story assets will be pulled and finally a single sum will be returned. This attribute will have a URL like the following.

https://V1Host/V1Instance/rest-1.v1/Data/Scope/0/Workitems:Story[Owners.@Count!='0'].Estimate.@Sum