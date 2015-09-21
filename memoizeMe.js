var gEBID = (function() {
  var cache = {};

  function anObject(obj){
    if(obj in cache){
      console.log(obj, 'object  is in cache');
      return cache[obj];

    }else {
      cache[obj] = document.getElementById(obj);
      console.log(obj, 'is not in the cache');
      return cache[obj];
    }
  }

  return anObject;
})();
