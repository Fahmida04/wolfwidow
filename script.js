(function () {
  var y = document.getElementById('year'); if (y) y.textContent = new Date().getFullYear();
  var t = document.querySelector('.nav-toggle'), n = document.getElementById('nav-links');
  if (t && n) {
    t.addEventListener('click', function () {
      var open = n.classList.toggle('open');
      t.setAttribute('aria-expanded', open); t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
    });
    n.addEventListener('click', function (e) { if (e.target.tagName === 'A') { n.classList.remove('open'); t.setAttribute('aria-expanded', 'false'); } });
  }
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    els.forEach(function (el) { el.classList.add('visible'); }); return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (en) { if (en.isIntersecting) { en.target.classList.add('visible'); io.unobserve(en.target); } });
  }, { threshold: 0.12 });
  els.forEach(function (el) { io.observe(el); });
})();

// Discord copy-to-clipboard
(function(){var b=document.getElementById('discord-card');if(!b)return;var l=document.getElementById('discord-label');
b.addEventListener('click',function(){var done=function(){l.textContent='Copied: wolfwidow';setTimeout(function(){l.textContent='@wolfwidow · tap to copy';},2000);};
if(navigator.clipboard){navigator.clipboard.writeText('wolfwidow').then(done,done);}else{done();}});})();

// Certificate lightbox
(function(){var d=document.getElementById('lightbox');if(!d||!d.showModal)return;var img=d.querySelector('img'),cap=d.querySelector('.lb-cap');
document.querySelectorAll('.cert').forEach(function(b){b.addEventListener('click',function(){img.src=b.dataset.full;img.alt=b.querySelector('img').alt;cap.textContent=b.dataset.caption;d.showModal();});});
d.querySelector('.lb-close').addEventListener('click',function(){d.close();});
d.addEventListener('click',function(e){if(e.target===d)d.close();});})();
