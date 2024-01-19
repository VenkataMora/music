const authUrl = "https://accounts.spotify.com/authorize?";
const clientID = "c14ec7e5ff8f4130b2d3b51cd1c734ae";
const redirectUrl = "http://localhost:5173/";
const scopes = ["user-library-read", "playlist-read-private"];

export const loginEndPoint = `${authUrl}client_id=${clientID}&redirect_uri=${redirectUrl}&scope=${scopes.join("%20")}&response_type=token&show_dialog=true`;
