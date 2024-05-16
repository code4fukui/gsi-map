import L from "https://code4sabae.github.io/leaflet-mjs/leaflet.mjs";
import { Geo3x3 } from "https://taisukef.github.io/Geo3x3/Geo3x3.mjs";

class GSIMap extends HTMLElement {
  constructor() {
    super();
    this.init();
  }
  async init() {
    const grayscale = this.getAttribute("grayscale");
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = "https://code4sabae.github.io/leaflet-mjs/" + (grayscale ? "leaflet-grayscale.css" : "leaflet.css");
    this.appendChild(link);
    const waitOnload = async (comp) => {
      return new Promise(resolve => {
        comp.onload = resolve;
      });
    };
    await waitOnload(link);

    const div = document.createElement("div");
    this.appendChild(div);
    div.style.width = this.getAttribute("width") || "100%";
    div.style.height = this.getAttribute("height") || "60vh";
    
    this.map = L.map(div);
    // set 国土地理院地図 https://maps.gsi.go.jp/development/ichiran.html
    const land = "https://cyberjapandata.gsi.go.jp/xyz/std/{z}/{x}/{y}.png";
    const sat = "https://cyberjapandata.gsi.go.jp/xyz/seamlessphoto/{z}/{x}/{y}.jpg";
    L.tileLayer(this.getAttribute("mode") == "satellite" ? sat : land, {
      attribution: '<a href="https://maps.gsi.go.jp/development/ichiran.html">国土地理院</a>"',
      maxZoom: 18,
    }).addTo(this.map);

    const mapdiv = this.querySelector(".leaflet-container");

    // geo3x3
    const divpos = document.createElement("div");
    mapdiv.appendChild(divpos);
    divpos.style.position = "absolute";
    divpos.style.zIndex = 10000;
    divpos.style.bottom = 0;
    divpos.style.left = 0;
    divpos.style.backgroundColor = "white";
    divpos.style.padding = ".1em .5em";
    divpos.style.fontSize = "120%";
    const geo3x3 = document.createElement("span");
    geo3x3.textContent = "Geo3x3: ";
    divpos.appendChild(geo3x3);
    geo3x3.onclick = () => window.open("https://geo3x3.com/", "_blank");
    const spanpos = document.createElement("span");
    spanpos.style.fontWeight = "bold";
    divpos.appendChild(spanpos);
    spanpos.onclick = () => prompt("Geo3x3 (緯度経度ズーム)", spanpos.textContent);
    const showPos = () => {
      const p = this.map.getCenter();
      const fixLng = (n) => {
        if (n > 180) {
          return fixLng(n - 360);
        } else if (n < - 180) {
          return fixLng(n + 360);
        }
        return n;
      };
      divpos.childNodes[1].textContent = Geo3x3.encode(p.lat, fixLng(p.lng), this.map.getZoom());
    };
    this.map.on("moveend", showPos);
    //

    console.log(this.getAttribute("center"))
    this.setCenter(this.getAttribute("center"));
  }
  setCenter(lat, lng, level) {
    if (lat == null) return;
    if (typeof lat == "string" && lng == null) {
      const ll = Geo3x3.decode(lat);
      lat = ll.lat;
      lng = ll.lng;
      level = ll.level;
    }
    const latlng = new L.LatLng(lat, lng);
    if (level == null) {
      this.map.setCenter(latlng);
    } else {
      this.map.setView(latlng, level);
    }
  }
  getCenter() {
    return this.map.getCenter();
  }
}

customElements.define("gsi-map", GSIMap);

export { GSIMap };
