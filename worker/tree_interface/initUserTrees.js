var _ = require('underscore');
var userTreeCtrl = require('./UserTreeInterface');

var trees = {
  'Arts & Culture': {
    id: 'cl_kbrYow2X',
    rootId: 579707
  },
  'Business': {
    id: 'cl_Zi4UHAnT',
    rootId: 579708
  },
  'Living': {
    id: 'cl_w7hS7nBg',
    rootId: 579709
  },
  'Science & Technology': {
    id: 'cl_24an8BVv',
    rootId: 579710
  },
  'Sports': {
    id: 'cl_XyYeXbGo',
    rootId: 579711
  },
  'World': {
    id: 'cl_QqrxsEvy',
    rootId: 579712
  }
};

//for debugging
// userTreeCtrl.getUserCategoryIdsForAllTrees = function (callback) {
//   callback();
// };
// userTreeCtrl.addUserToAllTrees = function(text, callback) {
//   callback();
// };
// userTreeCtrl.addSample = function(stuff, callback) {
//   callback();
// }
// userTreeCtrl.startTrainingAll = function (callback) {
//   callback();
// }

var randomReadableChar = function () {
    var code = Math.floor(Math.random()*127);
    code = code < 32 ? 32 : code; //average word length will be around 4 letters;
    return String.fromCharCode(code)
}

var makeDummyText = function (length) {
//makes random string of a given length.
  var dummyText = '';
  for(var i = 0; i < length; i++) {
    dummyText += randomReadableChar();
  }
  return dummyText;
}

module.exports.initDummies = function () {
  //adds a user to all trees.  adds a sample to that user for all trees.
  //trains if there are at least two users.
  //must run twice to test classify
  //if run once, cannot classify until at least one user has been added
  var dummy = makeDummyText(10);

  var dummyText = makeDummyText(3000);

  userTreeCtrl.getUserCategoryIdsForAllTrees(function (ids) {
    console.log(ids) //uncomment if you need to know the rootIds.
    var countIds = _.reduce(ids['Living'], function (acc) {
      return acc + 1;
    }, 0);
    userTreeCtrl.addUserToAllTrees(dummy, function () {
      _.each(trees, function (value, treeName) {
        userTreeCtrl.addSample([{text: dummyText, category_id: ids[dummy]}], function () {
          if(countIds > 2) {
            userTreeCtrl.startTrainingAll(function () {
              console.log('initialized dummy users');
            });
          }
        });
      });
    });
  });
};

// userTreeCtrl.getUserCategoryIdsForAllTrees(function (ids) {
//   console.log(ids);
// })

// var dummy = makeDummyText(10);

// userTreeCtrl.addUserToAllTrees(dummy, function () {
//   console.log('woot!')
// })

var text1 = makeDummyText(3000);

var text2 = makeDummyText(3000);

console.log('\n', text1, '\n')
console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA')
console.log('\n', text2, '\n')

// var treeArr = []
// for(tree in trees) {
//   treeArr.push(tree);
// }

// userTreeCtrl.getUserCategoryIdsForAllTrees(function (ids) {
//   setTimeout(function () {
//     _.each(treeArr, function (treeName, index) {
//       setTimeout(function () {
//         var catArr = []
//         for(cat in ids[treeName]) {
//           if(cat !== 'Root') {
//             catArr.push(ids[cat]);
//           }
//         }
//         console.log(ids)
//         console.log(catArr)
//         userTreeCtrl.addSamples(treeName,  [
//             {text: text1, category_id: ids[catArr[0]]}, 
//             {text: text2, category_id: ids[catArr[1]]}
//           ], function () {
//           console.log('added sample');
//         });
//       }, 1000*index);
//     });
//   }, 1000);
// });
