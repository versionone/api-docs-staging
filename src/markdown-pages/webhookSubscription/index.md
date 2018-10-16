Webhook subscription allow you to define what events in VersionOne can fire webhooks.

By supplying a URL to an external system and a list of events that trigger a webhook, you can inform that external system anytime the event occurs in VersionOne.  

You are able to create and edit webhooks to be as broad or specific as you'd like. For example, you can use webhooks to receive an HTTP request to the external system anytime any story changes it status, or anytime Story in Project A that is owned by Susan has a Status change.

By configuring the event with `from`, `filter`, `with`, and `select`, you can get very specific about what changes you want to be notified about in VersionOne.

## External System

The external system can be configured by adding a `url` to the webhook subscription.
If the external system requires an authorization token, you can add it as an `authorizationHeader`. This field will be sent as the HTTP Authorization Header each time an event triggers the webhook to be sent.

The `webhookId` will be helpful for you to query or update this webhook later, so make it meaningful and unique, if possible.

Add a short `description` to keep track of what this webhook is used for, such as where this webhook will be sent and why.

## Event Types

VersionOne keeps track of any time an Asset is created, or updated. This allows us to create powerful webhook events modeled around the Assets and their Attributes. Each event has a `type` from one of the following:

* AssetCreated
* AssetUpdated

If I want a webhook triggered any time a Story changes, my event would look like:
```json
{
  "type": "AssetChanged",
  "from": "Story"
}
```

You can also include an array of `attributes` that will allow you to specify which attributes of the asset you'd like to trigger webhooks. Omitting the `attributes` field will notify you of any changes to the asset. 


If I want a webhook triggered any time a Story Status changes, my event would look like:
```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attributes": ["Status"]
}
```

We can enhance our event even more by filtering out Stories that don't meet a specified criteria using the `filter` and `with` fields. If I only want to know about Story Status changes for stories in my Project, the event would look like:

```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attributes": ["Status"],
  "filter": [
    "Scope=$Scope"
  ],
  "with": {
    "$Scope": "Scope:0"
  }
}
```

When the webhook is fired, we might want details about the Story whose Status changed. You can use the `select` field to pick which of the Story's Attributes will be included in addition to the Asset's Oid. For example, if you want to know the Name of the Story and the Name of each of Owner of the Story, your event would look like:

```json
{
  "type": "AssetChanged",
  "from": "Story",
  "attribute": ["Status"],
  "filter": [
    "Scope=$Scope"
  ],
  "with": {
    "$Scope": "Scope:0"
  },
  "select": [
    "Name",
    "Owners.Name"
  ]
}
```

## Webhook

The webhook itself will include many details about the event that has occured. 

In each event object, the webhook will include the webhookID, which will allow the external system to identify which webhook subscription the response is associated with. It will also include a sequenceId, which will allow the system to determine the order in which the events occured, along with the timestamp.

The webhook will also include information about the instigator, or the user who triggered the webhook, such as their name, role, and more. 

Next, the webhook contains the target asset and changes, which will specify the asset on which the changes were made, as well as what those changes were. 

The final section is the snapshot, which includes the informations requested in the `select` field of the eventType definition in your Webhook Subscription.

```json
[
  {...event},
  {...event},
  {
    "webhookId": "YYY",
    "sequenceId": 1,
    "eventType": "AssetChanged",
    "timestamp": "UTC date",
    "instigator": {
      "_oid": "Member:20",
      "href": "https://V1Host/V1Instance/assetdetail.v1?oid=Member:20",
      "Name": "Administrator",
      "NickName": "Adam",
      "Email": "admin@admin.com",
      "Role": "Role:2",
      "Avatar": "https://V1Host/V1Instance/Image.mvc/Show?imageOid=Image:192923"
    },
    "targetAsset": {
      "_oid": "Story:123",
      "AssetType": "Story",
      "href": "https://V1Host/V1Instance/assetdetail.v1?oid=Story:123",
    }
    "changes": [
      {
        "Name": "Name",
        "Old": "Original Name",
        "New": "New Name"
      }
    ],
    "snapshot": [
      [
        {
          "_oid": "Story:123",
          "Owners.Name" [
            "Administrator"
          ],
          "Owners.ID": [
            { "_oid": "Member:20" }
          ],
          "SubsAndMe.Owners.Name": [
            "Administrator"
          ]
        }
      ]
    ],
  }
]
```