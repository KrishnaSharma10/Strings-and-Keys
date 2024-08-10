chrome.runtime.onMessage.addListener((request,sender,sendResponse) =>{
    if(request){
        document.querySelector('.fill-song').textContent = request.song;
        document.querySelector('.fill-singer').textContent = request.artist;
    }
});