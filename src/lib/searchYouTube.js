
var searchYouTube = (options, callback) => {
  // TODO
  // todo: save a message to the server
    $.ajax({
      url: 'https://www.googleapis.com/youtube/v3/search',
      type: 'GET',
      data: { 
        key: options.key,
        q: options.query,
        part: 'snippet',
        maxResults: options.max,
        type: 'video',
        videoEmbeddable: true
      },
      success: (data)=>{callback(data.items);},
      error: function(error) {
        console.error('YouTube Failed to fetch messages', error);
      }
    });
};

export default searchYouTube;
