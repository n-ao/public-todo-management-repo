#13 Raytracer

## 雑記
シーンを定義し、カメラからレイを飛ばす。物体に当たった場合の色を計算する。
レイとオブジェクトの交差判定を行う。
反射、屈折、散乱を計算する。
レイが全オブジェクトを通過して背景色部分に到達した段階で最終的なピクセルの色を求める。


---

## アルゴリズム
TODO



## 使用言語
- JavaScript
- TypeScript
- C#
- Processing or p5.js
（随時検討）

---

## コード


### JavaScript with Three.js

1. シーンに赤い球を1つ追加
1. マウスカーソルが球体に重なると球体の色が赤になる
1. `Raycaster`でマウス位置にレイを発射し、`intersectObject()`で球体との交差判定を行う
1. 交差している場合、球体の色を赤に変更
1. `requestAnimationFrame()`でレンダリング

[テスト実装](../Sources/JavaScript/SimpleRaytracer.js)


---

## History
### 3/28　メモとJS追加

