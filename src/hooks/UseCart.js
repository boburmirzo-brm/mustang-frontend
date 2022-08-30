export const UseCart = ( product, type, data, dispatch ) => {
    let itemIndex = data.findIndex(item => item._id === product._id)
    return itemIndex < 0 ? dispatch({type, payload: [...data, { ...product, quontity: 1, orderType: product.size.replace('-', ' ').split(' ')[0] }]}) : dispatch({type, payload: data?.map((item, inx) => inx === itemIndex ? { ...item, quontity: item.quontity + 1 } : item)})
}  