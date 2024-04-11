const like = document.getElementById('like')
const cmt = document.getElementById('cmt')
const shr = document.getElementById('shr')

let cmtshow = document.querySelector('.cmt-pop-up')
let close = document.querySelector('.btn-c')
let post = document.querySelector('.btn-p')

let like_count = document.getElementById('like-count')
let cmt_count = document.getElementById('cmt-count')
let shr_count = document.getElementById('shr-count')

var like_value = 0;
var cmt_value = 0;
var shr_value = 0;

shr_count.textContent = shr_value;
like_count.textContent = like_value;
cmt_count.textContent = cmt_value;

shr.addEventListener('click', function() {
    shr_count.textContent = shr_value++;
})

like.addEventListener('click', function() {
    like_count.textContent = like_value++;
})

post.addEventListener('click', () => {
    cmt_count.textContent = cmt_value++;
    cmtshow.classList.remove('active');
})

cmt.addEventListener('click', () => {
    cmtshow.classList.add('active');
})
close.addEventListener('click', () => {
    cmtshow.classList.remove('active');
})