const baseURL = "https://codex-mentors-dashboard.replit.app"


function getRealtimeData() {
  let url = baseURL + "/get-status"
  return fetch(url)
    .then((response) => response.json())
    .then(json => {
      return json;
  });
}
