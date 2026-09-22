function calculateAverage(marks) {
    const validMarks = marks.filter(
        mark => typeof mark === "number" && mark >= 0 && mark <= 100
    );

    if (validMarks.length === 0) {
        return 0;
    }

    const total = validMarks.reduce((sum, mark) => sum + mark, 0);

    return total / validMarks.length;
}


function getGrade(average) {
    if (average >= 90) {
        return "A";
    }

    if (average >= 75) {
        return "B";
    }

    if (average >= 60) {
        return "C";
    }

    if (average >= 40) {
        return "D";
    }

    return "F";
}


function analyzeStudent(student) {
    if (
        !student ||
        typeof student !== "object" ||
        !student.name ||
        !Array.isArray(student.marks)
    ) {
        throw new Error("Invalid student data");
    }

    const average = calculateAverage(student.marks);
    const grade = getGrade(average);

    return {
        id: student.id,
        name: student.name,
        marks: student.marks,
        average: average,
        grade: grade,
        passed: average >= 40
    };
}


function findTopStudent(students) {
    if (!students || students.length === 0) {
        return null;
    }

    let topStudent = students[0];
    let topAverage = calculateAverage(topStudent.marks);

    for (let i = 1; i < students.length; i++) {
        const currentAverage = calculateAverage(students[i].marks);

        if (currentAverage > topAverage) {
            topAverage = currentAverage;
            topStudent = students[i];
        }
    }

    return topStudent;
}


module.exports = {
    calculateAverage,
    getGrade,
    analyzeStudent,
    findTopStudent
};