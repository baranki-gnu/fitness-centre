let videoBlock = document.querySelector('[data-video]');

function onPageLoad() {
  if (videoBlock) {
    videoBlock.classList.remove('gym__video-nojs');
    videoBlock.addEventListener('click', onVideoClick);
  }
}

function onVideoClick() {
  if (videoBlock) {
    let iframeBlock = videoBlock.querySelector('[data-iframe]');
    let videoCover = videoBlock.querySelector('[data-video-cover]');
    let playButton = videoBlock.querySelector('[data-play-button]');

    if (iframeBlock && videoCover && playButton) {
      iframeBlock.classList.add('active');
      videoCover.classList.add('gym__video-cover--hidden');
      playButton.classList.add('gym__video-play--hidden');

      let videoSource = iframeBlock.src + '?rel=0&showinfo=0&autoplay=1';

      iframeBlock.src = videoSource;
    }
  }
}

onPageLoad();

export {onPageLoad, onVideoClick};
