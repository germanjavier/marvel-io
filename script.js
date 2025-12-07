// script.js — funcionalidad mínima: búsqueda/filter
document.addEventListener('DOMContentLoaded', function () {
  const input = document.getElementById('search');
  const tbody = document.getElementById('movies');

  input.addEventListener('input', function (e) {
    const q = e.target.value.trim().toLowerCase();
    Array.from(tbody.rows).forEach(row => {
      const title = row.cells[1].textContent.toLowerCase();
      const year = row.cells[2].textContent.toLowerCase();
      const combined = title + ' ' + year;
      row.style.display = combined.includes(q) ? '' : 'none';
    });
  });

  // accesibilidad: focus en primer resultado con Enter si hay búsqueda
  input.addEventListener('keydown', function(e){
    if(e.key === 'Enter'){
      const firstVisible = Array.from(tbody.rows).find(r => r.style.display !== 'none');
      if(firstVisible) firstVisible.querySelector('td:nth-child(2)').focus();
    }
  });

  // Hacer los títulos enfocables (para accesibilidad)
  Array.from(tbody.rows).forEach(row => {
    const titleCell = row.cells[1];
    titleCell.setAttribute('tabindex','0');
  });
});
