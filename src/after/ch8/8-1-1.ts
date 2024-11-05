interface Location {
  lat: number;
  lon: number;
}

type Points = [Location, Location];

// 아래 함수는 trackSummary 함수 외부에서도 사용 가능한 함수이다.
// 따라서 이 함수는 trackSummary 함수 내부에 위치해 있을 필요가 없다.
// 즉 내부 함수들이 특정 기능,도메인만을 위한 기능이 아니기에 응집도가 낮다.
// 재사용이 가능한 함수이다.
function distance(p1: Location, p2: Location) {
  // 포뮬라: http://www.movable-type.co.uk/scripts/latlong.html
  const EARTH_RADIUS = 3959; // in miles

  const dLat = radians(p2.lat) - radians(p1.lat);

  const dLon = radians(p2.lon) - radians(p1.lon);

  const a =
    Math.pow(Math.sin(dLat / 2), 2) +
    Math.cos(radians(p2.lat)) *
      Math.cos(radians(p1.lat)) *
      Math.pow(Math.sin(dLon / 2), 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

  return EARTH_RADIUS * c;
}

function radians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function calculateDistance(points: Points) {
  return distance(points[0], points[1]);
}

export function trackSummary(points: Points) {
  const time = calculateTime();
  const distance = calculateDistance(points);
  const pace = time / 60 / distance;
  return {
    time: time,
    distance: distance,
    pace: pace,
  };

  function calculateTime() {
    return 10000;
  }
}

const newYork: Location = {
  lat: 40.73061,
  lon: -73.935242,
};

const tokyo: Location = {
  lat: 35.652832,
  lon: 139.839478,
};

const summary = trackSummary([newYork, tokyo]);
console.log(summary);
