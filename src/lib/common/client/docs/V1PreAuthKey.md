
# V1PreAuthKey


## Properties

Name | Type
------------ | -------------
`user` | [V1User](V1User.md)
`id` | string
`key` | string
`reusable` | boolean
`ephemeral` | boolean
`used` | boolean
`expiration` | Date
`createdAt` | Date
`aclTags` | Array&lt;string&gt;

## Example

```typescript
import type { V1PreAuthKey } from ''

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "id": null,
  "key": null,
  "reusable": null,
  "ephemeral": null,
  "used": null,
  "expiration": null,
  "createdAt": null,
  "aclTags": null,
} satisfies V1PreAuthKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1PreAuthKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


