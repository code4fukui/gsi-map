# gsi-map

国土地理院のタイルを使用してマップを表示するカスタムWebコンポーネントです。

## デモ
[デモページ](https://code4fukui.github.io/gsi-map/)で確認できます。

## 機能
- 国土地理院の標準地図やサテライト地図を表示
- 地図の初期表示位置とズームレベルを設定可能
- 現在地をGeo3x3形式で表示
- 幅と高さをカスタマイズ可能

## 使い方
`gsi-map.js`ファイルを読み込み、`<gsi-map>`要素を使用します。

```html
<script type="module" src="./gsi-map.js"></script>

<gsi-map center="E913881" mode="satellite" width="100%" height="600px"></gsi-map>
```

次の属性を設定できます:

- `center`: Geo3x3コードまたは緯度経度で初期表示位置を指定
- `mode`: `"standard"`（デフォルト）または`"satellite"`でマップタイルを選択
- `width`: マップの幅
- `height`: マップの高さ

## ライセンス
このプロジェクトは [MIT ライセンス](LICENSE) に基づいて提供されています。