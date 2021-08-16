## Warning: Each child in a list should have a unique "key" prop.
ie,each item in the list  rendered using map operator should have a prop called key
value to prop should be *unique* 

- key prop is not accesible in child component
- key gives the element a stable identity
- keys help react understand which item is changed,added or removed
- key prop reduce rerendering of repeated elements,it will help to understand if a component exist and no need to rerender it
- gives efficient update of UI


for lists without id,we can use its index as key prop
### when to use index as key 
1. items in list donot have unique id
2. List is static and do not change
3. List will never be reordered or filtered