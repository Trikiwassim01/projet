function submitQuiz() {
    var answers = {
        q1: 'b',
        q2: 'b',
        q3: 'd',
        q4: 'a',
        q5: 'a',
        q6: 'a',
        q7: 'b',
        q8: 'a',
        q9: 'a',
        q10: 'b',

    };

    var score = 0;
    var totalQuestions = Object.keys(answers).length;
    var unanswered = 0;

    for (var i = 1; i <= totalQuestions;+ i++) {
        if(document.forms['quizForm']['q' + i]) {
            var q = document.forms['quizForm']['q' + i];
            var selectedValue = '';
            for (var j = 0; j < q.length; j++) {
                if (q[j].checked) {
                    selectedValue = q[j].value;
                    break;
                }
            }
            if (selectedValue === answers['q' + i]) {
                score++;
            } else if (selectedValue === '') {
                unanswered++;
            }
        }
    }

    var result = document.getElementById('result');
    if (unanswered > 0) {
        result.innerHTML = '<h2>You have ' + unanswered + ' unanswered question(s).</h2>';
    } else {
        result.innerHTML = '<h2>You scored ' + score + ' out of ' + totalQuestions + '</h2>';
    }
}

window.onload = function() {
    document.getElementById('quizForm').onsubmit = function(event) {
        event.preventDefault();
        submitQuiz();
    }
}
