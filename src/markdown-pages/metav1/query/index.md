## Query All

This endpoint retrieves a description of all AssetTypes like `Story`, `Defect`, `Member`.

#### HTTP Request

`GET http://V1Host/V1Instance/meta.v1`

#### HTTP Response
```json
{
	"HREF": "/V1Instance/meta.v1/",
	"Version": "18.2.5.14",
	"AssetTypes": {
		"AssetType": {
			"_type": "AssetType",
			"Name": "AssetType",
			"Token": "AssetType",
			"DisplayName": "AssetType'AssetType",
			"Abstract": false,
			"DefaultOrderBy": {
				"href": "/V1Instance/meta.v1/AssetType/Order",
				"tokenref": "AssetType.Order"
			},
			"DefaultDisplayBy": {
				"href": "/V1Instance/meta.v1/AssetType/Name",
				"tokenref": "AssetType.Name"
			},
			"ShortName": {
				"href": "/V1Instance/meta.v1/AssetType/Name",
				"tokenref": "AssetType.Name"
			},
			"Name": {
				"href": "/V1Instance/meta.v1/AssetType/Name",
				"tokenref": "AssetType.Name"
			},
			"Attributes": {
				"AssetType.ID": {
					"_type": "AttributeDefinition",
					"Name": "ID",
					"Token": "AssetType.ID",
					"DisplayName": "AttributeDefinition'ID'AssetType",
					"AttributeType": "Relation",
					"IsReadOnly": true,
					"IsRequired": false,
					"IsMultivalue": false,
					"IsCanned": true,
					"IsCustom": false,
					"ReciprocalRelation": {
						"href": "/V1Instance/meta.v1/AssetType/ID",
						"tokenref": "AssetType.ID"
					},
          ...
}
```