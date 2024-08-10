document.addEventListener('DOMContentLoaded', () => {
    // Directly access the title within <yt-formatted-string>
    const videoTitleElement = document.querySelector('h1.style-scope.ytd-watch-metadata yt-formatted-string');
    
    if (videoTitleElement) {
        const videoTitle = videoTitleElement.innerText;

        // Try logging or checking the full title
        console.log('Full Title:', videoTitle);

        // Implement title parsing logic based on the known format
        if (videoTitle.includes(' - ')) {
            const [artist, song] = videoTitle.split(' - ');
            chrome.runtime.sendMessage({ artist: artist.trim(), song: song.trim() });
        } else {
            console.error('Title format is unexpected:', videoTitle);
        }
    } else {
        console.error('Video title element not found.');
    }
});
