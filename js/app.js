// get elements
const list = document.querySelectorAll('.nav li');

const post_method = document.getElementById('post_method');
const self = document.querySelector('.self');

const self_post_form = document.getElementById('self_fb_post_form');
// get photo & video icons 
const btn_photo = self_post_form.querySelector('.extra-field .photo');
const btn_video = self_post_form.querySelector('.extra-field .video');
// get photo & video fields 
const photo_feild = self_post_form.querySelector('.extra-field-inputs .photo')
const video_feild = self_post_form.querySelector('.extra-field-inputs .video')




// nav bar active link set
list.forEach((item) =>
    item.addEventListener('click',activeLink)
);



// post form selector
post_method.onchange = () => {
    if (post_method.value == 'self') {
        self.style.display = 'block';
    } else{
        self.style.display = 'none';
    }
}

// photo field view
btn_photo.onclick = () => {
    photo_feild.style.display = 'block';
    video_feild.style.display = 'none';
} 

// video field view
btn_video.onclick = () => {
    video_feild.style.display = 'block';
    photo_feild.style.display = 'none';
} 


// self post form
self_post_form.onsubmit = (e) => {

    e.preventDefault();



    let timeout = setTimeout(() => {
        video_feild.style.display = 'none';
        photo_feild.style.display = 'none';
        e.target.reset();

        clearTimeout(timeout);
        
    },500)
}





