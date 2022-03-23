export async function fetchData(path, error, statusCode) {
  const res = await fetch(path);
  if (res.status === statusCode) {
    return error;
  } else if (res.status !== 200) {
    return "Unexpected error. Please try again";
  }
  const resData = await res.json();
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
