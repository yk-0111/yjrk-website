console.log("JS is running");
<script>
  const buttons = document.querySelectorAll('.iam-buttons button');
  const iamWord = document.getElementById('iam-word');
  const iamDesc = document.getElementById('iam-description');

  buttons.forEach(button => {
    button.addEventListener('click', () => {
      const word = button.dataset.word;
      const desc = button.dataset.desc;

      iamWord.textContent = word;
      iamWord.classList.add('filled');
      iamDesc.textContent = desc;
    });
  });
</script>