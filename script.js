(function () {
  'use strict';

  /* ---------- Copy Code Buttons ---------- */
  document.querySelectorAll('.btn-copy').forEach(function (btn) {
    btn.addEventListener('click', function () {
      var code = btn.getAttribute('data-code');
      if (!code) return;

      if (navigator.clipboard && navigator.clipboard.writeText) {
        navigator.clipboard.writeText(code).then(function () {
          showCopied(btn);
        });
      } else {
        /* fallback for older browsers */
        var textarea = document.createElement('textarea');
        textarea.value = code;
        textarea.style.position = 'fixed';
        textarea.style.opacity = '0';
        document.body.appendChild(textarea);
        textarea.select();
        try {
          document.execCommand('copy');
          showCopied(btn);
        } catch (e) {
          /* silent fail */
        }
        document.body.removeChild(textarea);
      }
    });
  });

  function showCopied(btn) {
    var original = btn.textContent;
    btn.textContent = 'Copied!';
    btn.classList.add('copied');
    setTimeout(function () {
      btn.textContent = original;
      btn.classList.remove('copied');
    }, 1800);
  }

  /* ---------- Checklist Persistence ---------- */
  var checkboxes = document.querySelectorAll('#daily-checklist input[type="checkbox"]');
  checkboxes.forEach(function (cb) {
    var span = cb.parentElement.querySelector('span');
    if (!span) return;
    var stored = localStorage.getItem('hcg_check_' + span.textContent.trim());
    if (stored === 'true') {
      cb.checked = true;
    }

    cb.addEventListener('change', function () {
      var key = 'hcg_check_' + span.textContent.trim();
      localStorage.setItem(key, cb.checked);
    });
  });
  /* ---------- Generic Table Search ---------- */
  document.querySelectorAll('[data-table]').forEach(function (input) {
    var tableId = input.getAttribute('data-table');
    var table = document.getElementById(tableId);
    var noResultId = input.getAttribute('data-noresult');
    var noResult = noResultId ? document.getElementById(noResultId) : null;

    if (!table) return;
    var rows = table.querySelectorAll('tbody tr');

    input.addEventListener('input', function () {
      var query = input.value.toLowerCase().trim();
      var visibleCount = 0;

      rows.forEach(function (row) {
        var text = row.textContent.toLowerCase();
        var match = !query || text.indexOf(query) !== -1;
        row.style.display = match ? '' : 'none';
        if (match) visibleCount++;
      });

      if (noResult) {
        noResult.style.display = visibleCount === 0 ? '' : 'none';
      }
    });
  });

  /* ---------- Language Selector ---------- */
  var langSelects = document.querySelectorAll('.language-select');
  var allowedLangs = ['en', 'zh', 'ru', 'fr', 'ja', 'ko'];
  if (langSelects.length) {
    var saved = (function() {
      try { return localStorage.getItem('heartopia-language'); } catch(e) { return null; }
    })();
    var lang = allowedLangs.indexOf(saved) !== -1 ? saved : 'en';
    langSelects.forEach(function(s) { s.value = lang; });
    try { localStorage.setItem('heartopia-language', lang); } catch(e) {}
    langSelects.forEach(function(sel) {
      sel.addEventListener('change', function() {
        var val = allowedLangs.indexOf(sel.value) !== -1 ? sel.value : 'en';
        langSelects.forEach(function(s) { s.value = val; });
        try { localStorage.setItem('heartopia-language', val); } catch(e) {}
        if (val !== 'en') {
          showLangToast();
        }
      });
    });
  }

  function showLangToast() {
    var toast = document.createElement('div');
    toast.className = 'language-toast';
    toast.textContent = 'Language preview selected. Full translations are not available yet.';
    document.body.appendChild(toast);
    requestAnimationFrame(function() {
      toast.classList.add('language-toast-show');
    });
    setTimeout(function() {
      toast.classList.remove('language-toast-show');
      setTimeout(function() {
        if (toast.parentNode) toast.parentNode.removeChild(toast);
      }, 300);
    }, 3000);
  }
})();
