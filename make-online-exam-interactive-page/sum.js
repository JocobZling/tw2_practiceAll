const answer = ["统一建模语言", {key: ["封装性", "继承性", "多态性"]},
    "B", "A",
    "ABD", "ABC", "0", "1",
    "模型是对现实世界的简化和抽象、模型是对所研究的系统、过程、事物、或概念的一种表达方式。可以是物理实体；可以使某种图形；或者是一种数学表达式"];

function getAnswer() {
    let result = [];
    let tiankong1 = document.getElementsByName("0")[0].value;
    result.push(tiankong1);
    let tiankong2 = [];

    document.getElementsByName("1").forEach(item => {
        tiankong2.push(item.value);
    });
    result.push({key: tiankong2});

    let xuanze1 = document.getElementsByName("radio1");
    result.push(singleAnswer(xuanze1));
    let xuanze2 = document.getElementsByName("radio2");
    result.push(singleAnswer(xuanze2));

    let duoxuan1 = document.getElementsByName("checkbox1");
    result.push(mulAnswer(duoxuan1));
    let duoxuan2 = document.getElementsByName("checkbox2");
    result.push(mulAnswer(duoxuan2));

    let panduan1 = document.getElementsByName("panduan1");
    result.push(singleAnswer(panduan1));
    let panduan2 = document.getElementsByName("panduan2");
    result.push(singleAnswer(panduan2));

    result.push(document.getElementsByName(5)[0].value);

    console.log(result);
    return result;
}

//单选题;判断题
function singleAnswer(item) {
    for (let check of item) {
        if (check.checked) {
            return check.value;
        }
    }
}
//多选题
function mulAnswer(item) {
    let res = "";
    for (let check of item) {
        if (check.checked) {
            res += check.value;
        }
    }
    return res;
}

//获得总分
function getPoint(ans) {
    let sum = 0;
    //5分
    if (ans[0] === answer[0]) {
        sum += 5
    }
    let bool = true;
    console.log(ans[1].key);
    for (let item of ans[1].key) {
        if (answer[1].key.indexOf(item) === -1) {
            bool = false;
        }
    }
    if (bool === true) {
        sum += 5;
    }
    //10分题
    for (let i = 2; i < ans.length - 1; i++) {
        if (ans[i] === answer[i]) {
            sum += 10;
        }
    }
    //20分
    if (ans[8] === answer[8]) {
        sum += 20;
    }
    console.log(sum);
    return sum;
}

function displayPoint() {
    let stutdentAnswer = getAnswer();
    let point = getPoint(stutdentAnswer);
    let exam = document.getElementById("exam");
    let result =document.getElementById("result");
    exam.style.display = "none";
    result.style.display="inline";
    let studentInfo= document.getElementById("StudentInformation")
    studentInfo.innerHTML=`<h1>学生分数为${point}</h1>`;
}

