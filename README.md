# gsi-map

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A custom web component that displays a map using the Geospatial Information Authority of Japan (GSI) map tiles.

## Demo
[Demo page](https://code4fukui.github.io/gsi-map/)

## Features
- Displays a map using the GSI's standard or satellite map tiles
- Allows setting the initial center and zoom level of the map
- Displays the current location in Geo3x3 format
- Customizable width and height

## Usage
To use the `gsi-map` component, include the `gsi-map.js` file in your HTML file and add the `<gsi-map>` element:

```html
<script type="module" src="./gsi-map.js"></script>

<gsi-map center="E913881" mode="satellite" width="100%" height="600px"></gsi-map>
```

You can set the following attributes:

- `center`: The initial center of the map, either as a Geo3x3 code or as latitude and longitude coordinates.
- `mode`: Either `"standard"` (default) or `"satellite"` to choose the map tile source.
- `width`: The width of the map component.
- `height`: The height of the map component.

## License
MIT License — see [LICENSE](LICENSE).