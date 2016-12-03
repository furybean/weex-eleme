export const getImageURL = function(hash) {
  const urlPart = hash.replace(/^(\w)(\w\w)(\w{29}(\w*))$/, '/$1/$2/$3.$4');
  return `https://fuss10.elemecdn.com/${urlPart}?imageMogr/format/jpeg/thumbnail/184x/`;
};
