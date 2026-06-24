
# V1User


## Properties

Name | Type
------------ | -------------
`id` | string
`name` | string
`createdAt` | Date
`displayName` | string
`email` | string
`providerId` | string
`provider` | string
`profilePicUrl` | string

## Example

```typescript
import type { V1User } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "name": null,
  "createdAt": null,
  "displayName": null,
  "email": null,
  "providerId": null,
  "provider": null,
  "profilePicUrl": null,
} satisfies V1User

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1User
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


