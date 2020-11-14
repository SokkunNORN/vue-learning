export const setCachedUser = data => {
  const user = {
    id: data.id,
    name: data.name,
    username: data.username,
    email: data.email,
    token: data.token,
    profile_photo_url: data.profile_photo_url
  };

  sessionStorage.setItem("user", JSON.stringify(user));
};

export const getCachedUser = () => {
  const localData = sessionStorage.getItem("user")
    ? JSON.parse(sessionStorage.getItem("user"))
    : {};

  return {
    id: localData.id,
    name: localData.name,
    username: localData.username,
    email: localData.email,
    token: localData.token,
    profile_photo_url: localData.profile_photo_url
  };
};

export const authenticated = () => getCachedUser().token;

export const cache = getCachedUser();
