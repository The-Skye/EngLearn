let btn = document.getElementById('btn')
let btnConfirm = document.getElementById('btn-confirm')
let iter = document.getElementById('iterations')

let err = document.querySelector('.errors')
let errs = document.querySelector('#err')
let errCnt = document.querySelector('#errors-cnt')
let errMax = document.querySelector('#errors-max')

let answer = document.querySelector('#answer')
let ans = document.querySelector('.answer')
let start = document.querySelector('#start')
let restart = document.querySelector('#restart')

let theme = document.querySelector('#theme')
let question = document.querySelector('#question')

let errCntNum = Number(errCnt.innerHTML)
let errMaxNum = Number(errMax.innerHTML)

let answerVal = answer.value
let iterations = null
// let iterations = iter.value

let ansCont = document.querySelector('.answer-cont')

let el = null
let ansEl = null
let i = null

let label = document.querySelector('.label')
let it = document.querySelector('.iteration')
let answerEng = document.querySelector('#answer-eng')
let yourAnswerEng = document.querySelector("#your-answer-eng")
// let el = getRandomElenent(theme.value)
// let ansEl = getAnswerToEl(el)