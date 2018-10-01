## Asset

A **System Asset** is a core business object in the VersionOne® Lifecycle model. Each asset represents the stories/backlog items, defects, sprints/iterations, and the members who use the system. The diagram below illustrates the relationship of these assets to one another and how they work together to help you manage your workflow.

## Asset Types

Asset types describe the "classes" of data available. Each asset type contains a collection of attribute definitions, a collection of operations, and a number of useful attribute definitions for things like sorting. Asset types form an inheritance hierarchy, such that each asset type inherits attribute definitions, operations, and rules from its parent asset type. Those asset types at the leaves of this hierarchy are concrete, whereas asset types with children asset types are abstract. Assets are all instances of concrete asset types. Asset types are identified by unique names.

By way of example, Story and Defect are concrete asset types. On the other hand, Workitem is an abstract asset type, from which Story and Defect ultimately derive.
    
Most asset types have the same name as found in the application user interface. A Defect in the user interface is also a Defect as an asset type. However, many of the most common asset types have a different name. 

<br />

![Asset Diagram](./../../images/asset-diagram.png)


## Asset States

Asset states represent system-known life-cycle stage of an asset. The UI typically only show assets that are not "Dead".

State | Name | Meaning
----- | ---- | -------
0 | Future | The asset has been assigned to a user-defined workflow status.
64 | Acive | The asset has been closed or quick-closed.
128 | Closed | The asset has been closed or quick-closed.
200 | Template (Dead) | The asset is only used to create new copies as part of creating from Templates or Quick Add.
208	 | Broken Down (Dead) | The asset was converted to an Epic for further break-down.
255 | Deleted (Dead) | The asset has been deleted.

<aside class="notice">
    <div class="content">
        In Lifecycle deleted assets are not permantely erased, but instead marked with an Asset State indicating they have no value to the system. If the asset is significant or has importance consider Closing it when it has reached maturity instead!
    </div>
</aside>

## Attribute Definitions

Attribute definitions describe the properties that "make up" each asset type. Each attribute definition describes the type of data it can contain as well as whether it is required, read only, multi-value, and many other qualities. Attribute definitions are identified by a name that is unique within its asset type. Attribute definitions are defined as either value types or relations to other assets. Further, relation attribute definitions can be either single-value or multi-value.

For example, the `Estimate` attribute definition on the `Workitem` asset type is a scalar (specifically, a Number). On the other hand, the `Workitem` asset type's `Scope` attribute definition is a single-value relation (to a Scope asset). The reverse relation, `Workitems` on the `Scope` asset type, is a multi-value relation (to `Workitem` assets).

## Oid

An Oid is a unique system identifier that is not typically visible in the VersionOne user interface. **Oid Tokens** are composed of the name of an asset type and an integer ID. For example, `Member:20` identifies a `Member` asset with ID of 20.

This is not the same as the user visible Number attribute available on many (but not all) assets.