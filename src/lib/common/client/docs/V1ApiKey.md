
# V1ApiKey


## Properties

Name | Type
------------ | -------------
`id` | string
`prefix` | string
`expiration` | Date
`createdAt` | Date
`lastSeen` | Date

## Example

```typescript
import type { V1ApiKey } from ''

// TODO: Update the object below with actual values
const example = {
  "id": null,
  "prefix": null,
  "expiration": null,
  "createdAt": null,
  "lastSeen": null,
} satisfies V1ApiKey

console.log(example)

// Convert the instance to a JSON string
const exampleJSON: string = JSON.stringify(example)
console.log(exampleJSON)

// Parse the JSON string back to an object
const exampleParsed = JSON.parse(exampleJSON) as V1ApiKey
console.log(exampleParsed)
```

[[Back to top]](#) [[Back to API list]](../README.md#api-endpoints) [[Back to Model list]](../README.md#models) [[Back to README]](../README.md)


