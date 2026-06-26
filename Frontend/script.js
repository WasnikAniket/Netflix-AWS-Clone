const uploadURL = "https://lwd6is8bsb.execute-api.ap-northeast-1.amazonaws.com/upload";
const getURL = "https://lwd6is8bsb.execute-api.ap-northeast-1.amazonaws.com/videos";

async function uploadVideo() {

    const video = {
        videoId: document.getElementById("videoId").value,
        title: document.getElementById("title").value,
        uploader: document.getElementById("uploader").value
    };

    const response = await fetch(uploadURL,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify(video)
    });

    const data = await response.json();

    alert(data.message);

    loadVideos();
}

async function loadVideos(){

    const response = await fetch(getURL);

    const videos = await response.json();

    let html="";

    videos.forEach(video=>{

        html += `
        <div class="movie-card">
            <h2>${video.title}</h2>
            <p><b>ID:</b> ${video.videoId}</p>
            <p><b>Uploader:</b> ${video.uploader}</p>
            <p>${video.uploadTime}</p>
        </div>
        `;

    });

    document.getElementById("movies").innerHTML=html;

}

loadVideos();