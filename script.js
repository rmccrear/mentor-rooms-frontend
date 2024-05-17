
function buildTable (taData) {
  let table = `
    <tr>
      <th>
        Mentor
      </th>
      <th>
        Meet link
      </th>
      <th>
        Mentor Available
      </th>
      <th>
        Room Full
      </th>
    </tr>
    `;
  for(const ta of taData) {
    table += `
      <tr>
        <td>
          ${ta.displayName}
        </td>
        <td>
          ${(ta.availableNow && !ta.roomFull && ta.meetLink) ?
                   `<a href="${ta.meetLink}"> ${ta.meetLink} </a>`
                   : "<span class='link-unavailable'></span>"}
        </td>
        <td>
          ${ta.availableNow ? 
                   "<span class='ta-available'></span>"
                   : "<span class='ta-unavailable'></span>"
          }
        </td>
        <td>
          ${(ta.availableNow && ta.meetLink) ? 
                   (ta.roomFull ? 
                   "<span class='ta-roomFull'></span>"
                   : "<span class='ta-roomNotFull'></span>")
            : "<span class='link-unavailable'></span>"
          }
        </td>

      </tr>
    `;
  }
  return table;
}

const mentorTable = document.getElementById("mentors-table");

getRealtimeData().then((taData) => {
  mentorTable.innerHTML = buildTable(taData);
})

console.log("Hi! Let's get coding!");
console.group("pointers for using Mentor Rooms");
console.log("Please ask your question upon entering the room.");
console.log("The mentor will finish working with those ahead of you in line before answering your question.");
console.log("The mentor may work with more than one person at the same time.");
console.groupEnd();