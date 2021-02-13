## Tools

Install this Chrome extension **Apollo Client Developer Tools** to be able to run queries and have access to the playground from the browser console.

## Possible issues

When using 2 Material UI elements as parent and child, if the child is in external component file it doesn't inherit the styles.

**Fix:** in the child Material UI element spread them from the props like below:

```javascript
<GridListTile style={{ ...props.style }}></GridListTile>
```
