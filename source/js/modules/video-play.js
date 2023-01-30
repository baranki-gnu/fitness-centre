let videoBlock = document.querySelector('[data-video]');

function onPageLoad() {
  if (videoBlock) {
    videoBlock.classList.remove('gym__video-nojs');
  }
}

function onVideoClick() {
  if (videoBlock) {
    let iframeBlock = videoBlock.querySelector('[data-iframe]');
    let videoCover = videoBlock.querySelector('[data-video-cover]');
    let playButton = videoBlock.querySelector('[data-play-button]');

    if (iframeBlock && videoCover && playButton) {
      videoCover.classList.add('gym__video-cover--hidden');
      playButton.classList.add('gym__video-play--hidden');

      let videoSource = iframeBlock.src + '?rel=0&showinfo=0&autoplay=1';

      iframeBlock.src = videoSource;
    }
  }
}

onPageLoad();

videoBlock.addEventListener('click', onVideoClick);

export {onPageLoad, onVideoClick};
