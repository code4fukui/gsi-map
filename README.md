# gsi-map

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom web component (`<gsi-map>`) for displaying interactive maps using tiles from the [Geospatial Information Authority of Japan (GSI)](https://maps.gsi.go.jp/development/ichiran.html).

## Demo

[**Live Demo Page**](https://code4fukui.github.io/gsi-map/)

## Features

- **Simple & Declarative:** Embed a GSI map with a single HTML tag.
- **Multiple Map Styles:** Supports both `standard` and `satellite` GSI map tiles.
- **Grayscale Mode:** Display the map in grayscale, perfect for data overlays.
- **Geo3x3 Integration:** Set the initial view with a Geo3x3 code and view the current center's code in real-time.
- **Interactive Position Display:** Click the "Geo3x3:" label to learn more, or click the code itself to copy it.
- **No Build Step Required:** Works directly in the browser.
- **Customizable Size:** Set width and height to fit any layout.

## Usage

1.  **Include the script** in your HTML file.

    ```html
    <script type="module" src="https://code4fukui.github.io/gsi-map/gsi-map.js"></script>
    ```

2.  **Add the element** to your page.

    ```html
    <gsi-map center="E913881" mode="satellite" height="500px"></gsi-map>
    ```

## Attributes

| Attribute   | Description                                                                    | Default      |
| ----------- | ------------------------------------------------------------------------------ | ------------ |
| `center`    | The initial center and zoom level, specified as a **Geo3x3 code**.             | `(none)`     |
| `mode`      | The map tile style. Can be `"standard"` or `"satellite"`.                      | `"standard"` |
| `grayscale` | If present, renders the map in grayscale.                                      | `(not set)`  |
| `width`     | The width of the map component (e.g., `"100%"`, `"800px"`).                    | `"100%"`     |
| `height`    | The height of the map component (e.g., `"60vh"`, `"500px"`).                   | `"60vh"`     |

## JavaScript API

You can interact with the map component programmatically.

```javascript
// Get a reference to the component
const mapElement = document.querySelector('gsi-map');

// Get the current center as a Leaflet LatLng object
const center = mapElement.getCenter();
console.log(center.lat, center.lng);

// Set a new view
mapElement.setCenter(35.681, 139.767, 15); // lat, lng, zoom
// Or set using a Geo3x3 code
mapElement.setCenter("E913881");
```

## Attribution

This component automatically displays the required attribution for the GSI map tiles on the map.

## License

[MIT](LICENSE)