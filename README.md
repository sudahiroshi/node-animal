node-chat2
===============

express4.xに対応したnode-chatです．

旧いnode-chatを動かそうとしたらejs周りでエラーが出て，ejsを調べたところそろそろ乗り換えた方が良さそうだったので，一気にectに乗り換えました．
その関係でexpress4.xに対応しました．

## 使い方

```
$ git clone
$ cd node-chat2
$ npm install
$ npm start
Webブラウザから3000番ポートに接続する．
```

## express4.xで変わったこと

exprss2.xだったらapp.jsを直接動かしていましたが，express4.xからは「npm start」で起動します．
また，socket.ioに関係する処理はapp.jsから./bin/wwwに移してあります．
node.js流儀のモジュール化の書き方を採用している関係で，app.jsがシンプルになっています．

## ectについて
ejs→jadeの乗り換えコストが膨大になりそうだったので，ejsに近い（というかほぼ同じ）記述ができるectを採用しました．
まだexpress-generatorが対応していないので，プロジェクトを作るところで若干面倒ですが，ejsに近いという面で楽をさせてもらえます．

世間一般には高速なテンプレートエンジンと評価されているので，そちらの面でも期待できます．
