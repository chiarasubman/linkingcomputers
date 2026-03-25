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
            text: 'Telecommunications is just a fancy word for sending messages over long distances using technology. Think of it like a conversation: you need someone to send the message (the sender), a way for the message to travel (like a wire or the air), and someone to get the message (the receiver).'
          },
          {
            type: 'list',
            title: 'How it works:',
            items: [
              { label: 'Sender', description: 'The device that starts the message, like your phone or a computer.' },
              { label: 'Path', description: 'The road the message takes, which can be a cable or invisible waves in the air.' },
              { label: 'Receiver', description: 'The device that gets the message and shows it to you.' },
              { label: 'Booster', description: 'A tool that makes the signal stronger so it can travel very far without getting lost.' }
            ]
          },
          {
            type: 'grid',
            title: 'Ways to talk',
            items: [
              { label: 'One-way', description: 'Like a TV or radio: you listen, but you can\'t talk back.' },
              { label: 'One at a time', description: 'Like a walkie-talkie: you take turns speaking.' },
              { label: 'Both ways', description: 'Like a normal phone call: you can both talk at the same time.' },
              { label: 'Sharing', description: 'A trick that lets many people use the same "road" at once.' }
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
            text: 'Sending data is like sending a letter. For the message to make sense, the sender and the receiver need to be "in sync" so they don\'t mix up the pieces of information.'
          },
          {
            type: 'list',
            title: 'Staying in Sync:',
            items: [
              { label: 'Continuous', description: 'Data flows like a steady stream of water. Both sides follow a strict timer.' },
              { label: 'Stop & Go', description: 'Data is sent in small chunks with "start" and "stop" signs, so no constant timer is needed.' }
            ]
          },
          {
            type: 'grid',
            title: 'How messages travel',
            items: [
              { label: 'Direct Line', description: 'Like a private phone line that stays open just for you while you talk.' },
              { label: 'Postal Style', description: 'The message is broken into small "envelopes" that find their own way to the destination.' }
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
            text: 'Wireless means sending signals through the air using invisible waves, like radio or light, instead of using physical cables.'
          },
          {
            type: 'grid',
            title: 'Short Distance',
            items: [
              { label: 'Wi-Fi', description: 'The most common way to get high-speed internet at home or in a café.' },
              { label: 'Bluetooth', description: 'Used to connect things very close by, like your headphones to your phone.' },
              { label: 'Tap to Pay', description: 'Technology that lets you pay just by touching your card or phone to a reader.' }
            ]
          },
          {
            type: 'list',
            title: 'Mobile Internet',
            items: [
              { label: '4G', description: 'The standard fast internet we use on our phones every day.' },
              { label: '5G', description: 'The newest and fastest mobile internet, designed to be super quick with no delays.' }
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
            text: 'A computer network is just a group of computers connected together so they can share things, like files, printers, or an internet connection.'
          },
          {
            type: 'grid',
            title: 'Who is in charge?',
            items: [
              { label: 'Boss & Workers', description: 'One main computer (the server) provides everything to the others (the clients).' },
              { label: 'Equal Partners', description: 'Every computer shares directly with the others, with no one in charge.' }
            ]
          },
          {
            type: 'list',
            title: 'The Tools Needed:',
            items: [
              { label: 'Router', description: 'The "traffic cop" that directs data between different networks.' },
              { label: 'Switch', description: 'Connects devices inside your house or office so they can talk to each other.' },
              { label: 'Modem', description: 'The bridge that connects your home network to the outside internet.' }
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
            text: 'Networks are named based on how much area they cover. It can be as small as your desk or as big as the whole planet.'
          },
          {
            type: 'grid',
            items: [
              { label: 'Personal', description: 'Just for you, like connecting your watch to your phone.' },
              { label: 'Local', description: 'Covers a small place like your home, office, or school.' },
              { label: 'City-wide', description: 'Covers a whole city or a very large campus.' },
              { label: 'Wide', description: 'Covers huge distances, like countries (the Internet is the biggest one).' },
              { label: 'Global', description: 'A massive web that connects everything around the world.' }
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
            text: 'Topology is just a fancy word for how computers are physically or logically laid out in a network.'
          },
          {
            type: 'grid',
            items: [
              { label: 'Star', description: 'Everything connects to a middle hub, like the points of a star.' },
              { label: 'Line', description: 'All computers are connected to one long main cable.' },
              { label: 'Circle', description: 'Computers are connected in a loop, passing info around.' },
              { label: 'Web', description: 'Everything is connected to everything else for extra safety.' },
              { label: 'Tree', description: 'A mix of star and line layouts, looking like branches.' }
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
            text: 'The OSI model is like a set of rules that helps different computers talk to each other by breaking the process into 7 simple steps.'
          },
          {
            type: 'list',
            title: 'The 7 Steps:',
            items: [
              { label: '1. Physical', description: 'The actual wires and signals.' },
              { label: '2. Connection', description: 'Making sure the data gets to the next device safely.' },
              { label: '3. Routing', description: 'Finding the best path for the data to travel.' },
              { label: '4. Transport', description: 'Checking that the whole message arrived correctly.' },
              { label: '5. Session', description: 'Starting and stopping the conversation.' },
              { label: '6. Format', description: 'Translating the data so both sides understand it.' },
              { label: '7. App', description: 'What you see, like your web browser or email.' }
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
            text: 'TCP/IP is the actual set of rules the Internet uses. It\'s a simpler version of the OSI model with only 4 layers.'
          },
          {
            type: 'grid',
            title: 'Main Rules',
            items: [
              { label: 'TCP', description: 'Makes sure every piece of data arrives in the right order and without errors.' },
              { label: 'IP', description: 'The "address" system that makes sure data gets to the right computer.' },
              { label: 'UDP', description: 'A faster way to send data when speed is more important than perfect accuracy (like video calls).' }
            ]
          },
          {
            type: 'list',
            title: 'The 4 Layers:',
            items: [
              { label: 'Apps', description: 'The programs you use (Web, Email).' },
              { label: 'Delivery', description: 'Handling the conversation (TCP/UDP).' },
              { label: 'Internet', description: 'Finding the right address (IP).' },
              { label: 'Physical', description: 'The actual cables and Wi-Fi.' }
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
            text: 'The Internet is a massive, worldwide web of billions of computers and gadgets. It lets you find almost any information, talk to anyone, and do things like shopping or banking from anywhere.'
          },
          {
            type: 'list',
            title: 'The Backbone:',
            items: [
              { label: 'ISP', description: 'The company you pay to get internet at home, like your phone provider.' },
              { label: 'Main Lines', description: 'Super-fast cables that connect different parts of the world underground or under the sea.' },
              { label: 'DNS', description: 'The "phonebook" of the internet that turns names like google.com into numbers computers understand.' }
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
            text: 'The World Wide Web is the collection of pages and websites you see when you go online. It was created in 1989 to help people share information easily.'
          },
          {
            type: 'grid',
            title: 'Web Basics',
            items: [
              { label: 'HTML', description: 'The basic code used to build every web page.' },
              { label: 'HTTP/HTTPS', description: 'The rules for moving data on the web. The "S" means it\'s secure and private.' },
              { label: 'URL', description: 'The unique address of a web page, like a home address.' }
            ]
          },
          {
            type: 'list',
            title: 'Browsers:',
            items: [
              { label: 'Drawing Tool', description: 'The part of your browser that reads code and shows you the actual page.' },
              { label: 'Action Tool', description: 'The part that makes buttons work and pages interactive.' }
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
            text: 'Search engines are like super-smart librarians. They help you find exactly what you\'re looking for among billions of web pages.'
          },
          {
            type: 'grid',
            title: 'How they work:',
            items: [
              { label: 'Exploring', description: 'Automated programs that constantly browse the web to find new pages.' },
              { label: 'Organizing', description: 'Saving all those pages in a giant digital library so they can be searched quickly.' },
              { label: 'Picking', description: 'Using smart rules to show you the most helpful results first.' }
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
            text: 'Content aggregators collect information from many different places and put it all in one spot so you don\'t have to go looking for it.'
          },
          {
            type: 'list',
            items: [
              { label: 'Updates', description: 'A way to get the latest news from your favorite sites automatically.' },
              { label: 'News Apps', description: 'Services that show you headlines from many different newspapers at once.' },
              { label: 'Saving Links', description: 'Places where people share and organize interesting things they find online.' }
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
            text: 'Cloud computing means using the internet to store files or run programs instead of using your own computer\'s hard drive.'
          },
          {
            type: 'grid',
            title: 'Types of Cloud',
            items: [
              { label: 'Rent a Computer', description: 'Renting powerful computers and storage online (like Amazon\'s cloud).' },
              { label: 'Build an App', description: 'Tools for developers to create and run their own apps online.' },
              { label: 'Use an App', description: 'Using apps directly in your browser, like Gmail, Netflix, or Google Docs.' }
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
            text: 'These tools let many people work on the same project at the same time, even if they are in different countries.'
          },
          {
            type: 'list',
            title: 'Features:',
            items: [
              { label: 'Live Editing', description: 'You can see other people typing and making changes as they happen.' },
              { label: 'History', description: 'The ability to see old versions of a document and go back if you make a mistake.' },
              { label: 'Wikis', description: 'Websites where anyone can add or change information, like Wikipedia.' }
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
            text: 'Social networks are websites and apps that help you stay in touch with friends, family, and people who share your interests.'
          },
          {
            type: 'grid',
            title: 'Types of Networks',
            items: [
              { label: 'Friends & Family', description: 'Places like Facebook or Instagram for sharing your daily life.' },
              { label: 'Work & Career', description: 'Sites like LinkedIn for finding jobs and professional connections.' },
              { label: 'Special Interests', description: 'Groups for people who love specific things, like books, games, or cooking.' }
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
            text: 'Blogs and forums were some of the first ways people talked to each other online, sharing stories and answering questions.'
          },
          {
            type: 'grid',
            items: [
              { label: 'Blogs', description: 'Online journals where people write about their lives or hobbies.' },
              { label: 'Forums', description: 'Message boards where people discuss specific topics and help each other.' }
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
            text: 'These platforms let you share your photos, music, and videos with the whole world or just a few friends.'
          },
          {
            type: 'list',
            title: 'How we share:',
            items: [
              { label: 'Streaming', description: 'Watching or listening instantly without downloading, like YouTube or Spotify.' },
              { label: 'Cloud Storage', description: 'Keeping your files online so you can share them easily, like Google Drive.' },
              { label: 'Direct Sharing', description: 'Sending files directly from one person to another.' }
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
            text: 'Smart TVs are televisions that can connect to the internet, letting you watch movies and shows whenever you want.'
          },
          {
            type: 'grid',
            items: [
              { label: 'On Demand', description: 'Watching what you want, when you want, instead of following a schedule.' },
              { label: 'Internet TV', description: 'Watching normal TV channels through your internet connection.' }
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
            text: 'These technologies let you make phone and video calls using the internet instead of old-fashioned phone lines.'
          },
          {
            type: 'list',
            title: 'Why use it:',
            items: [
              { label: 'Cheaper', description: 'Calls are often free or much cheaper, especially for long distances.' },
              { label: 'More Features', description: 'You can see the person, share your screen, and send files while talking.' }
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
            text: 'Instant messaging is for quick, real-time chats. Microblogging is for sharing short public updates with everyone.'
          },
          {
            type: 'grid',
            items: [
              { label: 'Chat Apps', description: 'Apps like WhatsApp or Telegram for private and group messages.' },
              { label: 'Short Updates', description: 'Platforms like X (Twitter) for sharing quick thoughts with the world.' }
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
            text: 'Apps are programs made for your phone. Widgets are tiny apps that sit on your home screen to show you quick info like the weather.'
          },
          {
            type: 'grid',
            title: 'App Types',
            items: [
              { label: 'Phone Apps', description: 'Apps built specifically for your iPhone or Android phone.' },
              { label: 'Web Apps', description: 'Websites that act like apps but run in your browser.' },
              { label: 'Mix Apps', description: 'A mix of both phone and web technology.' }
            ]
          }
        ]
      }
    ]
  }
];
