const like = document.getElementById('like')
const cmt = document.getElementById('cmt')
const shr = document.getElementById('shr')

let likefill = document.querySelector('.like-fill')
let cmtfill = document.querySelector('.cmt-fill')
let shrfill = document.querySelector('.shr-fill')

let cmtshow = document.querySelector('.cmt-pop-up')
let shrshow = document.querySelector('.shr-pop-up')
let close = document.querySelector('.btn-c')
let post = document.querySelector('.btn-p')
let formbox = document.querySelector('.form-box')

let like_count = document.getElementById('like-count')
let cmt_count = document.getElementById('cmt-count')
let shr_count = document.getElementById('shr-count')

var like_value = 1;
var cmt_value = 0;
var shr_value = 0;

shr_count.textContent = shr_value;
like_count.textContent = like_value;
cmt_count.textContent = cmt_value;

like.addEventListener('click', () => {
    like_count.textContent = like_value--;
    likefill.classList.add('active');
    console.log(like_value)
});
likefill.addEventListener('click', () => {
    like_count.textContent = like_value++;
    likefill.classList.remove('active');
    console.log(like_value)
});

cmt.addEventListener('click', () => {
    cmtshow.classList.add('active');
    cmtfill.classList.add('active');
});

post.addEventListener('click', () => {
    cmt_count.textContent = cmt_value++;
    cmtshow.classList.remove('active');
    cmtfill.classList.remove('active');
});

close.addEventListener('click', () => {
    cmtshow.classList.remove('active');
    cmtfill.classList.remove('active');
});

shr.addEventListener('click', () => {
    shrshow.classList.add('active');
    shrfill.classList.add('active');
});

shrshow.addEventListener('click', () => {
    shr_count.textContent = shr_value++;
    shrshow.classList.remove('active');
    shrfill.classList.remove('active');
});