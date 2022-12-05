# messenger-api

## Standard.js

Add locally to your VSCode

```
"standard.autoFixOnSave": true
```

Snazzy adds colors to the console output
```
"lint": "ts-standard --fix | snazzy"
```

---

To support ESM add to `tsconfig.json` 

```
{
  "ts-node": {
    "esm": true
  },
  "compierOptions" { ... }
}
```

in package.json

```
{
  "type": "module",
}
```