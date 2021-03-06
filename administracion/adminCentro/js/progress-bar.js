window.onload = function onLoad() {
    var circle = new ProgressBar.Circle('#contenedor-progress-bar', {
        color: '#FCB03C',
        duration: 3000,
        easing: 'easeInOut',
        text: {
    autoStyleContainer: false
  },
  from: { color: '#aaa', width: 1 },
  to: { color: '#333', width: 4 },
  // Set default step function for all animate calls
  step: function(state, circle) {
    circle.path.setAttribute('stroke', state.color);
    circle.path.setAttribute('stroke-width', state.width);

    var value = Math.round(circle.value() * 100);
    if (value === 0) {
      circle.setText('');
    } else {
      circle.setText(value);
    }

  }
    });
    circle.text.style.fontFamily = '"Raleway", Helvetica, sans-serif';
	circle.text.style.fontSize = '2rem';

	circle.animate(1.0);  // Number from 0.0 to 1.0
    
};