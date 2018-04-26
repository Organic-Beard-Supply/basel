/* needs refactor for scalability in tags, but here's the initial implementation */

/* Quick Shop */
function trackQuickView(productId, productHandle, productTitle) {
  analytics.track('Quick View Open', {
    location: 'Product Grid',
    CTA: 'Quick View Product',
    category: 'Shopping',
    type: 'Icon',
    productId, 
    productHandle,
    productTitle,
  });
}

function trackQuickShopClick(productId, productHandle, productTitle) {
  analytics.track('Quick Shop Open', {
    location: 'Collections',
    CTA: 'Quick Shop: Open',
    category: 'Quick Shop',
    type: 'Button',
    productId, 
    productHandle,
    productTitle,
  });
}

function trackQuickShopAddToCart(productId, productHandle, productTitle) {
  analytics.track('Add To Cart', {
    location: 'Collections',
    CTA: 'Quick Shop: Add To Cart',
    category: 'Quick Shop',
    type: 'Button',
    productId, 
    productHandle,
    productTitle,
  });
} // backwards compat - replace with trackAddToCart(..., category='Quick Shop')

function trackAddToCart(category, location, method, productId, productHandle, productTitle, type) {
  analytics.track('Add To Cart', {
    CTA: 'Quick Shop: Add To Cart',
    category: category || 'Shop',
    location: location || 'Collections',
    type: type || 'Standard',
    method: method || 'Button',
    productId, 
    productHandle,
    productTitle,
  });
}


/* Wishlist */
function trackWishListClick(customerId, customerEmail, customerName, productId, productHandle, productTitle) {
  analytics.track('Added to Wishlist', {
    location: 'Product Grid',
    CTA: 'Added to Wishlist',
    category: 'Shopping',
    type: 'Icon',
    customerId,
    customerEmail,
    customerName,
    productId, 
    productHandle,
    productTitle,
  });
}

function trackLoginToWishListClick(productId, productHandle, productTitle) {
  analytics.track('Login to Use Wishlist', {
    location: 'Product Grid',
    CTA: 'Clicked Login to Use Wishlist link',
    category: 'Shopping',
    type: 'Icon',
    productId, 
    productHandle,
    productTitle,
  });
}


/* Compare */
function trackCompareClick(productId, productHandle, productTitle) {
  analytics.track('Compared Product', {
    location: 'Product Grid',
    CTA: 'Compared product',
    category: 'Shopping',
    type: 'Icon',
    productId, 
    productHandle,
    productTitle,
  });
}

/* Cart */
function trackCartOpen(itemsInCart, cartTotal, type) {
  analytics.track('Open Cart', {
    location: 'Product Grid',
    CTA: 'Opened Cart',
    category: 'Checkout',
    type,
    itemsInCart, 
    cartTotal,
  });
}

function trackCheckout(cartTotal, category, itemsInCart, location, type) {
  analytics.track('Checkout', {
    cartTotal,
    category: category || 'Checkout',
    CTA: 'Clicked Checkout button',
    location: location || 'Product Page',
    itemsInCart, 
    type: type || button,
  });
}