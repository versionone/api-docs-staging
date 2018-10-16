<span class="badge">COMING SOON</span>

Webhook subscription allow you to define what events in VersionOne can fire webhooks.

By supplying a URL to an external system and a list of events that trigger a webhook, you can inform that external system anytime the event occurs in VersionOne.  

You are able to create and edit webhooks to be as broad or specific as you'd like. For example, you can use webhooks to receive an HTTP request to the external system anytime any story changes it status, or anytime Story in Project A that is owned by Susan has a Status change.

By configuring the event with `from`, `filter`, `with`, and `select`, you can get very specific about what changes you want to be notified about in VersionOne.

<aside class="notice">
    <div class="content">
        In the first release of webhooks you will only be allowed to have 5 enabled webhook subscriptions at a time! Hang tight for looser restrictions.
    </div>
</aside>

## External System

The external system can be configured by adding a `url` to the webhook subscription.
If the external system requires an authorization token, you can add it as an `authorizationHeader`. This field will be sent as the HTTP Authorization Header each time an event triggers the webhook to be sent.

The `webhookId` will be helpful for you to query or update this webhook later, so make it meaningful and unique, if possible.

Add a short `description` to keep track of what this webhook is used for, such as where this webhook will be sent and why.

<aside class="notice">
    <div class="content">
        Responding back to VersionOne with any status code other than a HTTP Status Code 200 OK will result in a failure to send. Five consecutive failed deliveries can cause the webhook subscription to be disabled, so check the retry count on your subscription if you think your webhooks stopped working.
    </div>
</aside>

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

The webhook itself will include many details about the event that has occured within VersionOne. 

In each event object, the webhook will include the webhookID, which will allow the external system to identify which webhook subscription the response is associated with. It will also include a sequenceId, which will allow the system to determine the order in which the events occured, along with the timestamp. This means your external system may receive the events out of order, but you can used the sequence id to garuantee the order is accurate!

The webhook will also include information about the instigator, or the user who enacted the change in VersionOne that triggered the webhook, such as their name, role, email, and more. 

Next, the webhook contains the target asset and changes, which will specify the asset on which the changes were made, as well as what those changes were. 

The final section is the snapshot, which includes the informations requested in the `select` field of the eventType definition in your Webhook Subscription. Say you want webhooks fired when a story status changes, but when you receive the webhook you want to know specific details about the story whose status changed. By including attributes of the Story in your `select` you can receive that projection of the story in the `snapshot` in the same shape as the results of the `~/api/query.v1` request.

```json
[
  {
    "webhookId": "YYY",
    "sequenceId": 1,
    "eventType": "AssetChanged",
    "timestamp": "UTC timestamp",
    "instigator": {
      "_oid": "Member:20",
      "href": "https://V1Host/V1Instance/assetdetail.v1?oid=Member:20",
      "name": "Administrator",
      "nickName": "Adam",
      "email": "admin@admin.com",
      "role": "Role:2",
      "avatar": "https://V1Host/V1Instance/Image.mvc/Show?imageOid=Image:192923"
    },
    "targetAsset": {
      "_oid": "Story:123",
      "assetType": "Story",
      "href": "https://V1Host/V1Instance/assetdetail.v1?oid=Story:123",
    }
    "changes": [
      {
        "name": "Name",
        "old": "Original Name",
        "new": "New Name"
      },
      {
        "name": "Description",
        "old": "<p>old description</p>",
        "new": "<p>new description</p>"
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