function openPlayerConfig(event) {
  editedPlayer = +event.target.dataset.playerid;
  playerConfigOverlayElement.style.display = 'block';
  backdropElement.style.display = 'block';
}

function closePlayerConfig() {
  playerConfigOverlayElement.style.display = 'none';
  backdropElement.style.display = 'none';
  formElement.firstElementChild.classList.remove('error');
  errorsOutputElement.textContent = '';
  overlayPlayerNameInputElement.value = '';
}

function savePlayerConfig(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const enteredPlayername = formData.get('player-name').trim();

  if (!enteredPlayername) {
    event.target.firstElementChild.classList.add('error');
    return (errorsOutputElement.textContent = 'Please enter a valid name!');
  }

  const updatedPlayerDataElement = document.getElementById(
    `player-${editedPlayer}-data`
  );

  updatedPlayerDataElement.children[1].textContent = enteredPlayername;

  players[editedPlayer - 1].name = enteredPlayername;

  closePlayerConfig();
}
