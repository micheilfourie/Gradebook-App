function getAverage(scores) {
    let sum = 0;
    for (let i = 0; i < scores.length; i++) {
        sum += scores[i];
    }
    return sum / (scores.length);
}

function getGrade(score) {
    if (score == 100) {
        return 'A++';
    } else if (score >= 90 && score < 100) {
        return "A";
    } else if (score >= 80 && score < 90) {
        return "B";
    } else if (score >= 70 && score < 80) {
        return "C";
    } else if (score >= 60 && score < 70) {
        return "D";
    } else {
        return "F";
    }
}

function hasPassingGrade(score) {
    let grade = getGrade(score);
    if (grade == "F") {
        return false;
    } else {
        return true;
    }
}

function studentMsg(totalScores, studentScore) {
    const passFail = hasPassingGrade(studentScore) ? "You passed the course." : "You failed the course.";
    return `Class average: ${getAverage(totalScores)}. Your grade: ${getGrade(studentScore)}. ${passFail}`;
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]));
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]));
console.log(studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37))

