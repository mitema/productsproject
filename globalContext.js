import { createContext, useState } from "react";

export const CartContext = createContext({
  items: [],
  getProductQuantity: () => {},
  addOneToCart: () => {},
  removeOneFromCart: () => {},
  deleteFromCart: () => {},
  getTotalCost: () => {},
});

export function CartProvider({ children }) {
  //{product:1, quantity}
  const [cartProducts, setCartProducts] = useState([]);

  //Steps
  // Check if product exists
  // if the product does not exist add it to the cartproducts

  function checkIfProductExists(id) {
    var exists = false;
    cartProducts.forEach((product, index) => {
      if (product.id === id) {
        console.log("EXISTS");
        exists = true;
      }
    });
    return exists;
  }

  function getProductQuantity(id) {
    const quantity = cartProducts.find(
      (product) => product.id === id
    )?.quantity;

    if (quantity === undefined) {
      return 0;
    }
    return quantity;
  }

  function addToCart(
    id,
    productQuantity,
    productName,
    productPrice,
    productUrl
  ) {
    if (checkIfProductExists(id)) {
      const updatedProducts = cartProducts.map((product, index) => {
        if (product.id === id) {
          console.log("in product id");
          return { ...product, quantity: product.quantity + productQuantity };
        } else {
          return product;
        }
      });
      setCartProducts(updatedProducts);
    } else {
      console.log("product not in cart");
      setCartProducts([
        ...cartProducts,
        {
          id: id,
          quantity: productQuantity,
          name: productName,
          price: productPrice,
          productUrl: productUrl,
        },
      ]);
    }
    // console.log("in add to  cart");
    // if (cartProducts.length === 0) {
    //   setCartProducts([
    //     ...cartProducts,
    //     {
    //       id: id,
    //       quantity: productQuantity,
    //       name: productName,
    //       price: productPrice,
    //       productUrl: productUrl,
    //     },
    //   ]);
    // } else {
    //   console.log("in else add to cart");

    //   const products = cartProducts.forEach((product, index) => {
    //     if (product.id === id) {
    //       return { ...product, quantity: product.quantity + productQuantity };
    //     } else {
    //       console.log("in product");
    //       console.log(product);
    //       return {
    //         id: id,
    //         quantity: productQuantity,
    //         name: productName,
    //         price: productPrice,
    //         productUrl: productUrl,
    //       };
    //       // return product;
    //       // console.log("in else product quantity");
    //       // setCartProducts([
    //       //   ...cartProducts,
    //       //   {
    //       //     id: id,
    //       //     quantity: productQuantity,
    //       //     name: productName,
    //       //     price: productPrice,
    //       //     productUrl: productUrl,
    //       //   },
    //       // ]);
    //     }
    //   });
    //   console.log(`cartproducts`);
    //   console.log(products);
    // }

    //const quantity = getProductQuantity(id);

    // if (productQuantity === 0) {
    //   console.log("in if addtoc");
    //   setCartProducts([
    //     ...cartProducts,
    //     {
    //       id: id,
    //       quantity: 1,
    //     },
    //   ]);
    // } else {
    //   console.log("in else setProductQuantity");
    //   console.log(cartProducts);
    //   setCartProducts(
    //     cartProducts.map(
    //       (product) => {
    //         console.log();
    //         if (product.id === id) {
    //           console.log("product id");
    //         } else {
    //         }
    //       }

    //       // ? { ...product, quantity: productQuantity }
    //       // : product
    //     )
    //   );
    // }
  }

  function removeOneFromCart(id) {
    // steps : does the product exist,
    // if it exist remove from cart
    // if it is 1 delete from cart
    console.log("remove from one cart");
    const quantity = getProductQuantity(id);

    if (quantity == 1) {
      deleteFromCart(id);
    } else if (checkIfProductExists(id)) {
      const updatedProducts = cartProducts.map((product, index) => {
        if (product.id === id) {
          console.log("in product id");
          return { ...product, quantity: product.quantity - 1 };
        } else {
          return product;
        }
      });
      setCartProducts(updatedProducts);
    }
    // } else {
    //   console.log(cartProducts);
    //   setCartProducts(
    //     cartProducts.map(
    //       (product) => {
    //         if (product.id === id) {
    //           console.log("in product id");
    //           return { ...product, quantity: product.quantity - 1 };
    //         } else {
    //           return product;
    //         }
    //       }

    // product.id === id
    //   ? { ...product, quantity: product.quantity - 1 }
    //   : product
  }

  function deleteFromCart(id) {
    setCartProducts((cartProducts) =>
      cartProducts.filter((currentProduct) => {
        return currentProduct.id != id;
      })
    );
  }

  return (
    <CartContext.Provider
      value={{
        products: cartProducts,
        addProductToCart: addToCart,
        removeAProductFromCart: removeOneFromCart,
        deleteFromCart: deleteFromCart,
        getProductQuantity: getProductQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
