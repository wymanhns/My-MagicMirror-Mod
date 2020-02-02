# MagicMirror-KALLIOPE for wukong-robot mod 悟空語音修改

This [MagicMirror²][mm] Module allows you to have pages in your magic mirror!
Modified for wukong-robot.  
Module to bind [Kalliope](https://github.com/kalliope-project/kalliope) with your Magic Mirror.

This module allow you to:
- show what Kalliope say on the screen
- control your Magic Mirror by sending notification to other active modules

此為 [MagicMirror²][mm] 模塊可讓您在魔術鏡中放置頁面！
為悟空語音的小修改。


> **Note:** On Kalliope, [a neuron is available](https://github.com/kalliope-project/kalliope_neuron_magic_mirror) to talk with this module directly.

![Demo](images/KALLIOPE.png)


## Using the module

```bash
curl -H "Content-Type: application/json" -X POST -d '{"notification":"KALLIOPE", "payload": "Test1"}' http://localhost/kalliope
```

```bash
curl -H "Content-Type: application/json" -X POST -d '{"notification":"ROBOT", "payload": "Test1"}' http://localhost/kalliope
```

## Configuration options

| Option          | Value            | Description |
| --------------- | ------------------------ | --------- |
| `notification`       | `KALLIOPE` | *Font Color = Green* |
| `notification`       | `ROBOT`    | *Font Color = Yellow & Robot Icon* |



[mm]: https://github.com/MichMich/MagicMirror
