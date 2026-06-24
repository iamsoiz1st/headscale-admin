
# V1CreatePreAuthKeyRequest


## Properties

Name | Type
------------ | -------------
`user` | string
`reusable` | boolean
`ephemeral` | boolean
`expiration` | Date
`aclTags` | Array&lt;string&gt;

## Example

```typescript
import type { V1CreatePreAuthKeyRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "user": null,
  "reusable": null,
  "ephemeral": null,
  "expiration": null,
  "aclTags": null,
} satisfies V1CreatePreAuthKeyRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CreatePreAuthKeyRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


