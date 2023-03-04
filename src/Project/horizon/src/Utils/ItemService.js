export const login = async (domain, username, password)  =>  {
    const headers = {
      'Content-Type': 'application/json'
    };
    const data ={
        domain,
        username,
        password
    };
    axios.post(`${process.env.REACT_APP_SITECORE_BASEURL}/auth/login`, {headers}, {data})
    .then((response) => {

    })
  };

  export const editItem = async (id, database, language, version, data) => {
    const headers = {
      'Content-Type': 'application/json'
    };

    axios.post(`${process.env.REACT_APP_SITECORE_BASEURL}/item/${id}?${database}&${language}&${version}`, {headers}, {data})
    .then((response) => {

    })
  };