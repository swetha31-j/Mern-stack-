/***********************
 BEGINNER LEVEL
************************/

/* 1. getUserInitials */
function getUserInitials(user) {
  return user.firstName[0] + user.lastName[0];
}


/* 2. countProperties */
function countProperties(obj) {
  return Object.keys(obj).length;
}


/* 3. invertObject */
function invertObject(obj) {
  const result = {};
  for (let key in obj) {
    result[obj[key]] = key;
  }
  return result;
}


/* 4. removeFalsyValues */
function removeFalsyValues(arr) {
  return arr.filter(Boolean);
}



/***********************
 EASY LEVEL
************************/

/* 5. groupByAge */
function groupByAge(people) {
  return people.reduce((acc, person) => {
    if (!acc[person.age]) acc[person.age] = [];
    acc[person.age].push(person);
    return acc;
  }, {});
}


/* 6. findMostFrequentElement */
function findMostFrequentElement(arr) {
  const freq = {};
  let max = 0;
  let result;

  for (let num of arr) {
    freq[num] = (freq[num] || 0) + 1;

    if (freq[num] > max) {
      max = freq[num];
      result = num;
    }
  }

  return result;
}


/* 7. flatten array (any depth) */
function flatten(arr) {
  return arr.flat(Infinity);
}



/***********************
 MEDIUM LEVEL
************************/

/* 8. deep merge objects */
function mergeObjects(...objects) {

  function deepMerge(target, source) {
    for (let key in source) {

      if (
        source[key] &&
        typeof source[key] === "object" &&
        !Array.isArray(source[key])
      ) {

        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);

      } else {
        target[key] = source[key];
      }

    }
    return target;
  }

  return objects.reduce((acc, obj) => deepMerge(acc, obj), {});
}


/* 9. rotateArray */
function rotateArray(arr, k) {

  const n = arr.length;
  k = k % n;

  return [...arr.slice(-k), ...arr.slice(0, n - k)];
}


/* 10. intersection */
function intersection(nums1, nums2) {

  const set2 = new Set(nums2);

  return [...new Set(nums1.filter(x => set2.has(x)))];
}


/* 11. groupAnagrams */
function groupAnagrams(words) {

  const map = {};

  for (let word of words) {

    const key = word.split("").sort().join("");

    if (!map[key]) map[key] = [];

    map[key].push(word);
  }

  return Object.values(map);
}



/***********************
 MEDIUM HARD
************************/

/* 12. moveZerosToEnd */
function moveZerosToEnd(arr) {

  let insertPos = 0;

  for (let i = 0; i < arr.length; i++) {

    if (arr[i] !== 0) {
      arr[insertPos++] = arr[i];
    }

  }

  while (insertPos < arr.length) {
    arr[insertPos++] = 0;
  }

  return arr;
}



/***********************
 HARD LEVEL
************************/

/* 13. longestConsecutiveSequence */
function longestConsecutiveSequence(nums) {

  const set = new Set(nums);
  let maxLength = 0;

  for (let num of set) {

    if (!set.has(num - 1)) {

      let current = num;
      let length = 1;

      while (set.has(current + 1)) {
        current++;
        length++;
      }

      maxLength = Math.max(maxLength, length);
    }
  }

  return maxLength;
}


/* 14. productExceptSelf */
function productExceptSelf(nums) {

  const result = new Array(nums.length).fill(1);

  let left = 1;

  for (let i = 0; i < nums.length; i++) {
    result[i] = left;
    left *= nums[i];
  }

  let right = 1;

  for (let i = nums.length - 1; i >= 0; i--) {
    result[i] *= right;
    right *= nums[i];
  }

  return result;
}


/* 15. deepEqual */
function deepEqual(obj1, obj2) {

  if (obj1 === obj2) return true;

  if (
    typeof obj1 !== "object" ||
    typeof obj2 !== "object" ||
    obj1 === null ||
    obj2 === null
  ) return false;

  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) return false;

  for (let key of keys1) {

    if (!deepEqual(obj1[key], obj2[key])) {
      return false;
    }

  }

  return true;
}



/* 16. serializeObject & deserializeObject */

function serializeObject(obj) {

  return JSON.stringify(obj, function(key, value) {

    if (value === undefined)
      return { type: "undefined" };

    if (value instanceof Date)
      return { type: "Date", value: value.toISOString() };

    if (value instanceof Map)
      return { type: "Map", value: [...value] };

    if (value instanceof Set)
      return { type: "Set", value: [...value] };

    return value;
  });
}



function deserializeObject(str) {

  return JSON.parse(str, function(key, value) {

    if (value && value.type === "undefined")
      return undefined;

    if (value && value.type === "Date")
      return new Date(value.value);

    if (value && value.type === "Map")
      return new Map(value.value);

    if (value && value.type === "Set")
      return new Set(value.value);

    return value;
  });
}



/***********************
 TEST EXAMPLES
************************/

console.log(getUserInitials({firstName:"Rahul",lastName:"Sharma"}));

console.log(countProperties({a:1,b:2,c:3}));

console.log(invertObject({a:1,b:2}));

console.log(removeFalsyValues([0,1,false,2,"",3,null]));

console.log(groupByAge([
  {name:"A",age:24},
  {name:"B",age:30},
  {name:"C",age:24}
]));

console.log(findMostFrequentElement([1,2,2,3,3,3]));

console.log(flatten([1,[2,3],[4,[5,6]]]));

console.log(rotateArray([1,2,3,4,5],2));

console.log(intersection([1,2,3],[2,3,4]));

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));

console.log(moveZerosToEnd([0,1,0,3,12]));

console.log(longestConsecutiveSequence([100,4,200,1,3,2]));

console.log(productExceptSelf([1,2,3,4]));

console.log(deepEqual({a:1,b:{c:2}},{a:1,b:{c:2}}));

const serialized = serializeObject({
  a: undefined,
  b: new Date(),
  c: new Map([[1,"one"]]),
  d: new Set([1,2,3])
});

console.log(serialized);
console.log(deserializeObject(serialized));
