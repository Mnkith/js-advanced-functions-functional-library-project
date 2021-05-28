const fi = (function () {
  return {
    libraryMethod: function () {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function (collection, callback) {
      // const aryEach = callback(element, index, collection){
      //   collection[index] = callback(element)
      // }

      // function objEach(value, key, collection){
      //   collection[key] = callback(value)
      // }

      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          callback(collection[i], i, collection)
        }
      } else {
        for (const key in collection) {
          callback(collection[key], key, collection)
        }
      }
      return collection

    },

    map: function (collection, callback) {
      const ary = []
      const obj = {}
      if (Array.isArray(collection)) {
        for (let i = 0; i < collection.length; i++) {
          ary[i] = callback(collection[i], i, collection)
        }

      } else {
        let i = 0
        for (const key in collection) {
          ary[i++] = callback(collection[key], key, collection)
        }
      }
      return ary
    },

    reduce: function (collection, callback, acc) {
      if (acc) {
        for (let i = 0; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
      } else {
        acc = collection[0]
        for (let i = 1; i < collection.length; i++) {
          acc = callback(acc, collection[i], collection)
        }
      }
      return acc
    },

    functions: function ff(collection) {
      const funcs = []
      for (const key in collection) {
        if (typeof collection[key] === "function") {
          funcs.push(key)
        }
      }
      return funcs.sort()
    },

    find: function (collection, callback) {
      for (const el of collection) {
        if (callback(el)) {
          return el
        }
      }
    },

    filter: function (collection, predicate) {
      const ary = []
      for (const el of collection) {
        if (predicate(el)) {
          ary.push(el)
        }
      }
      return ary
    },

    size: function (collection) {
      if (Array.isArray(collection)) {
        return collection.length
      } else {
        return Object.keys(collection).length
      }
    },

    first: function (collection, n = 0) {
      if (n) {
        const ary = []
        for (let i = 0; i < n; i++) {
          ary.push(collection[i])
        }
        return ary
      }
      return collection[n]
    },

    last: function (collection, n = 0) {
      if (n) {
        const ary = []
        for (let i = collection.length - n; i < collection.length; i++) {
          ary.push(collection[i])
        }
        return ary
      }
      return collection[collection.length - 1]
    },

    compact: function (collection) {
      return this.filter(collection, (x) => x)
    },

    sortBy: function f(collection, callback) {
      const ary = collection.slice()
      return ary.sort((a, b) => callback(a) - callback(b))
    },

    flatten: function (ary, flag, res = []) {
      for (const el of ary)
        if (flag)
          Array.isArray(el) ? res.push(...el) : res.push(el)
        else
          Array.isArray(el) ? this.flatten(el, flag, res) : res.push(el)
      return res
    },

    uniq: function (ary, flag, callback = (x) => x) {
      const res = [], cbres = []
      for (const el of ary)
        if (!cbres.includes(callback(el))) {
          cbres.push(callback(el))
          if (!res.includes(el))
            res.push(el)
        }
      return res
    },

    keys: function (obj){
      const res = []
      for(const key in obj )
        res.push(key)
      return res 
    }, 

    values: function (obj){
      const res = []
      for(const key in obj )
        res.push(obj[key])
      return res 
    }






  }
})()

// fi.libraryMethod()
// function flatten(ar, flag) {
//   const a = []
//   function f(ar) {
//     for (const el of ar)
//       if (flag)
//         Array.isArray(el) ? a.push(...el) : a.push(el)
//       else
//         Array.isArray(el) ? f(el) : a.push(el)
//   }
//   f(ar)
//   return a
// }
// console.log(flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]], 8))
// console.log(flatten([1, [2, 3], [[4, 5], 6, [7, [8, 9]]]], 0))


function uniq(ary, flag, callback = (x) => x) {
  const res = [], cbres = [], obj = {}
  for (const el of ary)
    obj[' ' + callback(el)] = el
  const n = Object.values(obj)
  return Object.values(obj)

}

uniq([1, 2, 2, 3, 4, 6, 9], false, (val => val % 3))