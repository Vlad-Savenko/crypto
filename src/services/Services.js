
const Services = () => {

  const getCrypto = async(cout) => {
    const res = await fetch(`https://api.coincap.io/v2/assets?limit=${cout}`)
    const data = await res.json()
    return data.data
  }


  const getOneCrypto = async(id) => {
    const res = await fetch(`https://api.coincap.io/v2/assets/${id}`)
    const data = await res.json()
    return data.data
  }

  return {
    getCrypto,
    getOneCrypto,
  }
}
export default Services;


