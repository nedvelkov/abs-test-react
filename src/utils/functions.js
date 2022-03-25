export async function fetchGetRequest(path, error, statusCode, accessToken) {
  const res = await fetch(path, {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });
  if (res.status === statusCode) {
    return error;
  } else if (res.status !== 200) {
    return "Unexpected error. Please try again";
  }
  const resData = await res.json();
  return resData;
}

export async function fetchRequest(path, data, method, statusCode) {
  const dataAsJson = JSON.stringify(data);
  console.log(dataAsJson);
  const res = await fetch(path, {
    method: method,
    headers: {
      "Content-Type": "application/json",
    },
    body: dataAsJson,
  });
  if (res.status !== 200 && res.status !== statusCode) {
    return "Unexpected error. Please try again";
  }
  const resData = await res.text();
  return resData;
}

export function handleChange(event, setState) {
  const { name, value } = event.target;
  setState((prevFormData) => {
    return {
      ...prevFormData,
      [name]: value,
    };
  });
}