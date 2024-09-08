document.addEventListener('DOMContentLoaded', ()=>{
    const videocontroller = document.querySelectorAll('.projects__video')

    const loadVideo = entry =>{
        const container = entry.target;
        const videoSrc = container.querySelector('img').getAttribute('data-src');

        if(videoSrc){
            const videoTag = document.createElement('video');

            videoTag.setAttribute('autoplay', 'autoplay');
            videoTag.setAttribute('loop','loop');
            videoTag.setAttribute('muted', 'muted');
            videoTag.setAttribute('playsinline', 'playsinline');
            videoTag.setAttribute('class', 'projects__video-play');

            const sourceTag = document.createElement('source');

            sourceTag.setAttribute('src', videoSrc)
            sourceTag.setAttribute('type','video/mp4');

            videoTag.appendChild(sourceTag);

            container.innerHTML = '';
            container.appendChild(videoTag);
        }
    }

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry =>{
            if(entry.isIntersecting){
                loadVideo(entry);
                observer.unobserve(entry.target);
            }
        });
    }, {threshold: 0.1});

    videocontroller.forEach(container => observer.observe(container))
})