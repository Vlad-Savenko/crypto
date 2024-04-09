
const Services = () => {

  const getCrypto = async (count) => {
    try {
      const res = await fetch(`https://api.coincap.io/v2/assets?limit=${count}`);
      const data = await res.json();
      return data.data;
    } catch (error) {
      console.error('Помилка запиту до API:', error);
      throw error; // Якщо виникає помилка, викидаємо її далі
    }
  };
  
  // Запускаємо запит кожні 3 секунди


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


