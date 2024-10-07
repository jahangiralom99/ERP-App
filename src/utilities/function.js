

const addToProceed = (newItem, store) => {
  localStorage.removeItem(`${window.location.hostname}-${store}`);
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

export { addToProceed, getStoredCart };
