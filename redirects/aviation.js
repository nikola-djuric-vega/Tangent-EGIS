module.exports = [
  {
    source: '/expertise/operation-maintenance',
    destination:
      'https://www.egis-group.com/how-we-help/infrastructure-management/airport-operations',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/amaala-airport-egis-contributes-to-an-ambitious-greenfield-airport-project-near-the-red-sea',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    destination: 'https://www.egis-group.com/projects',
    permanent: true,
  },
  {
    source:
      '/insight/abidjan-international-airport-supporting-traffic-growth-by-developing-airport-facilities',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    destination: 'https://www.egis-group.com/all-news',
    permanent: true,
  },

  {
    source: '/insight/agile-engineering-in-aviation-systems',
    destination:
      'https://www.egis-group.com/all-insights/from-v-cycle-to-agile-engineering-in-aviation-systems',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/aviation-five-reasons-why-targeting-sustainability-will-pay-off',
    destination:
      'https://www.egis-group.com/all-insights/aviation-five-reasons-why-targeting-sustainability-will-pay-off',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/bio-safety-assessment-wherver-people-gather',
    destination:
      'https://www.egis-group.com/all-insights/airport-bio-safety-assessment-protecting-passengers-airport-staff-and-communities',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/covid-19-and-aviation-protecting-our-people',
    destination:
      'https://www.egis-group.com/all-insights/covid-19-and-aviation-protecting-our-people',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/covid-19-and-aviation-the-re-start',
    destination:
      'https://www.egis-group.com/all-insights/covid-19-and-aviation-the-re-start',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/covid-no-excuse',
    destination:
      'https://www.egis-group.com/all-insights/covid-no-excuse-for-inaction-on-cyber',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/de-risking-future-flight-in-the-uk',
    destination:
      'https://www.egis-group.com/all-insights/de-risking-future-flight-in-the-uk',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/drone-integration-modelling-utm-integration-into-airspace',
    destination:
      'https://www.egis-group.com/all-insights/drone-integration-modelling-utm-integration-into-airspace',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/drone-integration-safety-perspectives-on-uas-operations',
    destination:
      'https://www.egis-group.com/all-insights/drone-integration-safety-perspectives-on-uas-operations',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/egis-joins-expert-cybersecurity-panel-at-canso-asia-pacific-conference',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    destination: 'https://www.egis-group.com/all-news',
    permanent: true,
  },

  {
    source: '/insight/egnos-next-steps-in-aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    destination: 'https://www.egis-group.com/projects',
    permanent: true,
  },

  {
    source: '/insight/future-of-aviation-cybersecurity',
    destination:
      'https://www.egis-group.com/all-insights/future-of-aviation-cybersecurity',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/integrating-drones',
    destination:
      'https://www.egis-group.com/all-insights/integrating-drones-a-decade-of-progress',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/new-normal-what-about-the-new-possible-building-a-better-future-for-aviation',

    destination:
      'https://www.egis-group.com/all-insights/new-normal-what-about-the-new-possible',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/pioneering-climate-study-published-by-eurocontrol',
    destination:
      'https://www.egis-group.com/projects/climate-change-risks-for-european-aviation-eurocontrol',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/project-managing-the-renovation-of-aeronautical-pavements-at-strasbourg-airport',
    destination: 'https://www.egis-group.com/projects',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/what-or-who-is-behind-the-drive-for-adsps',
    destination:
      'https://www.egis-group.com/all-insights/what-or-who-is-behind-the-drive-for-adsps',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/white-paper-the-future-of-aviation-in-a-world-of-sustainable-transport',
    destination:
      'https://www.egis-group.com/all-insights/white-paper-the-future-of-aviation-in-a-world-of-sustainable-transport',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source:
      '/insight/white-paper-is-this-the-time-and-place-to-finally-back-up-gnss',
    destination:
      'https://www.egis-group.com/all-insights/white-paper-is-this-the-time-and-place-to-finally-back-up-gnss',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source:
      '/insight/webinar-highlights-state-priorities-for-outsourcing-atm-data',
    destination:
      'https://www.egis-group.com/all-insights/webinar-highlights-state-priorities-for-outsourcing-atm-data',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/wanted-airspace-guardian-of-the-future',
    destination:
      'https://www.egis-group.com/all-insights/white-paper-wanted-airspace-guardian-of-the-future',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/urban-air-mobility-should-i-stay-or-should-i-go-now',
    destination:
      'https://www.egis-group.com/all-insights/urban-air-mobility-should-i-stay-or-should-i-go-now',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/skycities-skyways-skytaxis-dream-or-destiny',
    destination:
      'https://www.egis-group.com/all-insights/white-paper-skycities-skyways-skytaxis-dream-or-destiny',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/preparing-for-the-climate-of-the-future',
    destination:
      'https://www.egis-group.com/all-insights/preparing-for-the-climate-of-the-future',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/insight/pit-stops-and-positives-for-greener-aviation',
    destination:
      'https://www.egis-group.com/all-insights/pit-stops-and-positives-for-greener-aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source:
      '/insight/new-year-new-decade-unleashing-the-blockchain-potential-in-atm',
    destination:
      'https://www.egis-group.com/all-insights/new-year-new-decade-unleashing-the-blockchain-potential-in-atm',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/drone-integration-swimming-in-the-same-direction',
    destination:
      'https://www.egis-group.com/all-insights/drone-integration-swimming-in-the-same-direction',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/covid-19-and-aviation-managing-the-return-of-noise',
    destination:
      'https://www.egis-group.com/all-insights/covid-19-and-aviation-managing-the-return-of-noise',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/covid-19-and-aviation-is-it-time-to-invest-or-divest',
    destination:
      'https://www.egis-group.com/all-insights/covid-19-and-aviation-is-it-time-to-invest-or-divest',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/control-towers-that-grow-back-greener',
    destination:
      'https://www.egis-group.com/all-insights/control-towers-that-grow-back-greener',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/insight/a-safety-case-fit-for-the-future-aviation-system',
    destination:
      'https://www.egis-group.com/all-insights/a-safety-case-fit-for-the-future-aviation-system',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source:
      '/insight/airport-bio-safety-assessment-protecting-passengers-airport-staff-and-communities',
    destination:
      'https://www.egis-group.com/all-insights/airport-bio-safety-assessment-protecting-passengers-airport-staff-and-communities',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/ensemble-faconner-lavenir-de-laviation',
    destination: 'https://www.egis-group.com/fr/activites/aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/expertise/operation-maintenance',
    destination:
      'https://www.egis-group.com/how-we-help/infrastructure-management/airport-operations',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/our-airport-network',
    destination:
      'https://www.egis-group.com/how-we-help/infrastructure-management/airport-operations',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/our-company/working-for-egis',
    destination: 'https://www.egis-group.com/why-egis',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/4-flight-system-consulting-and-engineering',
    destination: 'https://www.egis-group.com/projects/4-flight',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/airport-airside-infrastructure',
    destination:
      'https://www.egis-group.com/projects/toulouse-airport-refurbishing',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/airport-operations',
    destination:
      'https://www.egis-group.com/how-we-help/infrastructure-management/airport-operations',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/clark-airport-expansion',
    destination: 'https://www.egis-group.com/projects/clark-airport',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/cybersecurity-support-to-network-rail',
    destination:
      'https://www.egis-group.com/projects/cybersecurity-network-rail',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/projects/drone-integration-multiple-projects',
    destination:
      'https://www.egis-group.com/projects/drones-multiproject-reframe',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/european-climate-change-risks-study',
    destination:
      'https://www.egis-group.com/projects/climate-change-risks-for-european-aviation-eurocontrol',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/noise-management',
    destination: 'https://www.egis-group.com/projects/gatwick-noise-management',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/remote-towers',
    destination: 'https://www.egis-group.com/projects/remote-digital-towers',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/sysat-system-consulting-and-engineering',
    destination: 'https://www.egis-group.com/projects/sysat',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/uk-future-flight',
    destination: 'https://www.egis-group.com/projects/future-flight',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/sectors/airport',
    destination: 'https://www.egis-group.com/sectors/aviation/airports',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/sectors/atm',
    destination:
      'https://www.egis-group.com/sectors/aviation/air-traffic-management',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/sectors/institutions-governments',
    destination: 'https://www.egis-group.com/sectors/aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/insight',
    destination: 'https://www.egis-group.com/all-insights',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },

  {
    source: '/contact',
    destination: 'https://www.egis-group.com/sectors/aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/projects/:path*',
    destination: 'https://www.egis-group.com/projects',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/insight/:path*',
    destination: 'https://www.egis-group.com/all-insights',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
  {
    source: '/:path*',
    destination: 'https://www.egis-group.com/sectors/aviation',
    has: [
      {
        type: 'header',
        key: 'x-redirected-from',
        value: '(.*)(egis-aviation.com)(.*)',
      },
    ],
    permanent: true,
  },
]
