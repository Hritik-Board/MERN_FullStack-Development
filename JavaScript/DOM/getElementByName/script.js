function collectData() {
  const langProf = document.getElementsByName("languageProficiency");

  console.log(langProf);

  for (let i = 0; i < langProf.length; i++) {
    if (langProf[i].checked) {
      console.log(langProf[i].value);
    }
  }
}
