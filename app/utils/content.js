const getCtaSuffix = url => {
  if (url.toLowerCase().indexOf('yelp') >= 0) {
    return 'no Yelp';
  }

  return 'Doações';
};

export { getCtaSuffix };
