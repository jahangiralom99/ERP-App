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

const addToCart = (newItem) => {
  const currentCart =
    JSON.parse(localStorage.getItem(`${window.location.hostname}-cart`)) || [];
  const existing = currentCart.findIndex(
    (item) => item.item_code === newItem.item_code
  );
  if (existing !== -1) {
    currentCart[existing].qty += 1;
    localStorage.setItem(
      `${window.location.hostname}-cart`,
      JSON.stringify(currentCart)
    );
    return false;
  } else {
    currentCart.push(newItem);
    localStorage.setItem(
      `${window.location.hostname}-cart`,
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

export { addToProceed, getStoredCart, formatDate, fetchURL, addToCart };
