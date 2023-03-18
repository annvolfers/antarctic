export class Map {
  constructor() {
    this.CenterCoordinates = {
      LAT: 59.938609,
      LNG: 30.323075,
    };
    this.MarkerCoordinates = {
      LAT: 59.937520,
      LNG: 30.322457,
    };
    this.mapZoom = 16;
  }

  init() {
    const script = document.createElement('script');
    script.src = 'https://api-maps.yandex.ru/2.1/?lang=ru_RU';
    document.body.appendChild(script);

    script.addEventListener('load', () => {
      ymaps.ready(() => {
        const myMap = new ymaps.Map('map', {
          center: [this.CenterCoordinates.LAT, this.CenterCoordinates.LNG],
          zoom: this.mapZoom,
        });

        const myPlacemark = new ymaps.Placemark([this.MarkerCoordinates.LAT, this.MarkerCoordinates.LNG], {
          hintContent: 'г. Санкт Петербург, ул. Большая Конюшенная, 19/8',
        }, {
          iconLayout: 'default#image',
          iconImageHref: './img/svg/map-marker.svg',
          iconImageSize: [18, 22],
          iconImageOffset: [-9, -22],
        });

        myMap.geoObjects.add(myPlacemark);
      });
    });
  }
}
