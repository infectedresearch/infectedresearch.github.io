function createDialTone() {
  const audioContext = new AudioContext();
  
  // Create two oscillators for the dual-frequency dial tone (350Hz and 440Hz)
  const osc1 = audioContext.createOscillator();
  const osc2 = audioContext.createOscillator();
  
  // Set frequencies for standard dial tone
  osc1.frequency.value = 350;
  osc2.frequency.value = 440;
  
  // Create a gain node to control volume
  const gainNode = audioContext.createGain();
  gainNode.gain.value = 0.1; // Reduce volume to 10%
  
  // Connect oscillators to gain node and gain node to output
  osc1.connect(gainNode);
  osc2.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  // Start the oscillators
  osc1.start();
  osc2.start();
  
  // Return controls to stop the dial tone
  return {
    stop: () => {
      osc1.stop();
      osc2.stop();
    },
    audioContext
  };
}

// Usage:
// const dialtone = createDialTone();
// Later to stop: dialtone.stop();
