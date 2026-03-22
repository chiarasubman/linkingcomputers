import { 
  Network, 
  Wifi, 
  Smartphone, 
  Cpu, 
  Globe, 
  ShieldCheck, 
  Layers, 
  Server, 
  Mail, 
  Search, 
  Cloud, 
  Users, 
  Tv, 
  MessageSquare, 
  AppWindow,
  Radio,
  Zap,
  Share2,
  HardDrive,
  Router,
  SwitchCamera,
  Monitor,
  Video,
  MessageCircle,
  Hash,
  LayoutGrid
} from 'lucide-react';

export interface ContentBlock {
  type: 'text' | 'list' | 'grid';
  title?: string;
  text?: string;
  items?: { label: string; description: string }[];
}

export interface Subsection {
  id: string;
  title: string;
  subtitle: string;
  icon: any;
  image: string;
  content: ContentBlock[];
}

export interface Section {
  id: string;
  title: string;
  color: string;
  subsections: Subsection[];
}

export const presentationSections: Section[] = [
  {
    id: 'comm-networks',
    title: 'Communication Networks',
    color: 'bg-[#D6BCFA]', // Lilac
    subsections: [
      {
        id: 'telecomm',
        title: 'Communication Networks & Telecommunications',
        subtitle: 'The process of sending info over distances',
        icon: Radio,
        image: 'https://www.conceptdraw.com/How-To-Guide/picture/telecommunication-networks.png',
        content: [
          {
            type: 'text',
            text: 'Telecommunications is the exchange of information over significant distances by electronic means. A basic system consists of three main parts: a transmitter that takes information and converts it to a signal, a transmission medium (the "physical channel"), and a receiver that takes the signal from the channel and converts it back into usable information.'
          },
          {
            type: 'list',
            title: 'Core Components:',
            items: [
              { label: 'Transmitter', description: 'Converts the message into a signal suitable for the transmission medium (e.g., a microphone or a modem).' },
              { label: 'Channel', description: 'The physical path between the transmitter and receiver (e.g., copper wire, fiber optics, or radio waves).' },
              { label: 'Receiver', description: 'Extracts the original message from the received signal (e.g., a speaker or a computer screen).' },
              { label: 'Amplifier/Repeater', description: 'Devices used to boost signal strength over long distances to prevent degradation.' }
            ]
          },
          {
            type: 'grid',
            title: 'Communication Modes',
            items: [
              { label: 'Simplex', description: 'One-way communication only (e.g., traditional radio or television broadcasting).' },
              { label: 'Half-Duplex', description: 'Two-way communication, but only one direction at a time (e.g., walkie-talkies).' },
              { label: 'Full-Duplex', description: 'Simultaneous two-way communication (e.g., a standard telephone call).' },
              { label: 'Multiplexing', description: 'Technique that allows multiple signals to share a single communication channel.' }
            ]
          }
        ]
      },
      {
        id: 'transmission-methods',
        title: 'Data Transmission Methods',
        subtitle: 'Timing and synchronization',
        icon: Zap,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Data transmission involves the physical transfer of data over a point-to-point or point-to-multipoint communication channel. The way data is synchronized between the sender and receiver is crucial for accuracy.'
          },
          {
            type: 'list',
            title: 'Synchronization Types:',
            items: [
              { label: 'Synchronous', description: 'Data is sent in a continuous stream at a constant rate. Both sender and receiver are synchronized by a clock signal.' },
              { label: 'Asynchronous', description: 'Data is sent in small blocks (bytes) with start and stop bits. No continuous synchronization is required.' }
            ]
          },
          {
            type: 'grid',
            title: 'Switching Techniques',
            items: [
              { label: 'Circuit Switching', description: 'Establishes a dedicated physical path between two nodes for the duration of the session (e.g., PSTN).' },
              { label: 'Packet Switching', description: 'Breaks data into small packets that are routed independently across the network (e.g., The Internet).' }
            ]
          }
        ]
      },
      {
        id: 'wireless-mobile',
        title: 'Wireless and Mobile Transmission',
        subtitle: 'Connecting without cables',
        icon: Wifi,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Wireless communication uses electromagnetic waves (radio, infrared, or microwave) to carry signals over a distance without the use of physical wires.'
          },
          {
            type: 'grid',
            title: 'Short-Range Technologies',
            items: [
              { label: 'Wi-Fi (802.11)', description: 'Uses radio waves to provide high-speed internet and network access within a limited range (WLAN).' },
              { label: 'Bluetooth', description: 'A low-power wireless technology for exchanging data over very short distances (WPAN).' },
              { label: 'NFC', description: 'Near Field Communication for very close range interactions like contactless payments.' }
            ]
          },
          {
            type: 'list',
            title: 'Mobile Generations',
            items: [
              { label: '4G LTE', description: 'Long Term Evolution, providing high-speed mobile broadband for smartphones and tablets.' },
              { label: '5G', description: 'The latest generation, offering ultra-low latency, massive capacity, and multi-Gbps peak data speeds.' }
            ]
          }
        ]
      },
      {
        id: 'components',
        title: 'Computer Networks & Components',
        subtitle: 'Sharing resources and connections',
        icon: Cpu,
        image: '',
        content: [
          {
            type: 'text',
            text: 'A computer network is a set of computers sharing resources located on or provided by network nodes. The nodes use common communication protocols over digital interconnections.'
          },
          {
            type: 'grid',
            title: 'Network Architectures',
            items: [
              { label: 'Client-Server', description: 'A central server provides resources or services to multiple client computers.' },
              { label: 'Peer-to-Peer (P2P)', description: 'Each computer acts as both a client and a server, sharing resources directly.' }
            ]
          },
          {
            type: 'list',
            title: 'Hardware Essentials',
            items: [
              { label: 'Router', description: 'A device that forwards data packets between computer networks, acting as a gateway.' },
              { label: 'Switch', description: 'Connects devices within a single network (LAN) and uses MAC addresses to forward data.' },
              { label: 'Modem', description: 'Modulates and demodulates signals to bridge digital data with analog transmission media.' }
            ]
          }
        ]
      },
      {
        id: 'network-types',
        title: 'Types of Networks',
        subtitle: 'Geographical scale and size',
        icon: Globe,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Networks are often categorized by their geographical span. From personal devices to global connections, the scale determines the technology and protocols used.'
          },
          {
            type: 'grid',
            items: [
              { label: 'PAN', description: 'Personal Area Network: Centered around an individual (e.g., Bluetooth devices).' },
              { label: 'LAN', description: 'Local Area Network: Covers a small area like a home, office, or school building.' },
              { label: 'MAN', description: 'Metropolitan Area Network: Spans a city or a large campus.' },
              { label: 'WAN', description: 'Wide Area Network: Covers large distances, such as countries or continents (e.g., The Internet).' },
              { label: 'GAN', description: 'Global Area Network: A network composed of different interconnected networks that cover the entire globe.' }
            ]
          }
        ]
      },
      {
        id: 'topologies',
        title: 'Network Topologies',
        subtitle: 'Physical and logical layout',
        icon: Layers,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Topology describes the arrangement of nodes and links in a network. It can be physical (the actual layout of cables) or logical (how data flows).'
          },
          {
            type: 'grid',
            items: [
              { label: 'Star', description: 'All nodes connect to a central hub. If the hub fails, the whole network goes down.' },
              { label: 'Bus', description: 'All nodes share a single backbone cable. Simple but difficult to troubleshoot.' },
              { label: 'Ring', description: 'Each node connects to two others, forming a loop. Data travels in one direction.' },
              { label: 'Mesh', description: 'Nodes are interconnected. Full mesh means every node connects to every other node.' },
              { label: 'Tree', description: 'A hierarchical structure that combines star and bus topologies.' }
            ]
          }
        ]
      },
      {
        id: 'osi-model',
        title: 'The ISO/OSI Model',
        subtitle: '7-layer framework',
        icon: ShieldCheck,
        image: '',
        content: [
          {
            type: 'text',
            text: 'The Open Systems Interconnection (OSI) model is a conceptual framework used to understand and standardize the functions of a telecommunication or computing system.'
          },
          {
            type: 'list',
            title: 'The Seven Layers:',
            items: [
              { label: '1. Physical', description: 'Transmission of raw bit streams over a physical medium.' },
              { label: '2. Data Link', description: 'Reliable transmission of data frames between two nodes.' },
              { label: '3. Network', description: 'Structuring and managing a multi-node network, including addressing and routing.' },
              { label: '4. Transport', description: 'End-to-end communication, reliability, and flow control.' },
              { label: '5. Session', description: 'Managing sessions between applications.' },
              { label: '6. Presentation', description: 'Data translation, encryption, and compression.' },
              { label: '7. Application', description: 'High-level APIs and network services (HTTP, FTP, SMTP).' }
            ]
          }
        ]
      },
      {
        id: 'protocols',
        title: 'Communication Protocols: TCP/IP',
        subtitle: 'Technical rules for communication',
        icon: Share2,
        image: '',
        content: [
          {
            type: 'text',
            text: 'TCP/IP is the suite of communication protocols used to interconnect network devices on the internet. It is more practical than the OSI model and has four layers.'
          },
          {
            type: 'grid',
            title: 'Core Protocols',
            items: [
              { label: 'TCP', description: 'Transmission Control Protocol: Ensures reliable, ordered, and error-checked delivery of data.' },
              { label: 'IP', description: 'Internet Protocol: Responsible for addressing and routing packets to their destination.' },
              { label: 'UDP', description: 'User Datagram Protocol: A faster, connectionless alternative to TCP for time-sensitive data.' }
            ]
          },
          {
            type: 'list',
            title: 'The 4 Layers of TCP/IP:',
            items: [
              { label: 'Application', description: 'Where network apps live (HTTP, DNS, SSH).' },
              { label: 'Transport', description: 'Host-to-host communication (TCP, UDP).' },
              { label: 'Internet', description: 'Routing packets across networks (IP, ICMP).' },
              { label: 'Network Access', description: 'Physical and data link functions (Ethernet, Wi-Fi).' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'internet',
    title: 'The Internet',
    color: 'bg-[#81E6D9]', // Aqua
    subsections: [
      {
        id: 'internet-services',
        title: 'The Internet and its Services',
        subtitle: 'Global system of networks',
        icon: Globe,
        image: 'https://img.gruppomol.it/articoli/image/pc/1200x675_Depositphotos_20035055_xl-2015.jpg',
        content: [
          {
            type: 'text',
            text: 'The Internet is a global network of billions of computers and other electronic devices. With the Internet, it’s possible to access almost any information, communicate with anyone else in the world, and do much more.'
          },
          {
            type: 'list',
            title: 'Key Infrastructure:',
            items: [
              { label: 'ISP', description: 'Internet Service Provider: A company that provides individuals and organizations access to the Internet.' },
              { label: 'Backbone', description: 'The high-speed fiber-optic data trunks that connect major network hubs around the world.' },
              { label: 'DNS', description: 'Domain Name System: Translates domain names (like google.com) into IP addresses.' }
            ]
          }
        ]
      },
      {
        id: 'www-browsers',
        title: 'The World Wide Web & Browsers',
        subtitle: 'Hypermedia documents',
        icon: Monitor,
        image: '',
        content: [
          {
            type: 'text',
            text: 'The World Wide Web (WWW) is an information system where documents and other web resources are identified by Uniform Resource Locators (URLs). It was invented by Tim Berners-Lee in 1989.'
          },
          {
            type: 'grid',
            title: 'Web Technologies',
            items: [
              { label: 'HTML', description: 'HyperText Markup Language: The standard language for creating web pages.' },
              { label: 'HTTP/HTTPS', description: 'The protocol used to transfer data over the web. HTTPS adds encryption.' },
              { label: 'URL', description: 'Uniform Resource Locator: The global address of a resource on the web.' }
            ]
          },
          {
            type: 'list',
            title: 'Web Browsers:',
            items: [
              { label: 'Rendering Engine', description: 'The part of the browser that interprets HTML/CSS and draws the page.' },
              { label: 'JavaScript Engine', description: 'Executes scripts to make web pages interactive (e.g., V8 in Chrome).' }
            ]
          }
        ]
      },
      {
        id: 'search-engines',
        title: 'Search Engines and Web Search',
        subtitle: 'Locating information',
        icon: Search,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Search engines are software systems designed to carry out web searches. They provide a searchable interface for the massive amount of data on the World Wide Web.'
          },
          {
            type: 'grid',
            title: 'How they work:',
            items: [
              { label: 'Crawling', description: 'Spiders or bots systematically browse the web to find new and updated content.' },
              { label: 'Indexing', description: 'The process of adding web pages into a massive database for quick retrieval.' },
              { label: 'Ranking', description: 'Algorithms determine which pages are most relevant to a user\'s query.' }
            ]
          }
        ]
      },
      {
        id: 'aggregators',
        title: 'Content Aggregators',
        subtitle: 'Collecting web content',
        icon: LayoutGrid,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Content aggregation is the process of collecting information from various sources on the web and presenting it in one place for easy consumption.'
          },
          {
            type: 'list',
            items: [
              { label: 'RSS Feeds', description: 'Really Simple Syndication: Allows users to subscribe to updates from websites.' },
              { label: 'News Aggregators', description: 'Services like Google News that compile headlines from thousands of sources.' },
              { label: 'Social Bookmarking', description: 'Platforms where users share and categorize web links (e.g., Reddit, Pinterest).' }
            ]
          }
        ]
      },
      {
        id: 'cloud-computing',
        title: 'Cloud Computing',
        subtitle: 'Accessing resources online',
        icon: Cloud,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Cloud computing is the on-demand availability of computer system resources, especially data storage and computing power, without direct active management by the user.'
          },
          {
            type: 'grid',
            title: 'Service Models',
            items: [
              { label: 'IaaS', description: 'Infrastructure as a Service: Provides virtualized computing resources over the internet (e.g., AWS EC2).' },
              { label: 'PaaS', description: 'Platform as a Service: Provides a platform for developers to build and run apps (e.g., Heroku).' },
              { label: 'SaaS', description: 'Software as a Service: Delivers software apps over the internet (e.g., Google Workspace, Netflix).' }
            ]
          }
        ]
      },
      {
        id: 'collab-wikis',
        title: 'Collaborative Documents and Wikis',
        subtitle: 'Working together online',
        icon: Users,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Collaboration tools allow multiple users to work on the same document or project simultaneously, regardless of their physical location.'
          },
          {
            type: 'list',
            title: 'Features:',
            items: [
              { label: 'Real-time Editing', description: 'Changes made by one user are instantly visible to all others.' },
              { label: 'Version Control', description: 'The ability to track changes and revert to previous versions if needed.' },
              { label: 'Wikis', description: 'Websites that allow users to collaboratively create and edit content (e.g., Wikipedia).' }
            ]
          }
        ]
      }
    ]
  },
  {
    id: 'sharing',
    title: 'Sharing Online',
    color: 'bg-[#90CDF4]', // Light Blue
    subsections: [
      {
        id: 'social-networks',
        title: 'Social Networks',
        subtitle: 'Web 2.0 communities',
        icon: MessageCircle,
        image: 'https://droplr.com/wp-content/uploads/2021/06/users-sharing-files-online-using-a-smartphone-app-vector-id1280291919.jpg',
        content: [
          {
            type: 'text',
            text: 'Social networking is the use of internet-based social media sites to stay connected with friends, family, colleagues, or customers. It is a key part of the "Web 2.0" revolution.'
          },
          {
            type: 'grid',
            title: 'Types of Networks',
            items: [
              { label: 'Personal', description: 'Platforms like Facebook or Instagram for personal connections.' },
              { label: 'Professional', description: 'Networks like LinkedIn for career development and networking.' },
              { label: 'Niche', description: 'Communities focused on specific interests (e.g., Goodreads for book lovers).' }
            ]
          }
        ]
      },
      {
        id: 'blogs-forums',
        title: 'Blogs and Online Forums',
        subtitle: 'Communication and interaction',
        icon: Hash,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Blogs and forums were some of the earliest forms of social interaction on the web, allowing users to share thoughts and engage in discussions.'
          },
          {
            type: 'grid',
            items: [
              { label: 'Blogs', description: 'Regularly updated websites or web pages, typically run by an individual or small group.' },
              { label: 'Forums', description: 'Online discussion sites where people can hold conversations in the form of posted messages.' }
            ]
          }
        ]
      },
      {
        id: 'media-sharing',
        title: 'Audio, Video, and Image Sharing',
        subtitle: 'Distributing multimedia',
        icon: Video,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Multimedia sharing platforms allow users to upload, store, and share digital media like photos, music, and videos with a global audience.'
          },
          {
            type: 'list',
            title: 'Methods:',
            items: [
              { label: 'Streaming Services', description: 'Platforms like YouTube, Spotify, and Netflix that deliver content in real-time.' },
              { label: 'File Hosting', description: 'Services like Dropbox or Google Drive for storing and sharing large files.' },
              { label: 'P2P Sharing', description: 'Direct file exchange between users (e.g., BitTorrent).' }
            ]
          }
        ]
      },
      {
        id: 'smart-tv',
        title: 'Smart TV and Streaming',
        subtitle: 'Interactive television',
        icon: Tv,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Smart TVs integrate internet connectivity and interactive features into traditional television sets, allowing for on-demand content and apps.'
          },
          {
            type: 'grid',
            items: [
              { label: 'VOD', description: 'Video on Demand: Allows users to watch content whenever they choose.' },
              { label: 'IPTV', description: 'Internet Protocol Television: Delivering television content over IP networks.' }
            ]
          }
        ]
      },
      {
        id: 'voip',
        title: 'VoIP and Videoconferencing',
        subtitle: 'Voice over Internet Protocol',
        icon: Video,
        image: '',
        content: [
          {
            type: 'text',
            text: 'VoIP technology allows you to make voice calls using a broadband internet connection instead of a regular (analog) phone line.'
          },
          {
            type: 'list',
            title: 'Key Benefits:',
            items: [
              { label: 'Cost Savings', description: 'Significantly cheaper than traditional long-distance phone calls.' },
              { label: 'Rich Features', description: 'Includes video calling, screen sharing, and file transfers (e.g., Zoom, Microsoft Teams).' }
            ]
          }
        ]
      },
      {
        id: 'messaging',
        title: 'Instant Messaging and Microblogging',
        subtitle: 'Immediacy and portability',
        icon: MessageSquare,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Instant messaging (IM) is a type of online chat that offers real-time text transmission over the internet. Microblogging is a broadcast medium that exists in the form of blogging.'
          },
          {
            type: 'grid',
            items: [
              { label: 'IM Apps', description: 'WhatsApp, Telegram, and Signal for private and group messaging.' },
              { label: 'Microblogging', description: 'Platforms like X (formerly Twitter) for short, public updates.' }
            ]
          }
        ]
      },
      {
        id: 'apps-widgets',
        title: 'Apps and Widgets',
        subtitle: 'Mobile technology software',
        icon: AppWindow,
        image: '',
        content: [
          {
            type: 'text',
            text: 'Mobile applications (apps) are software designed to run on smartphones and tablets. Widgets are small, self-contained apps that run on a home screen or dashboard.'
          },
          {
            type: 'grid',
            title: 'App Types',
            items: [
              { label: 'Native Apps', description: 'Developed specifically for a mobile operating system (iOS or Android).' },
              { label: 'Web Apps', description: 'Responsive websites that look and feel like apps but run in a browser.' },
              { label: 'Hybrid Apps', description: 'A combination of native and web technologies.' }
            ]
          }
        ]
      }
    ]
  }
];
