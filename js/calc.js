document.addEventListener('DOMContentLoaded', function () {
    const courseForm = document.getElementById('courseForm');
    const averageScore10 = document.getElementById('average-score-10');
    const averageScore4 = document.getElementById('average-score-4');
    const courseTableBody = document.getElementById('courseTableBody');
    const courseModal = new bootstrap.Modal(document.getElementById('courseModal'));

    let courses = [];
    let totalCredits = 0;
    let editingIndex = -1;

    courseForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const courseName = document.getElementById('courseName').value;
        const credits = parseFloat(document.getElementById('credits').value);
        const score = parseFloat(document.getElementById('score').value);
        const isAccumulated = document.getElementById('isAccumulated').checked;

        const newCourse = { courseName, credits, score, isAccumulated };

        if (editingIndex >= 0) {
            courses[editingIndex] = newCourse;
            editingIndex = -1;
        } else {
            courses.push(newCourse);
        }

        updateCourseTable();
        updateAverageScores();
        courseForm.reset();
        courseModal.hide();
    });

    function updateCourseTable() {
        courseTableBody.innerHTML = '';
        courses.forEach((course, index) => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${index + 1}</td>
                <td>${course.courseName}</td>
                <td>${course.credits}</td>
                <td>${course.score}</td>
                <td>
                    <button class="btn btn-sm btn-warning" onclick="editCourse(${index})">Edit</button>
                    <button class="btn btn-sm btn-danger" onclick="deleteCourse(${index})">Delete</button>
                </td>
            `;
            courseTableBody.appendChild(row);
        });
    }

    function updateAverageScores() {
        let totalScore10 = 0;
        let totalScore4 = 0;
        totalCredits = 0;

        courses.forEach(course => {
            totalScore10 += course.score * course.credits;
            totalScore4 += convertScoreTo4Scale(course.score) * course.credits;
            totalCredits += course.credits;
        });

        const average10 = (totalScore10 / totalCredits).toFixed(2);
        const average4 = (totalScore4 / totalCredits).toFixed(2);

        averageScore10.textContent = average10;
        averageScore4.textContent = average4;
    }

    function convertScoreTo4Scale(score) {
        if (score >= 9.0) return 4.0;
        if (score >= 8.5) return 3.7;
        if (score >= 8.0) return 3.5;
        if (score >= 7.0) return 3.0;
        if (score >= 6.5) return 2.5;
        if (score >= 5.5) return 2.0;
        if (score >= 5.0) return 1.5;
        if (score >= 4.0) return 1.0;
        return 0.0;
    }

    window.editCourse = function (index) {
        const course = courses[index];
        document.getElementById('courseName').value = course.courseName;
        document.getElementById('credits').value = course.credits;
        document.getElementById('score').value = course.score;
        document.getElementById('courseIndex').value = index;
        editingIndex = index;
        courseModal.show();
    };

    window.deleteCourse = function (index) {
        courses.splice(index, 1);
        updateCourseTable();
        updateAverageScores();
    };
});
