export const UseProduct = ( product, type, data, dispatch ) => {
  let itemIndex = data.findIndex(item => item._id === product._id)
  if( itemIndex < 0 ){
    let newPro = {
      ...product,
      quontity: 1,
    }
    dispatch({type, payload: [...data, newPro]})
  }else{
    let newOrder = data?.map((item, inx)=> {
      if(inx === itemIndex){
        return {
          ...item,
          quontity: item.quontity + 1
        }
      }else{
        return item
      }
    })
    dispatch({type, payload: newOrder })
  }
}
