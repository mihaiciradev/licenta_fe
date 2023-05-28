// Function to make a request
const request = async (endpoint, parameters = {}, body = null) => {
    const apiUrl = `http://localhost:3000/${endpoint}?${new URLSearchParams(parameters).toString()}`;
  
    const options = {
      method: body ? 'POST' : 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      body: body ? JSON.stringify(body) : undefined,
    };
  
    const response = await fetch(apiUrl, options);
  
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
  
    const data = await response.json();
    return data;
  };
  
  export default request;
  