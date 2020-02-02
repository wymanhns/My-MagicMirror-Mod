# MagicMirror-KALLIOPE for wukong-robot mod 悟空語音修改

This [MagicMirror²][mm] Module allows you to have pages in your magic mirror!
Modified for wukong-robot.  
Or, want to have grouped modules that are themed together? Look no further!

此為 [MagicMirror²][mm] 模塊可讓您在魔術鏡中放置頁面！


*Add Text Color Style*

*Test:*



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


[mm]: https://github.com/MichMich/MagicMirror
