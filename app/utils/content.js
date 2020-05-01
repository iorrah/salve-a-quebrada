const getCtaSuffix = url => {
  if (url.toLowerCase().indexOf('yelp') >= 0) {
    return 'no Yelp';
  }

  if (url.toLowerCase().indexOf('facebook') >= 0) {
    return 'no Facebook';
  }

  if (url.toLowerCase().indexOf('instagram') >= 0) {
    return 'no Instagram';
  }

  if (url.toLowerCase().indexOf('patreon') >= 0) {
    return 'no Patreon';
  }

  if (url.toLowerCase().indexOf('catarse') >= 0) {
    return 'no Catarse';
  }

  if (url.toLowerCase().indexOf('benfeitoria') >= 0) {
    return 'no Benfeitoria';
  }

  if (url.toLowerCase().indexOf('apoia.se') >= 0) {
    return 'no Apoia-se';
  }

  return 'Doações';
};

export { getCtaSuffix };
