// Function for comparing transformed and expected data
const deepEqual = (a, b) => {
  // typeof
  if (typeof a !== typeof b) {
    return false;
  }
  // NaN
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return true;
  }
  // string, number, null, undefined
  if (typeof a !== 'object' || a === null || b === null) {
    return a === b;
  }
  // object & array
  // [] !== {}
  if (
    (Array.isArray(a) && !Array.isArray(b)) ||
    (!Array.isArray(a) && Array.isArray(b))
  ) {
    return false;
  }
  // keys length
  if (Object.keys(a).length !== Object.keys(b).length) {
    return false;
  }
  // values
  for (const key of Object.keys(a)) {
    if (!deepEqual(a[key], b[key])) {
      return false;
    }
  }

  return true;
};

// JSON initial data
const data = `{
  "archery-mission-lvl": {
    "fails": 9,
    "gameId": "archery-world-tour",
    "playTime": 5291.706,
    "wins": 8
  },
    "archery-world-mission-1": {
    "fails": 9,
    "gameId": "archery-world-tour",
    "playTime": 981,
    "wins": 6
  },
  "bubble-woods-mission-1": {
    "fails": 19,
    "gameId": "bubble-woods",
    "playTime": 1206,
    "wins": 9
  },
  "bubble-woods-mission-lvl": {
    "fails": 1,
    "gameId": "bubble-woods",
    "playTime": 100,
    "wins": 2
  },
  "candy-bubble-mission-lvl": {
    "fails": 6,
    "gameId": "candy-bubble",
    "playTime": 1558,
    "wins": 6
  }
}`;

// Expected data
const expectedRes = [
  {
    fails: 18,
    gameId: 'archery-world-tour',
    playTime: 6272.706,
    wins: 14,
  },
  {
    fails: 20,
    gameId: 'bubble-woods',
    playTime: 1306,
    wins: 11,
  },
  {
    fails: 6,
    gameId: 'candy-bubble',
    playTime: 1558,
    wins: 6,
  },
];

const parsedData = JSON.parse(data);

// Problem solving function
const groupByGameId = progress => {
  const grouped = {};

  for (const mission in progress) {
    const { fails, gameId, playTime, wins } = progress[mission];

    if (grouped[gameId]) {
      // 'fails', 'playTime' and 'wins' should have 'number' type in JSON. Otherwise we have to convert it.
      grouped[gameId].fails += fails;
      grouped[gameId].playTime += playTime;
      grouped[gameId].wins += wins;
    } else {
      grouped[gameId] = { fails, gameId, playTime, wins };
    }
  }

  return Object.values(grouped);
};

// Test
console.log(deepEqual(groupByGameId(parsedData), expectedRes)); // true
