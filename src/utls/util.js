const URL = function (musicname) {
  let url = 'http://www.baiodu.com'
  const data = {
    'type': '1',
    'limit': 10,
    's': musicname
  }
  for (let key in data) {
    console.log(key)
    if (key === 'type') {
      url += `?${key}=${encodeURIComponent(data[key])}`
    } else {
      url += `?${key}=${encodeURIComponent(data[key])}`
    }
  }
  return url
}

module.exports = URL
