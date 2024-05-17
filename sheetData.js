const baseURL = "https://codex-mentors-dashboard.replit.app"


function getRealtimeData() {
  let url = baseURL + "/get-status"
  return fetch(url)
    .then((response) => response.json())
    .then(json => {
    // Do something with the data
    console.log(json);
    return json;
  });
}
