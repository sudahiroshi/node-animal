node-chat2
===============

express4.xに対応したnode-chatです．

旧いnode-chatを動かそうとしたらejs周りでエラーが出て，ejsを調べたところそろそろ乗り換えた方が良さそうだったので，一気にectに乗り換えました．
その関係でexpress4.xに対応しました．

## 使い方

```
$ git clone http://git.mesh.cx/gitbucket/git/suda/node-chat2.git
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

## 参考
[【Node.js】express4 + socket.io で socket.io.js が 404 not found になる。Add Star](http://d.hatena.ne.jp/pospome/20150314/1426357192)
[Express4で最速テンプレートエンジンECTを使う簡単なサンプル](http://trycatchand.blogspot.jp/2015/05/Express4-ECT-example.html)
[Node.js + Express4を使っていて、つまづいた注意点まとめ](http://qiita.com/zaru/items/68b4f64c1f0d10b6a27e)
[【爆速テンプレートエンジン】Express3 以降で layout.ejs が使えなくなった代わりに ECT](http://qiita.com/sukobuto/items/b0be22bfebd721854e0b)
