export {}
const { locations } = require("../data")
const getLocationTime = require("../")

describe("Location tests", () => {
  test("Expecgt location data to be present", () => {
    expect(locations).toBeDefined()
  })
  test("Expect location to be an array of objects", () => {
    expect(locations.length).toBeGreaterThan(0)
    locations.forEach((item: any) => {
      expect(item).toHaveProperty("name")
      expect(item).toHaveProperty("postal_code")
      expect(item).toHaveProperty("current_time")
    })
  })
})

describe("Get location time tests", () => {
  test("simple case where [100005,'New York'] to expect ['2:30pm GMT+2','2:30pm GMT+2']", () => {
    expect(getLocationTime([100005, "New York"])).toStrictEqual([
      "2:30pm GMT+2",
      "2:30pm GMT+2",
    ])
  })
  test("simple case where [1005,'New York'] to expect [false,'2:30pm GMT+2']", () => {
    expect(getLocationTime([1005, "New York"])).toStrictEqual([
      false,
      "2:30pm GMT+2",
    ])
  })
  test("simple case where [] to expect []", () => {
    expect(getLocationTime([])).toStrictEqual([])
  })
})
