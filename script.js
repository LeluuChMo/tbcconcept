"strict";

// Cookies
setCookie = (cookieName, cookieValue, expDays) => {
  let date = new Date();
  date.setTime(date.getTime() + expDays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + date.toUTCString();
  document.cookie = `${cookieName}=${cookieValue}; expires=${expires}; path=/; SameSite=Lax; Secure`;
};
