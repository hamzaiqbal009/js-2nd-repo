function createAdder(num) {
    return function(x) {
      return x + num;
    }
  }
  
  const add5 = createAdder(5);
console.log(add5(10)); // output: 15
console.log(add5(20)); // output: 25
console.log(add5(30)); // output: 35


function searchArray(arr, val) {
    // Base case: if the array is empty, return false
    if (arr.length === 0) {
      return false;
    }
    // Recursive case: if the first element of the array is the value, return true
    else if (arr[0] === val) {
      return true;
    }
    // Recursive case: if the first element of the array is not the value, search the rest of the array
    else {
      return searchArray(arr.slice(1), val);
    }
  }
  
  
  const arr = [1, 2, 3, 4, 5];
  console.log(searchArray(arr, 3)); // output: true
  console.log(searchArray(arr, 6)); // output: false
  


  function addParagraph(text) {
    const newParagraph = document.createElement('p'); // create new paragraph element
    newParagraph.textContent = text; // set text content of new paragraph
    document.body.appendChild(newParagraph); // add new paragraph to end of document body
  }

  
  function addListItem(text) {
  const list = document.querySelector('ul'); // get unordered list element
  const newListItem = document.createElement('li'); // create new list item element
  newListItem.textContent = text; // set text content of new list item
  list.appendChild(newListItem); // add new list item to end of unordered list
}


function changeBackgroundColor(element, color) {
    element.style.backgroundColor = color; // set background color of element
  }

  
  function saveObjectToLocalStorage(key, object) {
    const json = JSON.stringify(object); // convert object to JSON string
    localStorage.setItem(key, json); // save JSON string to localStorage with specified key
  }
  

  const myObject0 = { name: 'John', age: 30 };
saveObjectToLocalStorage('myObject', myObject0);


function getObjectFromLocalStorage(key) {
    const json = localStorage.getItem(key); // get JSON string from localStorage with specified key
    if (json === null) {
      return null; // return null if key is not found in localStorage
    }
    const object = JSON.parse(json); // convert JSON string to object
    return object; // return object
  }
  


  const myObject = getObjectFromLocalStorage('myObject');
console.log(myObject);



function saveObjectToLocalStorage(object) {
  // Save each property of the object to localStorage
  for (const key in object) {
    const value = object[key];
    localStorage.setItem(key, JSON.stringify(value));
  }
  
  // Retrieve the object from localStorage and return it as a new object
  const result = {};
  for (const key in object) {
    const value = JSON.parse(localStorage.getItem(key));
    result[key] = value;
  }
  return result;
}

const myObject1 = { name2: 'kashan', age2: 15 };
const retrievedObject = saveObjectToLocalStorage(myObject1);
console.log(retrievedObject);
