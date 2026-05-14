# gsi-map

[国土地理院 (GSI)](https://maps.gsi.go.jp/development/ichiran.html) のタイルを使用してインタラクティブな地図を表示するカスタムWebコンポーネント（`<gsi-map>`）です。

## デモ

[**ライブデモページ**](https://code4fukui.github.io/gsi-map/)

## 特徴

- **シンプルで宣言的:** 単一のHTMLタグで地理院地図を埋め込み可能です。
- **複数の地図スタイル:** `standard`（標準）と`satellite`（衛星写真）の地理院タイルをサポート。
- **グレースケールモード:** データオーバーレイに最適なグレースケールで地図を表示。
- **Geo3x3対応:** 初期表示をGeo3x3コードで設定し、現在の中心位置のコードをリアルタイムで表示。
- **インタラクティブな位置表示:** 「Geo3x3:」ラベルをクリックして詳細を確認、またはコード自体をクリックしてコピー。
- **ビルド不要:** ブラウザ上で直接動作します。
- **カスタマイズ可能なサイズ:** 任意のレイアウトに合わせて幅と高さを設定可能。

## 使い方

1.  **スクリプトの読み込み**  
    HTMLファイルに以下を追加します。

    ```html
    <script type="module" src="https://code4fukui.github.io/gsi-map/gsi-map.js"></script>
    ```

2.  **要素の追加**  
    ページに以下を追加します。

    ```html
    <gsi-map center="E913881" mode="satellite" height="500px"></gsi-map>
    ```

## 属性

| 属性        | 説明                                                                 | デフォルト値 |
| ----------- | -------------------------------------------------------------------- | ------------ |
| `center`    | 初期の中心位置とズームレベルを**Geo3x3コード**で指定します。         | `(なし)`     |
| `mode`      | 地図タイルのスタイル。`"standard"`または`"satellite"`を指定可能です。 | `"standard"` |
| `grayscale` | 指定された場合、地図をグレースケールで表示します。                   | `(未設定)`   |
| `width`     | 地図コンポーネントの幅（例: `"100%"`, `"800px"`）。                  | `"100%"`     |
| `height`    | 地図コンポーネントの高さ（例: `"60vh"`, `"500px"`）。                | `"60vh"`     |

## JavaScript API

プログラムから地図コンポーネントを操作できます。

```javascript
// コンポーネントの参照を取得
const mapElement = document.querySelector('gsi-map');

// 現在の中心位置をLeafletのLatLngオブジェクトとして取得
const center = mapElement.getCenter();
console.log(center.lat, center.lng);

// 新しい表示位置を設定
mapElement.setCenter(35.681, 139.767, 15); // 緯度, 経度, ズーム
// またはGeo3x3コードを使用して設定
mapElement.setCenter("E913881");
```

## クレジット表記

このコンポーネントは、地理院タイルに必要なクレジット表記を地図上に自動的に表示します。

## ライセンス

[MIT](LICENSE)
