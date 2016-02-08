export let config = {
  debug: true,
  messages: {
    localStorage: 'Loading JSON from your previous session...'
  },
  localStorage: true,
  loading: false
};

export let spinner = `
  <div class="default-spinner">
    <div class="rect1"></div>
    <div class="rect2"></div>
    <div class="rect3"></div>
    <div class="rect4"></div>
  </div>
`;