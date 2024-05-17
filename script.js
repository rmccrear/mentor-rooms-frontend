
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
  console.log(taData);
  mentorTable.innerHTML = buildTable(taData);
})