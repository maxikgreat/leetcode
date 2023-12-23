/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
  if (!rooms.length) {
    return false
  }

  const [firstRoom] = rooms

  const stack = [firstRoom]
  const visitedRooms = new Set()
  visitedRooms.add(0)

  while (stack.length) {
    const keys = stack.pop()

    while (keys.length) {
      const key = keys.pop()
      stack.push(rooms[key])
      visitedRooms.add(key)
    }
  }

  console.log('set', [...visitedRooms])

  return rooms.length === visitedRooms.size
};

console.log(canVisitAllRooms([[1], [2], [3], [0]]))
