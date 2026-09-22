const {
    calculateAverage,
    getGrade,
    analyzeStudent,
    findTopStudent,
} = require("./studentService");

describe("calculateAverage", () => {

    test("should calculate average of valid marks", () => {
        expect(calculateAverage([80, 90, 70])).toBe(80);
    });

    test("should return 0 for an empty array", () => {
        expect(calculateAverage([])).toBe(0);
    });

    test("should ignore invalid marks", () => {
        expect(calculateAverage([80, 90, 70, -10, 110])).toBe(80);
    });

    test("should return 0 when all marks are invalid", () => {
        expect(calculateAverage([-10, 110, -50, 150])).toBe(0);
    });

    test("should handle decimal averages", () => {
        expect(calculateAverage([80.5, 90.5, 70.5])).toBeCloseTo(80.5);
    });

});


describe("getGrade", () => {

    test("should return A for average >= 90", () => {
        expect(getGrade(95)).toBe("A");
    });

    test("should return B for average between 75 and 89", () => {
        expect(getGrade(80)).toBe("B");
    });

    test("should return C for average between 60 and 74", () => {
        expect(getGrade(65)).toBe("C");
    });

    test("should return D for average between 40 and 59", () => {
        expect(getGrade(45)).toBe("D");
    });

    test("should return F for average below 40", () => {
        expect(getGrade(30)).toBe("F");
    });

});


describe("analyzeStudent", () => {

    test("should return complete student analysis", () => {

        const student = {
            id: 0,
            name: "John Doe",
            marks: [80, 90, 70],
        };

        expect(analyzeStudent(student)).toEqual({
            id: 0,
            name: "John Doe",
            marks: [80, 90, 70],
            average: 80,
            grade: "B",
            passed: true,
        });
    });

    test("should mark student as passed when average is 40 or above", () => {

        const student = {
            name: "John Doe",
            marks: [40, 50, 60],
        };

        expect(analyzeStudent(student)).toHaveProperty("passed", true);
    });

    test("should mark student as failed when average is below 40", () => {

        const student = {
            name: "John Doe",
            marks: [30, 35, 25],
        };

        expect(analyzeStudent(student)).toHaveProperty("passed", false);
    });

    test("should throw error for invalid student", () => {
        expect(() => analyzeStudent({})).toThrow("Invalid student data");
    });

});


describe("findTopStudent", () => {

    test("should return student with highest average", () => {

        const students = [
            {
                id: 1,
                name: "John",
                marks: [70, 80, 90]
            },
            {
                id: 2,
                name: "Priya",
                marks: [90, 95, 100]
            },
            {
                id: 3,
                name: "Rahul",
                marks: [60, 70, 65]
            }
        ];

        const result = findTopStudent(students);

        expect(result).toEqual(students[1]);
    });


    test("should return null for empty student list", () => {

        const result = findTopStudent([]);

        expect(result).toBeNull();
    });


    test("should handle students with different number of marks", () => {

        const students = [
            {
                id: 1,
                name: "John",
                marks: [80, 80]
            },
            {
                id: 2,
                name: "Priya",
                marks: [90, 90, 90, 90]
            },
            {
                id: 3,
                name: "Rahul",
                marks: [70, 70, 70, 70, 70]
            }
        ];

        const result = findTopStudent(students);

        expect(result).toEqual(students[1]);
    });

});