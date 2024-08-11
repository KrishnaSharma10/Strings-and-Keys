document.addEventListener('DOMContentLoaded', () => {
    chrome.storage.local.get('songDetails', (data) => {
        if (data.songDetails) {
            document.querySelector('.fill-song').textContent = data.songDetails.song;
            document.querySelector('.fill-singer').textContent = data.songDetails.artist;
        }
    });
});

document.getElementById("get-chord-sheet").addEventListener("click",function(){
    console.log("Hi");
    const song = document.querySelector('.fill-song').textContent;
    const artist = document.querySelector('.fill-singer').textContent;
    const query = encodeURIComponent(`${song} ${artist}`);
    const searchUrl = `https://www.ultimate-guitar.com/search.php?search_type=title&value=${query}`;
    chrome.tabs.create({ url: searchUrl });
})