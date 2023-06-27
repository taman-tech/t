function downloadVideo() {
  var videoUrl = document.getElementById('videoUrl').value;
  var videoId = extractVideoId(videoUrl);
  var downloadUrl = 'https://www.tiktok.com/@username/video/' + videoId;

  window.open(downloadUrl, '_blank');
}

function extractVideoId(url) {
  var match = url.match(/\/video\/(\d+)/);
  if (match && match[1]) {
    return match[1];
  }
  return null;
}