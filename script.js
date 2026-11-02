const storyData = {
  all: [
    {
      time: 'Practice 1',
      title: 'Setup window',
      desc: 'The team focused on tyre temperature and balance to find the right rhythm through the slow corners.'
    },
    {
      time: 'Qualifying',
      title: 'Pole pressure',
      desc: 'A clean final lap put the car in the sweet spot, with confidence building through sector three.'
    },
    {
      time: 'Lap 12',
      title: 'Opening battle',
      desc: 'The leader defended the inside line and protected the vital braking zone, keeping control early.'
    },
    {
      time: 'Lap 24',
      title: 'Pit strategy',
      desc: 'A well-timed stop unlocked fresh tyres, giving the car a stronger final phase and attacking pace.'
    }
  ],
  track: [
    {
      time: 'Track 1',
      title: 'Grip discovery',
      desc: 'The setup improved under load and the car settled with better front-end confidence in sector two.'
    },
    {
      time: 'Track 2',
      title: 'Sector rhythm',
      desc: 'Longer braking points and cleaner exits created more consistent lap timing across the sequence.'
    },
    {
      time: 'Track 3',
      title: 'Late-race pace',
      desc: 'The final stint saw stronger traction and improved rear stability under heavy tyre wear.'
    },
    {
      time: 'Track 4',
      title: 'Corner attack',
      desc: 'The car stayed stable in the final sector, using late apexes to attack the last chicane.'
    }
  ],
  pit: [
    {
      time: 'Stop 1',
      title: 'Undercut call',
      desc: 'The strategy team opted for a quicker stop to regain track position and reduce tyre degradation.'
    },
    {
      time: 'Stop 2',
      title: 'Fuel drop',
      desc: 'A measured fuel loss kept the pace stable while protecting overall race length and tyre life.'
    },
    {
      time: 'Stop 3',
      title: 'Reset window',
      desc: 'The team recovered time in the lane and returned with stronger balance after the tyre change.'
    },
    {
      time: 'Stop 4',
      title: 'Final tyre swap',
      desc: 'Fresh rubber delivered a decisive acceleration zone and improved traction on exit.'
    }
  ],
  strategy: [
    {
      time: 'Plan A',
      title: 'Low-risk start',
      desc: 'The team prioritized stable early laps and avoided unnecessary tyre stress in the first stint.'
    },
    {
      time: 'Plan B',
      title: 'Attack window',
      desc: 'A strategic push in the mid-race segment created enough delta to challenge for the lead.'
    },
    {
      time: 'Plan C',
      title: 'Finish push',
      desc: 'The final tires were managed carefully to maximize speed during the decisive closing laps.'
    },
    {
      time: 'Plan D',
      title: 'Race control',
      desc: 'The timing window and pit coordination remained calm under pressure and protected the result.'
    }
  ]
};

const storyGrid = document.getElementById('storyGrid');
const filterButtons = document.querySelectorAll('.filter-btn');

function renderStory(mode = 'all') {
  const items = storyData[mode] || storyData.all;
  storyGrid.innerHTML = items
    .map(
      (item) => `
        <article class="story-item card">
          <span class="time">${item.time}</span>
          <h4>${item.title}</h4>
          <p>${item.desc}</p>
        </article>
      `
    )
    .join('');
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((btn) => btn.classList.remove('active'));
    button.classList.add('active');
    renderStory(button.dataset.filter);
  });
});

renderStory();
