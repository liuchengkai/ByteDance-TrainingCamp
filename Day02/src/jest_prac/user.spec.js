const User = require("./User")

test("getName", () => {
	const user = new User("Kai")

	user.setName("caibi")

	expect(user.getName()).toBe("caibi")
})
