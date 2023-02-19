function load(_num) {

    var projects = document.getElementById("projects");
    var career = document.getElementById("career");
    var skills = document.getElementById("skills");
    if (_num == 0) {
        projects.style.display = "block";
        skills.style.display = "none";
        career.style.display = "none";
    }
    if (_num == 1) {
        career.style.display = "block";
        projects.style.display = "none";
        skills.style.display = "none";
    }
    if (_num == 2) {
        skills.style.display = "block";
        projects.style.display = "none";
        career.style.display = "none";
    }
}

function project(_num) {

    var project1 = document.getElementById("project1");
    var project2 = document.getElementById("project2");
    var project3 = document.getElementById("project3");
    if (_num == 0) {
        project1.style.display = "block";
        project2.style.display = "none";
        project3.style.display = "none";
    }
    if (_num == 1) {
        project2.style.display = "block";
        project3.style.display = "none";
        project1.style.display = "none";
    }
    if (_num == 2) {
        project3.style.display = "block";
        project2.style.display = "none";
        project1.style.display = "none";
    }
}