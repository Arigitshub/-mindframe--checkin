const form = document.getElementById('checkin-form');
const output = document.getElementById('log-output');

form.addEventListener('submit', (e) => {
  e.preventDefault();
    const data = Object.fromEntries(new FormData(form).entries());
      const log = `
          <b>Mental:</b> ${data.mental}<br>
              <b>Body:</b> ${data.body}<br>
                  <b>Social:</b> ${data.social}<br>
                      <b>Motivation:</b> ${data.motivation}<br>
                          <b>Clarity:</b> ${data.clarity}<br>
                              <b>Intention:</b> ${data.intention}<br>
                                  <span style="font-size:.97em;color:#888;">${new Date().toLocaleString()}</span>
                                    `;
                                      output.innerHTML = log;
                                        form.reset();
                                        });