
# V1CreateUserRequest


## Properties

Name | Type
------------ | -------------
`name` | string
`displayName` | string
`email` | string
`pictureUrl` | string

## Example

```typescript
import type { V1CreateUserRequest } from ''

// TODO: Update the object below with actual values
const example = {
  "name": null,
  "displayName": null,
  "email": null,
  "pictureUrl": null,
} satisfies V1CreateUserRequest

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1CreateUserRequest
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


