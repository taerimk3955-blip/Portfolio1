(function(){
  var sections = document.querySelectorAll('section[id]');
  var railLis = document.querySelectorAll('#rail li');

  var spy = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){
        railLis.forEach(function(li){
          li.classList.toggle('on', li.querySelector('a').getAttribute('href') === '#'+e.target.id);
        });
      }
    });
  }, {threshold:0.4});
  sections.forEach(function(s){ spy.observe(s); });

  var reveal = new IntersectionObserver(function(entries){
    entries.forEach(function(e){
      if(e.isIntersecting){ e.target.classList.add('show'); }
    });
  }, {threshold:0.15});
  document.querySelectorAll('.reveal, .reveal-left').forEach(function(el){ reveal.observe(el); });
})();
