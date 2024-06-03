document.getElementById("ageForm").addEventListener("submit", function(event) {
    event.preventDefault();


    var dateOfBirth = new Date(document.getElementById("DateOfBirth").value);


    var currentDate = new Date();


    var age = currentDate.getFullYear() - dateOfBirth.getFullYear();
    var monthDifference = currentDate.getMonth() - dateOfBirth.getMonth();
    if (monthDifference < 0 || (monthDifference === 0 && currentDate.getDate() < dateOfBirth.getDate())) {
        age--;
    }

    document.getElementById("result").innerHTML = "Tuổi của bạn là: " + age;
});