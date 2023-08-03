const { describe } = require("node:test");
const UserTest = require("../../controllers/userController");

describe("UserTest.createUser",()=>{
    it('should have createUser function',()=> {
        expect(typeof UserTest.createUser).toBe("function");
    });
});