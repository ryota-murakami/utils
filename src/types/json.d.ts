/**
 Matches a JSON array.

 @category Basic
 */
declare type JsonArray = JsonValue[]
/**
 Matches any valid JSON primitive value.

 @category Basic
 */
declare type JsonPrimitive = string | number | boolean | null
/**
 Matches any valid JSON value.

 @see `Jsonify` if you need to transform a type to one that is assignable to `JsonValue`.

 @category Basic
 */
declare type JsonValue = JsonPrimitive | JsonObject | JsonArray
/**
 Matches a JSON object.

 This type can be usxeful to enforce some input to be JSON-compatible or as a super-type to be extended from. Don't use this as a direct return type as the user would have to double-cast it: `jsonObject as unknown as CustomResponse`. Instead, you could extend your CustomResponse type from it to ensure your type only uses JSON-compatible types: `interface CustomResponse extends JsonObject { … }`.

 @category Basic
 */
declare type JsonObject = { [Key in string]?: JsonValue }
