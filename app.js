let currentlyVisibleDiv = null;

  function toggleDiv(divId) {
    const hiddenDiv = document.getElementById(divId);
    if (currentlyVisibleDiv && currentlyVisibleDiv !== hiddenDiv) {
      currentlyVisibleDiv.classList.add('hidden');
    }
    if (hiddenDiv.classList.contains('hidden')) {
      hiddenDiv.classList.remove('hidden');
      currentlyVisibleDiv = hiddenDiv;
    } else {
      hiddenDiv.classList.add('hidden');
      currentlyVisibleDiv = null;
    }
  }

  document.getElementById('revealButton').addEventListener('click', function() {
    toggleDiv('hiddenDiv');
  });

  document.getElementById('revealButton1').addEventListener('click', function() {
    toggleDiv('hiddenDiv1');
  });

  document.getElementById('revealButton2').addEventListener('click', function() {
      oggleDiv('hiddenDiv2');
  });

  document.getElementById('revealButton3').addEventListener('click', function() {
      oggleDiv('hiddenDiv3');
  });

  document.getElementById('revealButton4').addEventListener('click', function() {
    toggleDiv('hiddenDiv4');
  });

  document.getElementById('revealButton5').addEventListener('click', function() {
    toggleDiv('hiddenDiv5');
  });



document.getElementById('languageSelect').addEventListener('change', function() {
  const selectedLanguage = this.value;
    if (selectedLanguage === 'it-IT') {
      window.location.href = 'index.html';
    } else if (selectedLanguage === 'en-IT') {
      window.location.href = 'english.html';
    }
    });
  