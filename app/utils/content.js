const exists = (target, keyword) => {
  if (target.toLowerCase().indexOf(keyword) >= 0) {
    return true;
  }

  return false;
};

const getCtaSuffix = url => {
  if (exists(url, 'yelp')) {
    return 'no Yelp';
  }

  if (exists(url, 'facebook')) {
    return 'no Facebook';
  }

  if (exists(url, 'instagram')) {
    return 'no Instagram';
  }

  if (exists(url, 'patreon')) {
    return 'no Patreon';
  }

  if (exists(url, 'catarse')) {
    return 'no Catarse';
  }

  if (exists(url, 'benfeitoria')) {
    return 'no Benfeitoria';
  }

  if (exists(url, 'apoia.se')) {
    return 'no Apoia-se';
  }

  return 'Website';
};

export { getCtaSuffix };
