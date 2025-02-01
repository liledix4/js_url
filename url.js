export async function queryString() {
  let promise = new Promise(function(resolve) {
    const queryStringsRaw = location.search.replace('?','').split('&');
    let queryStrings = {};

    if (queryStringsRaw.length > 0)
      for (let i = 0; i < queryStringsRaw.length; i++) {
        if (queryStringsRaw[i].search('=') >= 0) {
          const array = queryStringsRaw[i].split('=');
          const key = array[0];
          const value = array[1];
          if (value !== '')
            queryStrings[key] = decodeURIComponent(value);
        }
      }

    if (Object.keys(queryStrings).length === 0)
      queryStrings = undefined;

    resolve(queryStrings);
  });

  return promise;
}