const fetchURL = "https://erp-backend-xkze.vercel.app";

let formatDate = () => {
  let date = new Date();
  let year = date.getFullYear();
  let month = String(date.getMonth() + 1).padStart(2, "0");
  let day = String(date.getDate()).padStart(2, "0");

  let formattedDate = `${year}-${month}-${day}`;
  return formattedDate;
};

const addToProceed = (newItem, store) => {
  // localStorage.removeItem(`${window.location.hostname}-${store}`);
  localStorage.setItem(
    `${window.location.hostname}-${store}`,
    JSON.stringify(newItem)
  );
  return true;
};


// const addToProceed = (newItem, store) => {
//   const storageKey = `${window.location.hostname}-${store}`;

//   // Retrieve the current object from localStorage, or initialize an empty object if none exists
//   let existingData = JSON.parse(localStorage.getItem(storageKey)) || {};

//   // Merge the new item into the existing data (assuming newItem contains key-value pairs)
//   const updatedData = { ...existingData, ...newItem };

//   // Save the updated object back to localStorage
//   localStorage.setItem(storageKey, JSON.stringify(updatedData));

//   return true;
// };

const getStoredCart = (store) => {
  let strCart = [];
  const storedCart = localStorage.getItem(
    `${window.location.hostname}-${store}`
  );
  if (storedCart) {
    strCart = JSON.parse(storedCart);
  }
  return strCart;
};

const removeItemFromCart = (store, itemId) => {
  let cart = getStoredCart(store);

  // Remove the item with the specific itemId
  const updatedCart = cart.filter((item) => item.id !== itemId);

  // Save the updated cart back to localStorage
  localStorage.setItem(
    `${window.location.hostname}-${store}`,
    JSON.stringify(updatedCart)
  );
};

const addToCart = (newItem) => {
  const currentCart =
    JSON.parse(
      localStorage.getItem(`${window.location.hostname}-order-info`)
    );
  const existing = currentCart.findIndex(
    (item) => item.item_code === newItem.item_code
  );
  if (existing !== -1) {
    currentCart[existing].qty += 1;
    localStorage.setItem(
      `${window.location.hostname}-order-info`,
      JSON.stringify(currentCart)
    );
    return false;
  } else {
    currentCart.push(newItem);
    localStorage.setItem(
      `${window.location.hostname}-order-info`,
      JSON.stringify(currentCart)
    );
    return true;
  }
};

// const getData = async (docName) => {
//   try {
//     const response = await fetch(
//       `https://post-request.onrender.com/getall?erp_url=${url}&doctype_name=${docName}`
//     );
//     if (!response.ok) {
//       throw new Error(`Error: ${response.status}`);
//     }
//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//     return err.message;
//   }
// };

// Function to update data
function updateData(key, newName) {
  // Retrieve and parse the object from local storage
  const storedSum = getStoredCart("item-all-data");
  // console.log(storedSum);
  if (storedSum) {
    // Update the specified key with the new name
    if (storedSum[key]) {
      storedSum[key]["qty"] = newName;
      // Store the updated object back in local storage
      // localStorage.setItem('sum', JSON.stringify(storedSum));
      addToProceed(storedSum, "item-all-data");

      // console.log(`Updated key ${key} with name ${newName}`);
    } else {
      console.log(`Key ${key} does not exist.`);
    }
  } else {
    console.log("No data found in localStorage for key: sum");
  }
}


function updateDataOrder(key, newName) {
  console.log(key, newName);
  // Retrieve and parse the object from local storage
  const storedSum = getStoredCart("order-info");
  console.log("function ",storedSum);
  if (storedSum) {
    // Update the specified key with the new name
    for (let i of storedSum) {
      if (i.item_code === key) {
        i.qty = newName
        addToProceed(storedSum, "order-info");
        break;
      }
    }
    // if (storedSum[key]) {
    //   storedSum[key]["qty"] = newName;
    //   // Store the updated object back in local storage
    //   // localStorage.setItem('sum', JSON.stringify(storedSum));
    //   addToProceed(storedSum, );

    //   // console.log(`Updated key ${key} with name ${newName}`);
    // } else {
    //   console.log(`Key ${key} does not exist.`);
    // }
  } else {
    console.log("No data found in localStorage for key: sum");
  }
}

// updateDataOrder()

// const handlePlus = (itemName) => {
//   console.log(itemName);
//   setQuantities((prevQuantities) => ({
//     ...prevQuantities,
//     [itemName]: (prevQuantities[itemName] || 0) + 1,
//   }));
//   for (let i in data) {
//     if (i.item_code === itemName) {
//       i.qty +=1 
//       updateDataOrder(itemName, i.qty );
//     }
//   }
 
// };

function updateOrder(key, newName) {
  // Retrieve and parse the object from local storage
  const storedSum = getStoredCart("order-info");
  // console.log(storedSum);
  if (storedSum) {
    // Update the specified key with the new name
    if (storedSum[key]) {
      storedSum[key]["qty"] = newName;
      // Store the updated object back in local storage
      // localStorage.setItem('sum', JSON.stringify(storedSum));
      addToProceed(storedSum, "order-info");

      // console.log(`Updated key ${key} with name ${newName}`);
    } else {
      console.log(`Key ${key} does not exist.`);
    }
  } else {
    console.log("No data found in localStorage for key: sum");
  }
}

// Example of updating the name for key '10'
// updateData('10', 'newName');

export {
  addToProceed,
  getStoredCart,
  formatDate,
  fetchURL,
  addToCart,
  removeItemFromCart,
  updateData,
  updateOrder,
  updateDataOrder
};
