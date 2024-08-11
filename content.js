function extractVideoTitle() {
    const titleElement = document.querySelector('h1.style-scope.ytd-watch-metadata yt-formatted-string');

    if (titleElement) {
        console.log('Title element found:', titleElement.innerText);
        const titleText = titleElement.innerText || '';
        const [artist, song] = titleText.split(' - ');
        const songCleaned = song.split('(')[0].trim();

        return {
            artist: artist ? artist.trim() : 'Unknown Artist',
            song: songCleaned ? songCleaned.trim() : 'Unknown Song'
        };
    } else {
        console.error('Title element not found.');
        return {
            artist: 'Unknown Artist',
            song: 'Unknown Song'
        };
    }
}

function updateVideoDetails() {
    const videoDetails = extractVideoTitle();
    console.log('Extracted Video Details:', videoDetails);

    chrome.storage.local.set({ songDetails: videoDetails });
}

window.onload = function() {
    updateVideoDetails(); 
    setInterval(updateVideoDetails, 10000); 
};
