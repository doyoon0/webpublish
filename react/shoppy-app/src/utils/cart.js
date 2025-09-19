export function cartItemsCheck(cartItems, addItem) {
  // 기존에 같은 상품+사이즈가 있는지 찾기
  const existingItem = cartItems.find(
    (item) => item.pid === addItem.pid && item.size === addItem.size
  );

  if (existingItem) {
    // 있으면 qty 증가한 새 배열 반환
    return cartItems.map(item =>
      item.pid === addItem.pid && item.size === addItem.size
        ? { ...item, qty: item.qty + 1 }
        : item
    );
  } else {
    // 없으면 새 아이템 추가한 새 배열 반환
    return [...cartItems, addItem];
  }
}
