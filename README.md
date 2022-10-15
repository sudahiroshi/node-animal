Node Animal
===============

画面上に表示されているキャラクターを，コマンドにより操作するデモです．

## 使い方

```
$ git clone https://github.com/sudahiroshi/node-animal
$ cd node-animal
$ npm install
$ npm start
Webブラウザから3000番ポートに接続する．
例：　http://localhost:3000/
```

複数のWebブラウザから接続すると，ブラウザ間でキャラクターの動きが同期します．

## キャラクタ

以下のキャラクタを操作できます．

キャラクタ名 | 概要
-|-
bare | くま
dog | いぬ
elephant | ぞう
giraffe | きりん
koala | コアラ
panda | パンダ
pig | ぶた
rabbit | うさぎ

## コマンド

### move

キャラクターを動かす

例：```panda move 200 300```

パンダを座標( 200, 300 )に移動します．

### size

キャラクターのサイズを変える

例：```panda size 150```

パンダのサイズを150に変更します．

## 参考
[【Node.js】express4 + socket.io で socket.io.js が 404 not found になる。Add Star](http://d.hatena.ne.jp/pospome/20150314/1426357192)
[Express4で最速テンプレートエンジンECTを使う簡単なサンプル](http://trycatchand.blogspot.jp/2015/05/Express4-ECT-example.html)
[Node.js + Express4を使っていて、つまづいた注意点まとめ](http://qiita.com/zaru/items/68b4f64c1f0d10b6a27e)
[【爆速テンプレートエンジン】Express3 以降で layout.ejs が使えなくなった代わりに ECT](http://qiita.com/sukobuto/items/b0be22bfebd721854e0b)
