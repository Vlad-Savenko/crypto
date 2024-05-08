
const Services = () => {

  const getCrypto = async (count) => {
    try {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=${count}`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error;
    }
  };
  
  // Запускаємо запит кожні 3 секунди


  const getOneCrypto = async(id) => {
    try {
      const res = await fetch(`https://api.coincap.io/v2/assets/${id}`)
      const data = await res.json()
      return data.data
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error; 
    }
  }

  const getMarkets = async(count) => {
    try {
      const res = await fetch(`https://api.coincap.io/v2/assets/bitcoin/markets?limit=${count}`)
      const data = await res.json()
      return data.data
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error; 
    }
  }


  const getPairs = async(id) => {
    try {
      if(id) {
        const res = await fetch(`https://api.coincap.io/v2/exchanges/${id}`)
        const data = await res.json()
        return data.data
      }
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error; 
    }
  }


  const getTrades = async(id) => {
    try {
      if(id) {
        const res = await fetch(`wss://ws.coincap.io/trades/binance`)
        const data = await res.json()
        return data.data
      }
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error; 
    }
  }
  

  return {
    getMarkets,
    getCrypto,
    getOneCrypto,
    getPairs,
  }
}
export default Services;


