const GetCountry = async (continent) => {
    try {
      const Api = await fetch(`https://restcountries.eu/rest/v2/region/${continent}`)
      const data = await Api.json()
      return data
    } catch (error) {
      console.error(error)
    }
  }

  export default GetCountry