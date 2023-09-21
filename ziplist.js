const list1 = ['a', 'b', 'c'];
const list2 = [1, 2, 3];

function zipList(list, yes) {
  let i;
  const arr = [];
  for (i = 0; i < list1.length; i++) {
    arr.push(list[i], yes[i]);
  }
  return arr;
}

console.log(zipList(list1, list2));

function zipListTheSimpleWay(list, yes) {
  return _.flatten(_.zip(list, yes));
}

console.log(zipListTheSimpleWay(list1, list2));
