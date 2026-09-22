// const { signup, login } = require("./auth");

// describe("Signup", () => {
//     test("Successful signup", () => {
//         const result = signup(
//             "Nisarga",
//             "nisarga@gmail.com",
//             "1234"
//         );

//         expect(result).toBeDefined();
//         expect(result.success).toBeTruthy();
//         expect(result.user).toEqual({
//             id: result.user.id,
//             name: "Nisarga",
//             email: "nisarga@gmail.com",
//             password: "1234"
//         });
//     });
// });


// describe("Duplicate Signup", () => {
//     test("Duplicate signup should fail", () => {
//         signup(
//             "Rahul",
//             "rahul@gmail.com",
//             "1234"
//         );

//         const result = signup(
//             "Rahul",
//             "rahul@gmail.com",
//             "5678"
//         );

//         expect(result.success).toBeFalsy();
//         expect(result.message).toEqual("User already exists");
//     });
// });


// describe("Login", () => {
//     test("Successful login", () => {
//         signup(
//             "Priya",
//             "priya@gmail.com",
//             "password123"
//         );

//         const result = login(
//             "priya@gmail.com",
//             "password123"
//         );

//         expect(result).toBeDefined();
//         expect(result.success).toBeTruthy();
//         expect(result.user).toEqual({
//             id: result.user.id,
//             name: "Priya",
//             email: "priya@gmail.com",
//             password: "password123"
//         });
//     });
// });


// describe("Invalid Password", () => {
//     test("Login should fail with incorrect password", () => {
//         signup(
//             "Anu",
//             "anu@gmail.com",
//             "correct123"
//         );

//         const result = login(
//             "anu@gmail.com",
//             "wrong123"
//         );

//         expect(result.success).toBeFalsy();
//         expect(result.message).toEqual("Invalid password");
//     });
// });