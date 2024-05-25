document.addEventListener('DOMContentLoaded', () => {
    const languageSwitchers = document.querySelectorAll('.language-switcher');
  
    languageSwitchers.forEach(switcher => {
      switcher.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = switcher.getAttribute('data-lang');
        switchLanguage(lang);
      });
    });
  
    function switchLanguage(lang) {
      const elements = document.querySelectorAll('[data-lang-en], [data-lang-pt]');
      elements.forEach(el => {
        if (el.hasAttribute(`data-lang-${lang}`)) {
          el.innerText = el.getAttribute(`data-lang-${lang}`);
        }
      });
    }
  
    // Initialize with default language
    switchLanguage('en');
  });
  