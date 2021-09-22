export const serverLogin = (payload) => {
  console.log(payload, "payload");
  return fetch("https://loft-taxi.glitch.me/auth", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverRegister = (payload) => {
  console.log(payload, "payload register");
  return fetch("https://loft-taxi.glitch.me/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverPayment = (payload) => {
  console.log(payload, "payload payment");
  return fetch("https://loft-taxi.glitch.me/card", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverGetDataPayment = (token) => {
  console.log(token, "token");
  return fetch(`https://loft-taxi.glitch.me/card?token=${token}`, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export const serverGetAddressList = (payload) => {
  return fetch(" https://loft-taxi.glitch.me/addressList", {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};
