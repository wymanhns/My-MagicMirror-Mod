# MagicMirror-KALLIOPE 修改

This [MagicMirror²][mm] Module allows you to have pages in your magic mirror!
Want to have more modules in your magic mirror, but want to keep the format?
Or, want to have grouped modules that are themed together? Look no further!

*\<self-promotion>*

Add Text Color Style

Test:

*\<\\self-promotion>*


## Using the module

```bash
curl -H "Content-Type: application/json" -X POST -d '{"notification":"KALLIOPE", "payload": "Test1"}' http://localhost/kalliope
```

```bash
curl -H "Content-Type: application/json" -X POST -d '{"notification":"ROBOT", "payload": "Test1"}' http://localhost/kalliope
```

## Configuration options

| Option          | Type               | Default Value            | Description |
| --------------- | ------------------ | ------------------------ | --------- |
| `modules`       | `[[String...]...]` | `[]`                     |  |
| ``      | *None*             | *None*                   |  |
| ``         | ``      | `` |  |
| `` | ``              | ``                   |  |
| ``  | ``              | `0`                      |  |
| ``     | ``              | `0`                      |  |
