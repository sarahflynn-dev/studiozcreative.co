$(function(){
    // define your 4 cycles here:
    const cycles = [
      { cls: 'text-cherry', text: 'PURPOSE.' },
      { cls: 'text-indigo', text: 'MEANING.' },
      { cls: 'text-pear', text: 'TRUTH.' },
      { cls: 'text-white', text: 'LOVE.' }
    ];
    
    let idx = 0;
    const $el = $('#cycleElement');
    
    function cycleFade(){
      // fade out
      $el.fadeOut(500, function(){
        // update to next cycle
        idx = (idx + 1) % cycles.length;
        $el
          .removeClass(cycles.map(c=>c.cls).join(' '))
          .addClass(cycles[idx].cls)
          .text(cycles[idx].text)
          // fade back in
          .fadeIn(500, function(){
            // after a pause, do it again
            setTimeout(cycleFade, 1000);
          });
      });
    }
    
    // kick it off after an initial pause (optional)
    setTimeout(cycleFade, 1000);
  });