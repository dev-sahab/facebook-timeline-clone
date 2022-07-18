// get elements
const navlist = document.querySelectorAll('.nav li');

// get elements for post user selector
const post_method = document.getElementById('post_method');
const self = document.querySelector('.self');
const soElse = document.querySelector('.else');

// get element for push timeline loop
const timeline = document.getElementById('post_timeline');

// post form
const self_post_form = document.getElementById('self_fb_post_form');
const else_fb_post_form = document.getElementById('else_fb_post_form');

// get photo & video icons 
const btn_photo = self_post_form.querySelector('.extra-field .photo');
const btn_video = self_post_form.querySelector('.extra-field .video');

// get photo & video icons for other user form
const btn_photo2 = else_fb_post_form.querySelector('.extra-field2 .photo');
const btn_video2 = else_fb_post_form.querySelector('.extra-field2 .video');

// get photo & video fields 
const photo_feild = self_post_form.querySelector('.extra-field-inputs .photo');
const video_feild = self_post_form.querySelector('.extra-field-inputs .video');

// get photo & video fields 2
const photo_feild2 = else_fb_post_form.querySelector('.extra-field-inputs2 .photo');
const video_feild2 = else_fb_post_form.querySelector('.extra-field-inputs2 .video');






// like counter
let count = 0;

timeline.onclick = (e) => {

    e.preventDefault();

    const like = e.target.classList.contains("like");


    if(like){

        e.target.classList.add("liked");

        count++;

        if (count > 0) {
            e.target.parentElement.parentElement.firstElementChild.innerHTML = `
                <img src="data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 16 16'%3e%3cdefs%3e%3clinearGradient id='a' x1='50%25' x2='50%25' y1='0%25' y2='100%25'%3e%3cstop offset='0%25' stop-color='%2318AFFF'/%3e%3cstop offset='100%25' stop-color='%230062DF'/%3e%3c/linearGradient%3e%3cfilter id='c' width='118.8%25' height='118.8%25' x='-9.4%25' y='-9.4%25' filterUnits='objectBoundingBox'%3e%3cfeGaussianBlur in='SourceAlpha' result='shadowBlurInner1' stdDeviation='1'/%3e%3cfeOffset dy='-1' in='shadowBlurInner1' result='shadowOffsetInner1'/%3e%3cfeComposite in='shadowOffsetInner1' in2='SourceAlpha' k2='-1' k3='1' operator='arithmetic' result='shadowInnerInner1'/%3e%3cfeColorMatrix in='shadowInnerInner1' values='0 0 0 0 0 0 0 0 0 0.299356041 0 0 0 0 0.681187726 0 0 0 0.3495684 0'/%3e%3c/filter%3e%3cpath id='b' d='M8 0a8 8 0 00-8 8 8 8 0 1016 0 8 8 0 00-8-8z'/%3e%3c/defs%3e%3cg fill='none'%3e%3cuse fill='url(%23a)' xlink:href='%23b'/%3e%3cuse fill='black' filter='url(%23c)' xlink:href='%23b'/%3e%3cpath fill='white' d='M12.162 7.338c.176.123.338.245.338.674 0 .43-.229.604-.474.725a.73.73 0 01.089.546c-.077.344-.392.611-.672.69.121.194.159.385.015.62-.185.295-.346.407-1.058.407H7.5c-.988 0-1.5-.546-1.5-1V7.665c0-1.23 1.467-2.275 1.467-3.13L7.361 3.47c-.005-.065.008-.224.058-.27.08-.079.301-.2.635-.2.218 0 .363.041.534.123.581.277.732.978.732 1.542 0 .271-.414 1.083-.47 1.364 0 0 .867-.192 1.879-.199 1.061-.006 1.749.19 1.749.842 0 .261-.219.523-.316.666zM3.6 7h.8a.6.6 0 01.6.6v3.8a.6.6 0 01-.6.6h-.8a.6.6 0 01-.6-.6V7.6a.6.6 0 01.6-.6z'/%3e%3c/g%3e%3c/svg%3e" width="18" height="18">
                <span>${count}</span>
            `;
        }
    }
}



// nav bar active link set
navlist.forEach((item) =>
    item.addEventListener('click',activeLink)
);



// post form selector
post_method.onchange = () => {
    //seft form
    if (post_method.value == 'self') {
        self.style.display = 'block';
    }else{
        self.style.display = 'none';
    }

    //other user form
    if(post_method.value == "else"){
        soElse.style.display = "block";
    } 
    else{
        soElse.style.display = "none";
    }
}

// photo field view self post form
btn_photo.onclick = () => {
    photo_feild.style.display = 'block';
    video_feild.style.display = 'none';
} 

// video field view self post form
btn_video.onclick = () => {
    video_feild.style.display = 'block';
    photo_feild.style.display = 'none';
} 


// photo field view other user post form
btn_photo2.onclick = () => {
    photo_feild2.style.display = 'block';
    video_feild2.style.display = 'none';
} 

// video field view other user post form
btn_video2.onclick = () => {
    video_feild2.style.display = 'block';
    photo_feild2.style.display = 'none';
} 

//loop for post timeline
const getAllPosts = () => {

    let list = "";
    const data = readLSdata("fb_post");

    // If post not found
    if(!data){
        timeline.innerHTML = "<p class='post-not-found'>No Post Found</p>";
        return false;
    }

    // if data exist
    if(data){

        //loop for post timeline
        data.reverse().map((item, index) => {

            // Self Post loop
            if(item.who_post == 'self'){
                list += `
                <div class="post-card">
                    <div class="card-inner  my-4">
                        <div class="pc-top">
                            <div class="auth-info">
                                <div class="left-side">
                                    <div class="auth-img">
                                        <img src="./assets/img/shahab story.png">
                                    </div>
                                    <div class="auth-details">
                                        <div class="name">
                                            <span>Md Shahab Uddin</span>
                                        </div>
                                        <div class="details">
                                            <span>Just now</span>
                                            <span class="icon">
                                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh cyypbtt7 fwizqjfa" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <span>
                                        <div class="dropdown">
                                            <button data-bs-toggle="dropdown">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item edit" href="#">Edit</a></li>
                                            <li><a class="dropdown-item delete" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            
                            ${item.post_text ? '<div class="post-content"><p>'+item.post_text+'</p></div>' : ''}

                        </div>
                        
                        ${item.photo ? '<div class="pc-image"><img src="'+ item.photo +'"/></div>' : ""}

                        ${item.video ? '<div class="pc-video">'+item.video+'</div>' : ''}

                        <div class="pc-bottom">
                            <div class="like-count"></div>
                            <hr>
                                <div class="reaction">
                                    <div class="like">
                                        <a href="">
                                            <span><i class="fas fa-thumbs-up"></i></span>
                                            <span>Like</span>
                                        </a>
                                    </div>
                                    <div class="comment">
                                        <span><i class="bi bi-chat-square"></i></svg>
                                        </span>
                                        <span>Comment</span>
                                    </div>
                                    <div class="share">
                                        <span><i class="fas fa-share"></i></span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            <hr>
                        </div>
                    </div>
                </div>
                `;
            }

            // other user post loop
            if (item.who_post == 'else'){
                list += `
                <div class="post-card">
                    <div class="card-inner  my-4">
                        <div class="pc-top">
                            <div class="auth-info">
                                <div class="left-side">
                                    <div class="auth-img">
                                        ${ item.user_img ? '<img src="'+item.user_img+'"/>' : '<img src="https://nakedsecurity.sophos.com/wp-content/uploads/sites/2/2013/08/facebook-silhouette_thumb.jpg"/>'}
                                    </div>
                                    <div class="auth-details">
                                        <div class="name">
                                            <span>${item.user_name ? 'item.user_name' : 'Facebook User'}</span>
                                        </div>
                                        <div class="details">
                                            <span>Just now</span>
                                            <span class="icon">
                                                <svg fill="currentColor" viewBox="0 0 16 16" width="1em" height="1em" class="a8c37x1j ms05siws l3qrxjdp b7h9ocf4 py1f6qlh cyypbtt7 fwizqjfa" title="Shared with Public"><title>Shared with Public</title><g fill-rule="evenodd" transform="translate(-448 -544)"><g><path d="M109.5 408.5c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004h-.037c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01a7.49 7.49 0 0 1 6.524 7.434" transform="translate(354 143.5)"></path><path d="M104.107 415.696A7.498 7.498 0 0 1 94.5 408.5a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096" transform="translate(354 143.5)"></path><path fill-rule="nonzero" d="M110 408.5a8 8 0 1 1-16 0 8 8 0 0 1 16 0zm-1 0a7 7 0 1 0-14 0 7 7 0 0 0 14 0z" transform="translate(354 143.5)"></path></g></g></svg>
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div class="right-side">
                                    <span>
                                        <div class="dropdown">
                                            <button data-bs-toggle="dropdown">
                                                <i class="fas fa-ellipsis-h"></i>
                                            </button>
                                            <ul class="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                                            <li><a class="dropdown-item edit" href="#">Edit</a></li>
                                            <li><a class="dropdown-item delete" href="#">Delete</a></li>
                                            </ul>
                                        </div>
                                    </span>
                                </div>
                            </div>
                            
                            ${item.post_text ? '<div class="post-content"><p>'+item.post_text+'</p></div>' : ''}

                        </div>
                        
                        ${item.photo ? '<div class="pc-image"><img src="'+ item.photo +'"/></div>' : ""}

                        ${item.video ? '<div class="pc-video">'+item.video+'</div>' : ''}

                        <div class="pc-bottom">
                            <div class="like-count"></div>
                            <hr>
                                <div class="reaction">
                                    <div class="like">
                                        <a href="">
                                            <span><i class="fas fa-thumbs-up"></i></span>
                                            <span>Like</span>
                                        </a>
                                    </div>
                                    <div class="comment">
                                        <span><i class="bi bi-chat-square"></i></svg>
                                        </span>
                                        <span>Comment</span>
                                    </div>
                                    <div class="share">
                                        <span><i class="fas fa-share"></i></span>
                                        <span>Share</span>
                                    </div>
                                </div>
                            <hr>
                        </div>
                    </div>
                </div>
                `;
            }
        })


    }

    timeline.innerHTML = list;

}



getAllPosts();






// self post form
self_post_form.onsubmit = (e) => {

    e.preventDefault();


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());


    createLSData("fb_post", data);





    let clear = setTimeout(() => {

        video_feild.style.display = 'none';
        photo_feild.style.display = 'none';
        e.target.reset();


        getAllPosts();

        clearTimeout(clear)
    },500)

    

}


// other user post form
else_fb_post_form.onsubmit = (e) => {

    e.preventDefault();


    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());


    createLSData("fb_post", data);





    let clear = setTimeout(() => {

        video_feild.style.display = 'none';
        photo_feild.style.display = 'none';
        e.target.reset();


        getAllPosts();

        clearTimeout(clear)
    },500)

    

}