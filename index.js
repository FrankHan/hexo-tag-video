/**
* video tag
*
* Syntax:
*   {% video 'videoCode' %}
*
* Sample:
*   {% video '<iframe height=498 width=510 src="http://player.youku.com/embed/XNTkyMTM0MzY4" frameborder=0 allowfullscreen></iframe>' %}
*
*/

hexo.extend.tag.register('video', function(args, content, options) {

  var videoCode = args[0];

  videoCode = videoCode.replace(/height\=\d*/, '');
  videoCode = videoCode.replace(/width\=\d*/, '');
  videoCode = videoCode.replace(/style/, '');
  videoCode = videoCode.replace(/(^\s*\')|(\'\s*$)/g, "");

  return '<div class="video-container">' + videoCode + '</div>';
});
