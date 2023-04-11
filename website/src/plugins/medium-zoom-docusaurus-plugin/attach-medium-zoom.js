import mediumZoom from 'medium-zoom';

export default (function () {
  if (typeof window === 'undefined') {
    return null;
  }

  let zoomObject;
  const selector = '.markdown img';

  setTimeout(() => {
    if (zoomObject) {
      zoomObject.detach();
    }
    zoomObject = mediumZoom(selector);
  }, 100);

  return {
    onRouteUpdate({location}) {
      if (location && location.hash && location.hash.length) {
        return;
      }

      setTimeout(() => {
        if (zoomObject) {
          zoomObject.detach();
        }
        zoomObject = mediumZoom(selector);
      }, 100);
    },
  };
})();
