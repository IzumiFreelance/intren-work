
async function selectFolder() {
    if (!window.showDirectoryPicker) {
        alert('Your browser does not have picking option');
        return;
    }

    try {
        const dirHandle = await window.showDirectoryPicker();
        const trackList = document.querySelector('.track-list');
        trackList.innerHTML = ''; 

        for await (const [name, handle] of dirHandle) {
            if (handle.kind === 'file' && name.endsWith('.mp3')) {
                const listItem = document.createElement('a');
                listItem.className = 'list-group-item list-group-item-action track-item';
                listItem.textContent = name;
                listItem.onclick = () => playTrack(handle);
                trackList.appendChild(listItem);
            }
        }
    } catch (err) {
        console.error('Error selecting folder:', err);
    }
}

async function playTrack(fileHandle) {
    const file = await fileHandle.getFile();
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = URL.createObjectURL(file);
    audioPlayer.play();
}
