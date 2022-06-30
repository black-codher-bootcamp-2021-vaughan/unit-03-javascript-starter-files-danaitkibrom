function getGrade(total) {

let message = "Your grade is ";

if (total > 90) {
    message = "Your grade is A+ "
}
else  if (total > 80 && total <=90 ) {
    message = "Your grade is A "
}
else if (total > 70 && total <=80 ) {
    message = "Your grade is B "
}
else if (total > 60 && total <=70 ) {
    message = "Your grade is C "
}
else if (total > 50 && total <=60 ) {
    message = "Your grade is D "
}
else if (total > 40 && total <=50 ) {
    message = "Your grade is E "
}
else if (total > 30 && total <=40 ) {
        message = "Your grade is F "
}
else if (total > 20 && total <=30 ) {
    message = " Fail "
}
else {
    message = " Unable to grade "
}
    return message;
}

// console.log(getGrade(Total))

console.log(getGrade(55))