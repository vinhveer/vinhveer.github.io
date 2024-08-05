document.addEventListener('DOMContentLoaded', function () {
    const courseForm = document.getElementById('courseForm');
    const averageScore10 = document.getElementById('average-score-10');
    const averageScore4 = document.getElementById('average-score-4');
    const courseTableBody = document.getElementById('courseTableBody');
    const courseModal = new bootstrap.Modal(document.getElementById('courseModal'));
    const toggleBtn = document.getElementById('toggleMode');
    const body = document.body;
    const navbar = document.querySelector('.navbar');
    const links = document.querySelectorAll('.navbar a, .btn-outline-success');

    let courses = [];
    let totalCredits = 0;
    let editingIndex = -1;

    courseForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const courseName = document.getElementById('courseName').value;
        const credits = parseFloat(document.getElementById('credits').value);
        const score = parseFloat(document.getElementById('score').value);

        if (isNaN(credits) || isNaN(score) || credits <= 0 || score < 0 || score > 10) {
            alert('Vui lòng nhập giá trị hợp lệ cho số tín chỉ và điểm.');
            return;
        }

        const newCourse = { courseName, credits, score };

        if (editingIndex >= 0) {
            courses[editingIndex] = newCourse;
            editingIndex = -1;
        } else {
            courses.push(newCourse);
        }

        updateCourseCards();
        updateAverageScores();
        courseForm.reset();
        courseModal.hide();
    });

    function updateCourseCards() {
        courseTableBody.innerHTML = '';
        courses.forEach((course, index) => {
            const card = document.createElement('div');
            card.className = 'card mb-3 mt-3';
            card.innerHTML = `
                <div class="card-body">
                    <div class="mb-3 float-end">
                        <button class="btn btn-outline-warning" onclick="editCourse(${index})"><i class="fa-solid fa-pen-to-square"></i> Chính sửa</button>
                        <button class="btn btn-outline-danger" onclick="deleteCourse(${index})"><i class="fa-solid fa-trash"></i> Xoá</button>
                    </div>
                    <h6 class="card-title">#${index + 1}</h5>
                    <h4 class="card-title">${course.courseName}</h4>
                    <p class="card-text"><strong>Số tín chỉ:</strong> ${course.credits} </br>
                    <strong>Điểm:</strong> ${course.score} </br>
                    <strong>Điểm chữ:</strong> ${convertScoreToLetter(course.score)}</p>
                </div>
            `;
            courseTableBody.appendChild(card);
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

        averageScore10.textContent = average10 || '0.00';
        averageScore4.textContent = average4 || '0.00';
    }

    function convertScoreTo4Scale(score) {
        if (score >= 8.5) return 4.0;
        if (score >= 8.0) return 3.5;
        if (score >= 7.0) return 3.2;
        if (score >= 6.5) return 2.5;
        if (score >= 5.5) return 2.0;
        if (score >= 5.0) return 1.5;
        if (score >= 4.0) return 1.0;
        return 0.0;
    }

    function convertScoreToLetter(score) {
        if (score >= 8.5) return 'A';
        if (score >= 8.0) return 'B+';
        if (score >= 7.0) return 'B';
        if (score >= 6.5) return 'C+';
        if (score >= 5.5) return 'C';
        if (score >= 5.0) return 'D+';
        if (score >= 4.0) return 'D';
        return 'F';
    }

    window.editCourse = function (index) {
        const course = courses[index];
        document.getElementById('courseName').value = course.courseName || '';
        document.getElementById('credits').value = course.credits || '';
        document.getElementById('score').value = course.score || '';
        document.getElementById('courseIndex').value = index || '';
        document.getElementById('courseModalLabel').textContent = 'Chỉnh sửa điểm';
        editingIndex = index;
        courseModal.show();
    };

    window.deleteCourse = function (index) {
        courses.splice(index, 1);
        updateCourseCards();
        updateAverageScores();
    };

    courseModal._element.addEventListener('hidden.bs.modal', function () {
        editingIndex = -1;
        courseForm.reset();
        document.getElementById('courseModalLabel').textContent = 'Thêm điểm';
    });
});
