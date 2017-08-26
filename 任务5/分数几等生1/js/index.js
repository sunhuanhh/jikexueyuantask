function count() {
        var score = document.getElementById('score').value;
        document.getElementById('result').innerText = op(score);
    }

    function op(score) {
        if (!score) {
            return "请输入0~100之间的数字";
        } else if (score >= 90 && score <= 100) {
            return "1等生";
        } else if (score >= 80 && score < 90) {
            return "2等生";
        } else if (score >= 70 && score < 80) {
            return "3等生";
        } else if (score >= 60 && score < 70) {
            return "4等生";
        } else if (score >= 50 && score < 60) {
            return "5等生";
        } else if (score >= 40 && score < 50) {
            return "6等生";
        } else if (score >= 30 && score < 40) {
            return "7等生";
        } else if (score >= 20 && score < 30) {
            return "8等生";
        } else if (score >= 10 && score < 20) {
            return "9等生";
        } else if (score >= 0 && score < 10) {
            return "10等生";
        } else {
            return "请输入0~100之间的数字";
        }
    }