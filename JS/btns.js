import { getRandomElenent, getTruthOrLie } from "./funcs.js"
import { getAnswerToEl } from "./funcs.js"
import { capitalize } from "./funcs.js";

// let themeChose = theme.value
// let answerVal = answer.value
// let questionVal = question.innerHTML
// 



restart.onclick = function() {
    restart.style.display = 'none'
    // start.style.display = 'block'
    console.log(theme.value);
    iter.style = 'none'
    iter.removeAttribute('disabled')
    iter.setAttribute('type', 'number')
    iter.value = ''
    btnConfirm.style = 'none'
    question.style = 'none'
    question.innerHTML = 'Тут будет вопрос'
    answer.style = 'none'
    btn.style = 'none'
    ansCont.style = 'none'
    it.style = 'none'
    label.style.display = 'none'
    errCnt.innerHTML = '0'
    errMax.innerHTML = '...'
    errs.style.color = '#89f591'
    ans.style.display = 'none'
    errCntNum = 0
    yourAnswerEng.innerHTML = "..."
    answerEng.innerHTML = "..."
    yourAnswerEng.style.color = "#000"
}

btnConfirm.onclick = function() {
    if (iter.value <= 0 || iter.value == '') {
        alert('Недопустимые значения')
    } else {
        iterations = iter.value
        i = iterations
        errMax.innerHTML = iterations
        errMaxNum = iterations
        it.style.marginTop = '30px'
        start.style.display = 'block'
        console.log(iterations, i);
        btnConfirm.style.display = 'none'
        iter.style.borderRadius = "50px"
        iter.style.textAlign = "center"
        iter.setAttribute('disabled', 'true')
        iter.setAttribute('type', 'text')
    }
}

start.onclick = function() {
    if(theme.value == "none") {
        alert("Тема не выбрана")
    } else {
        iter.style.marginTop = "10px"
        label.style.display = 'block'
        start.style.display = 'none'
        el = getRandomElenent(theme.value)
        ans.style.display = 'flex'
        // ansEl = getAnswerToEl(el, theme.value)
        console.log(iterations, i);
        question.innerHTML = el
        // console.log(question.innerHTML);
        // console.log(theme.value);
        iter.value = `${i}/${errMaxNum}`
        // console.log(21);
        yourAnswerEng.innerHTML = "..."
        answerEng.innerHTML = "..."
    }
    
}

btn.onclick = function() { 
    i--
    iter.value = `${i}/${errMaxNum}`
    yourAnswerEng.innerHTML = capitalize(answer.value)

    if (!getTruthOrLie(el, theme.value, answer.value)) {
        errCntNum += 1
        errCnt.innerHTML = errCntNum
        yourAnswerEng.style.color = '#f47e7e'
    } else {
        yourAnswerEng.style.color = '#89f591'
    }
    
    if (errCntNum > errMaxNum/2) {
        errs.style.color = "#f47e7e"
    }
    if (i == 0) {
        btn.style.display = "none"
        answer.style.display = "none"
        question.style.display = "none"
        restart.style.display = 'block'
        ansCont.style.width = '400px'

    }
    answerEng.innerHTML = getAnswerToEl(el, theme.value)
    el = getRandomElenent(theme.value)
    console.log(iterations, i);
    question.innerHTML = el
    answer.value = ''
}