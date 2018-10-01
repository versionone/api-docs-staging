## Query

This endpoint retrieves a description of an AssetType like `Story`, `Defect`, `Member` or any Asset in the system.

#### HTTP Request

`GET http://V1Host/V1Instance/meta.v1/:assetType`

#### HTTP Response

```json
{
	"_type": "AssetType",
	"HREF": "/V1Instance/meta.v1/Member",
	"Version": "18.2.5.14",
	"Name": "Member",
	"Token": "Member",
	"DisplayName": "AssetType'Member",
	"Abstract": false,
	"Base": {
		"nameref": "BaseAsset",
		"href": "/V1Instance/meta.v1/BaseAsset"
	},
	"DefaultOrderBy": {
		"href": "/V1Instance/meta.v1/Member/Name",
		"tokenref": "Member.Name"
	},
	"DefaultDisplayBy": {
		"href": "/V1Instance/meta.v1/Member/Name",
		"tokenref": "Member.Name"
	},
	"ShortName": {
		"href": "/V1Instance/meta.v1/Member/Nickname",
		"tokenref": "Member.Nickname"
	},
	"Name": {
		"href": "/V1Instance/meta.v1/Member/Name",
		"tokenref": "Member.Name"
	},
  ...
}
```