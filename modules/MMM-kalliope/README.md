# MagicMirror-KALLIOPE for wukong-robot mod 悟空語音修改

This [MagicMirror²][mm] - [MMM-kalliope](https://github.com/kalliope-project/kalliope) Module allows you to have pages in your magic mirror!
Modified for wukong-robot.  
Module to bind [Kalliope](https://github.com/kalliope-project/kalliope) with your Magic Mirror.

This module allow you to:
- show what Kalliope say on the screen
- control your Magic Mirror by sending notification to other active modules

此為 [MagicMirror²][mm] 中 [MMM-kalliope](https://github.com/kalliope-project/kalliope) 模塊修改版，可讓您在魔術鏡中放置頁面！
為悟空語音的小修改。

本模塊可讓您：
- 在屏幕上顯示Kalliope所說的話
- 通過向其他活動模塊發送通知來控制您的魔鏡



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
