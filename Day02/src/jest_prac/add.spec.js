const add = require("./add")

test("test", () => {
	const a = 1
	const b = 1
	const r = add(a, b)
	expect(r).toBe(2)
})
