// Code your solution here

//findMatching = (drivers, string) => {
//    return drivers.filter(function (name) = {
//        return 
//    })
//}

function findMatching(drivers, name) {
      return drivers.filter(element => element.toLowerCase() === name.toLowerCase());
}

function fuzzyMatch(drivers, name) {
    return drivers.filter(element => element.charAt(0) === name.charAt(0));
}

function matchName(drivers, search){
    return drivers.filter(element => element.name === search);
}

