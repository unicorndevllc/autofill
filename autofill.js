var inputField = document.getElementById("musthavein");
var inputField2 = document.getElementById("nicetohavein");
var searchList = document.getElementById("search-terms1");
var searchList2 = document.getElementById("search-terms2");
var searchTermsWrapper = document.getElementById("searchTermsWrapper1");
var searchTermsWrapper2 = document.getElementById("searchTermsWrapper2");
var selectedTechnologies = document.getElementById("selected-technologies1");
var selectedTechnologies2 = document.getElementById("selected-technologies2");
var mustHaveAllSkillsInput = document.getElementById(
  "mustHaveInAllSkillsInput"
);
var niceToHaveAllSkillsInput = document.getElementById(
  "niceToHaveAllSkillsInput"
);
var terms = [
  ".NET",
  "AJAX",
  "AWS",
  "AMQP",
  "AS400 & iSeries",
  "ASP",
  "ASP.NET",
  "Accounting",
  "ActionScript",
  "Active Directory",
  "Aerospace Engineering",
  "Affiliate Marketing",
  "After Effects",
  "Agile Development",
  "Agronomy",
  "Air Conditioning",
  "Airbnb",
  "Algorithm",
  "Alibaba",
  "Amazon Fire",
  "Amazon Kindle",
  "Amazon Web Services",
  "Alexa",
  "Analytics",
  "Android",
  "Android Honeycomb",
  "Android Wear SDK",
  "Angular JS",
  "Animation",
  "Apache",
  "Apache Ant",
  "Apache Solr",
  "App Developer",
  "Appcelerator Titanium",
  "Apple Compressor",
  "Apple Safari",
  "Apple Watch",
  "Apple iBooks Author",
  "Applescript",
  "Appliance Installation",
  "Arduino",
  "Argus Monitoring Software",
  "Article Submission",
  "Articles",
  "Artificial Intelligence",
  "Arts & Crafts",
  "Assembly",
  "Asterisk PBX",
  "Astrophysics",
  "Audio Production",
  "Audio Services",
  "Audit",
  "Augmented Reality",
  "AutoCAD",
  "AutoHotkey",
  "Autodesk Inventor",
  "Autodesk Revit",
  "Autotask",
  "Axure",
  "Azure",
  "BMC Remedy",
  "BPO",
  "BSD",
  "Balsamiq",
  "Bathroom",
  "Big Data",
  "BigCommerce",
  "Binary Analysis",
  "Biology",
  "Biotechnology",
  "Bitcoin",
  "Biztalk",
  "Blackberry",
  "Blockchain",
  "Blog",
  "Blog Install",
  "Bluetooth Low Energy (BLE)",
  "Bookkeeping",
  "Boonex Dolphin",
  "Bootstrap",
  "Bower",
  "Brain Storming",
  "Branding",
  "Broadcast Engineering",
  "Bulk Marketing",
  "Buyer Sourcing",
  "C Programming",
  "C# Programming",
  "C++ Programming",
  "CAD/CAM",
  "CATIA",
  "CGI",
  "CLIPS",
  "CMS",
  "COBOL",
  "CRE Loaded",
  "CRM",
  "CS-Cart",
  "CSS",
  "CUDA",
  "CakePHP",
  "Call Center",
  "Call Control XML",
  "Capture NX2",
  "Caricature & Cartoons",
  "Cartography & Maps",
  "Carwashing",
  "CasperJS",
  "Cassandra",
  "Catch Phrases",
  "Chef Configuration Management",
  "Chemical Engineering",
  "Chordiant",
  "Christmas",
  "Chrome OS",
  "Cinema 4D",
  "Cisco",
  "Civil Engineering",
  "Classifieds Posting",
  "Clean Technology",
  "Climate Sciences",
  "Cloud Computing",
  "Cocoa",
  "Codeigniter",
  "Cold Fusion",
  "Commercial Cleaning",
  "Commercials",
  "Communications",
  "Compliance",
  "Computer Graphics",
  "Computer Security",
  "Concept Art",
  "Concreting",
  "Construction Monitoring",
  "Contracts",
  "Conversion Rate Optimisation",
  "Cooking & Recipes",
  "Corporate Identity",
  "Covers & Packaging",
  "Cryptography",
  "Crystal Reports",
  "CubeCart",
  "Customer Service",
  "Customer Support",
  "DDS",
  "DNS",
  "DOS",
  "Dart",
  "Data Entry",
  "Data Mining",
  "Data Processing",
  "Data Science",
  "Data Warehousing",
  "DataLife Engine",
  "Database Administration",
  "Database Development",
  "Database Programming",
  "Debian",
  "Debugging",
  "Decking",
  "Delivery",
  "Delphi",
  "Desktop Support",
  "Disposals",
  "Django",
  "DotNetNuke",
  "Drafting",
  "Drones",
  "Drupal",
  "Dthreejs",
  "Dynamics",
  "ERP",
  "Editing",
  "Education & Tutoring",
  "Elasticsearch",
  "Electrical Engineering",
  "Electricians",
  "Electronic Forms",
  "Electronics",
  "Email Developer",
  "Email Handling",
  "Email Marketing",
  "Embedded Software",
  "Ember.js",
  "Energy",
  "Engineering",
  "Engineering Drawing",
  "English Grammar",
  "English Spelling",
  "Entrepreneurship",
  "Erlang",
  "Excavation",
  "Excel",
  "Express JS",
  "Expression Engine",
  "FPGA",
  "Face Recognition",
  "Facebook Marketing",
  "Fashion Modeling",
  "Fencing",
  "Fiction",
  "Flusk",
  "Flask",
  "FileMaker",
  "Final Cut Pro",
  "Finale / Sibelius",
  "Finance",
  "Financial Analysis",
  "Financial Markets",
  "Financial Research",
  "Finite Element Analysis",
  "Firefox",
  "Firebase",
  "Flash 3D",
  "Flashmob",
  "Flex",
  "Flooring",
  "Flow Charts",
  "Flutter",
  "Food Takeaway",
  "Format & Layout",
  "Fortran",
  "Forum Posting",
  "Forum Software",
  "FreeSwitch",
  "Freelance",
  "FreelancerAPI",
  "Fundraising",
  "GIMP",
  "GPGPU",
  "GPS",
  "Game Consoles",
  "Game Development",
  "GameSalad",
  "Gamification",
  "GarageBand",
  "Gardening",
  "Genealogy",
  "General Labor",
  "General Office",
  "Genetic Engineering",
  "Geolocation",
  "Geology",
  "Geospatial",
  "Geotechnical Engineering",
  "Git",
  "GoPro",
  "Golang",
  "Google Adsense",
  "Google Adwords",
  "Google Analytics",
  "Google App Engine",
  "Google Buzz",
  "Google Cardboard",
  "Google Checkout",
  "Google Chrome",
  "Google Cloud Storage",
  "Google Earth",
  "Google Maps API",
  "Google Plus",
  "Google SketchUp",
  "Google Wave",
  "Google Web Toolkit",
  "Google Webmaster Tools",
  "Google Website Optimizer",
  "Grease Monkey",
  "Growth Hacking",
  "Grunt",
  "HBase",
  "HP Openview",
  "HTML",
  "HTML5",
  "Hadoop",
  "Handyman",
  "Haskell",
  "Health",
  "Helpdesk",
  "Heroku",
  "History",
  "Hive",
  "HomeKit",
  "IBM BPM",
  "IBM Tivoli",
  "IBM Websphere Transformation Tool",
  "IIS",
  "ISO9001",
  "ITIL",
  "Illustration",
  "Illustrator",
  "Imaging",
  "Industrial Engineering",
  "Infographics",
  "Instagram",
  "Instrumentation",
  "Insurance",
  "Internet Marketing",
  "Internet Research",
  "Internet Security",
  "Interspire",
  "Intuit QuickBooks",
  "Inventory Management",
  "Investment Research",
  "Ionic Framework",
  "J2EE",
  "J2ME",
  "JD Edwards CNC",
  "JDF",
  "JSON",
  "JSP",
  "Jabber",
  "Java",
  "JavaFX",
  "Javascript",
  "Jewellery",
  "Joomla",
  "Kannada",
  "Kinect",
  "kubernetes",
  "Kitchen",
  "Knockout.js",
  "LESS/Sass/SCSS",
  "LINQ",
  "LaTeX",
  "LabVIEW",
  "Landing Pages",
  "Landscaping & Gardening",
  "Laravel",
  "Latvian",
  "Leads",
  "Leap Motion SDK",
  "Life Coaching",
  "Linear Programming",
  "Linkedin",
  "Linnworks Order Management",
  "Linux",
  "Lisp",
  "LiveCode",
  "Logistics & Shipping",
  "Lotus Notes",
  "Lua",
  "MLM",
  "MMORPG",
  "MODx",
  "MQTT",
  "MVC",
  "MYOB",
  "Mac OS",
  "Macedonian",
  "Machine Learning",
  "Magento",
  "Magic Leap",
  "Mailchimp",
  "Mailwizz",
  "Make Up",
  "Makerbot",
  "Maltese",
  "Management",
  "Manufacturing",
  "Map Reduce",
  "MariaDB",
  "Market Research",
  "Marketing",
  "Marketplace Service",
  "Materials Engineering",
  "Matlab & Mathematica",
  "Maya",
  "Mechanical Engineering",
  "Mechatronics",
  "Medical",
  "Metatrader",
  "MeteorJS",
  "Metro",
  "Microbiology",
  "Microcontroller",
  "Microsoft",
  "Microsoft Access",
  "Microsoft Exchange",
  "Microsoft Expression",
  "Microsoft Hololens",
  "Microsoft Office",
  "Microsoft Outlook",
  "Microsoft SQL Server",
  "Microstation",
  "Millwork",
  "Minitlab",
  "Mobile App Testing",
  "Mobile Phone",
  "MonetDB",
  "Moodle",
  "Motion Graphics",
  "Mural Painting",
  "Music",
  "MySQL",
  "MySpace",
  "Nanotechnology",
  "Natural Language",
  "Network Administration",
  "Newsletters",
  "Nginx",
  "Ning",
  "Nintex Forms",
  "Nintex Workflow",
  "NoSQL Couch & Mongo",
  "Node JS",
  "Nokia",
  "Nutrition",
  "OAuth",
  "OCR",
  "OSCommerce",
  "Objective C",
  "Oculus Mobile SDK",
  "Odoo",
  "Open Cart",
  "Open Journal Systems",
  "OpenBravo",
  "OpenCL",
  "OpenGL",
  "OpenSSL",
  "OpenStack",
  "OpenVMS",
  "Oracle",
  "Order Processing",
  "PDF",
  "PEGA PRPC",
  "PHP",
  "PICK Multivalue DB",
  "PLC & SCADA",
  "PSD to HTML",
  "PSD2CMS",
  "Painting",
  "Palm",
  "Parallax Scrolling",
  "Parallels Automation",
  "Parallels Desktop",
  "Patents",
  "Pattern Making",
  "Pattern Matching",
  "Pavement",
  "PayPal API",
  "Payroll",
  "Paytrace",
  "PencilBlue CMS",
  "Pentaho",
  "PeopleSoft",
  "Periscope",
  "Personal Development",
  "Petroleum Engineering",
  "Phone Support",
  "PhoneGap",
  "Photo Editing",
  "Photography",
  "Photoshop",
  "Photoshop Coding",
  "Physics",
  "Pinterest",
  "Plesk",
  "Plumbing",
  "Poetry",
  "Post-Production",
  "PostgreSQL",
  "Powerpoint",
  "Powershell",
  "Pre-production",
  "Presentations",
  "Press Releases",
  "Prestashop",
  "Prezi",
  "Print",
  "Procurement",
  "Product Descriptions",
  "Product Management",
  "Product Sourcing",
  "Project Management",
  "Project Scheduling",
  "Prolog",
  "Proofreading",
  "Property Development",
  "Property Management",
  "Protoshare",
  "Psychology",
  "Public Relations",
  "Publishing",
  "Puppet",
  "Python",
  "QlikView",
  "Qualtrics Survey Platform",
  "Quantum",
  "QuarkXPress",
  "QuickBase",
  "R Programming Language",
  "REALbasic",
  "RESTful",
  "RTOS",
  "RWD",
  "RapidWeaver",
  "React.JS",
  "React native",
  "Real Estate",
  "Recruitment",
  "Red Hat",
  "Redis",
  "Redshift",
  "Regular Expressions",
  "Remote Sensing",
  "Research",
  "Risk Management",
  "Robotics",
  "Rocket Engine",
  "Roofing",
  "Ruby",
  "Ruby on Rails",
  "Svelte JS",
  "SAP",
  "SAS",
  "SEO",
  "SPSS Statistics",
  "SQL",
  "SQLite",
  "Salesforce App Development",
  "Salesforce.com",
  "Samsung",
  "Samsung Accessory SDK",
  "Scala",
  "Scheme",
  "Scientific Research",
  "Script Install",
  "Scrum",
  "Scrum Development",
  "Search Engine Marketing",
  "Sencha / YahooUI",
  "Sharepoint",
  "Shell Script",
  "Shopify",
  "Shopify Templates",
  "Shopping",
  "Shopping Carts",
  "Short Stories",
  "Siebel",
  "Silverlight",
  "Slogans",
  "Smarty PHP",
  "Snapchat",
  "Social Engine",
  "Social Media Marketing",
  "Social Networking",
  "Socket IO",
  "Software Architecture",
  "Software Development",
  "Software Testing",
  "Solaris",
  "Solidworks",
  "Spark",
  "Sphinx",
  "Splunk",
  "Sports",
  "Squarespace",
  "Squid Cache",
  "Startups",
  "Statistical Analysis",
  "Statistics",
  "Steam API",
  "Storage Area Networks",
  "Stripe",
  "Structural Engineering",
  "Subversion",
  "SugarCRM",
  "Supplier Sourcing",
  "Swift",
  "Symbian",
  "Symfony PHP",
  "System Admin",
  "T-Shirts",
  "TYPO3",
  "Tableau",
  "Tally Definition Language",
  "TaoBao API",
  "Tax",
  "Technical Support",
  "Tekla Structures",
  "Telecommunications Engineering",
  "Telemarketing",
  "Telephone Handling",
  "Templates",
  "Test Automation",
  "TestStand",
  "Testing / QA",
  "Textile Engineering",
  "Tibco Spotfire",
  "Tiling",
  "Time Management",
  "Titanium",
  "Tizen SDK for Wearables",
  "Training",
  "Transcription",
  "Translation",
  "Troubleshooting",
  "Tumblr",
  "Twitter",
  "Typography",
  "UNIX",
  "Ubuntu",
  "Ukrainian",
  "Umbraco",
  "Unity 3D",
  "Usability Testing",
  "User Experience Design / UX",
  "User Interface / IA",
  "User Interface Design / UI",
  "VB.NET",
  "VMware",
  "VPS",
  "Valuation & Appraisal",
  "Varnish Cache",
  "Vectorization",
  "Veeam",
  "Vehicle Signage",
  "Verilog / VHDL",
  "VertexFX",
  "Video Broadcasting",
  "Video Editing",
  "Video Production",
  "Video Services",
  "Video Upload",
  "Videography",
  "Viral Marketing",
  "Virtual Assistant",
  "Virtual Reality",
  "Virtual Worlds",
  "Virtuemart",
  "Virtuozzo",
  "Visa / Immigration",
  "Visual Arts",
  "Visual Basic",
  "Visual Basic for Apps",
  "Visual Foxpro",
  "Visual Merchandising",
  "VoIP",
  "Voice Talent",
  "VoiceXML",
  "Volusion",
  "Vue.js",
  "Vuforia",
  "WHMCS",
  "WIKI",
  "WPF",
  "WatchKit",
  "Web Hosting",
  "Web Scraping",
  "Web Search",
  "Web Security",
  "Web Services",
  "WebOS",
  "Website Design",
  "Website Management",
  "Website Testing",
  "Weddings",
  "Weebly",
  "Webflow",
  "Wikipedia",
  "Windows 8",
  "Windows API",
  "Windows Mobile",
  "Windows Phone",
  "Windows Server",
  "Wireframes",
  "Wireless",
  "Wix",
  "Wolfram",
  "WooCommerce",
  "Word Processing",
  "Wordpress",
  "Wufoo",
  "XML",
  "XMPP",
  "XPages",
  "XQuery",
  "XSLT",
  "Xero",
  "Xojo",
  "Xoops",
  "Yarn",
  "Yii",
  "YouTube",
  "Zbrush",
  "Zen Cart",
  "Zend",
  "Zendesk",
  "Zoho",
  "backbone.js",
  "eBay",
  "eBooks",
  "Electron JS",
  "Sketch",
  "eCommerce",
  "eLearning",
  "edX",
  "iBeacon",
  "iMovie",
  "iPad",
  "iOS",
  "Apple",
  "iPhone",
  "Mobile App Design",
  "Mobile App Prototyping",
  "Mobile App Development",
  "jQuery / Prototype",
  "vBulletin",
  "vTiger",
  "webMethods",
  "x86/x64 Assembler",
  "Zbrush",
  "Zen Cart",
  "Zend",
  "Zendesk",
  "Zoho",
  "backbone.js",
  "eBay",
  "eBooks",
  "Electron JS",
  "Sketch",
  "eCommerce",
  "eLearning",
  "edX",
  "iBeacon",
  "iMovie",
  "iPad",
  "iOS",
  "Apple",
  "iPhone",
  "Mobile App Design",
  "Mobile App Prototyping",
  "Mobile App Development",
  "jQuery / Prototype",
  "vBulletin",
  "vTiger",
  "webMethods",
  "x86/x64 Assembler",
];

selectedTechnologies.addEventListener("click", toggleWrapper);
selectedTechnologies2.addEventListener("click", toggleWrapper2);
inputField.addEventListener("keyup", typeSearch);
inputField2.setAttribute("onkeyup", "typeSearch2()");

inputField.style.display = "none";
inputField2.style.display = "none";
searchTermsWrapper.style.display = "none";
searchTermsWrapper2.style.display = "none";

function htmlDecode(input) {
  var doc = new DOMParser().parseFromString(input, "text/html");
  return doc.documentElement.textContent;
}

const addSkillToList = (skill, list, wrapper) => {
  let input =
    wrapper.id === "searchTermsWrapper1"
      ? mustHaveAllSkillsInput.id
      : niceToHaveAllSkillsInput.id;

  const div = document.createElement("div");
  div.innerHTML = `<span data-technology="${skill}">${skill}</span><a onclick="removeSkillFromList('${skill}', '${list.id}', '${wrapper.id}', '${input}')">x</a>`;
  list.appendChild(div);

  wrapper
    .querySelector("ul")
    .querySelector(`[data-technology="${htmlDecode(skill)}"]`)
    .parentNode.remove();
};

const removeSkillFromList = (skill, list, wrapper, input) => {
  let inputInstance = document.getElementById(input);

  const selectedTechnologies = document
    .getElementById(list)
    .querySelectorAll("div");

  selectedTechnologies.forEach((selectedTechnology) => {
    selectedTechnology
      .querySelector(`[data-technology="${skill}"]`)
      ?.parentNode.remove();
  });

  const li = document.createElement("li");
  li.innerHTML = `<a data-technology="${skill}" href="#" class="list-term">${skill}</a>`;

  document.getElementById(wrapper).querySelector("ul").appendChild(li);

  const newInputValue = inputInstance.value
    .split("|")
    .filter((e) => e !== skill)
    .join("|");

  inputInstance.value = newInputValue;

  if (wrapper === "searchTermsWrapper1") {
    toggleWrapper();
  } else {
    toggleWrapper2();
  }
};

async function searchTerms() {
  // add terms to dropdown list.

  for (i = 0; i < terms.length; i++) {
    var li = document.createElement("li");
    var li2 = document.createElement("li");

    li.innerHTML = `<a data-technology="${terms[i]}" href="#" class="list-term">${terms[i]}</a>`;
    li2.innerHTML = `<a data-technology="${terms[i]}" data-type="nicetohavein" href="#" class="list-term">${terms[i]}</a>`;

    searchList.appendChild(li);
    searchList2.appendChild(li2);
  }

  // orders the list in alphabetical order.

  var list, i, switching, b, shouldSwitch, j;

  list = document.getElementById("search-terms1");

  switching = true;

  while (switching) {
    switching = false;

    b = list.getElementsByTagName("LI");

    j = 0;
    while (j < b.length) {
      shouldSwitch = false;
      if (b[j].innerHTML.toLowerCase() > b[j + 1].innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
      j++;
    }

    if (shouldSwitch) {
      b[i].parentNode.insertBefore(b[i + 1], b[i]);

      switching = true;
    }
  }
}

// auto complete feature, activated on keystroke in the input.

function toggleWrapper() {
  if (searchTermsWrapper.style.display === "none") {
    searchTermsWrapper.style.display = "block";
    inputField.style.display = "block";
    inputField.focus();
  } else {
    searchTermsWrapper.style.display = "none";
    inputField.style.display = "none";
  }

  var filter, ul, li, a, i, txtValue;

  filter = inputField.value.toUpperCase();

  ul = searchList;

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function toggleWrapper2() {
  if (searchTermsWrapper2.style.display === "none") {
    searchTermsWrapper2.style.display = "block";
    inputField2.style.display = "block";
    inputField2.focus();
  } else {
    searchTermsWrapper2.style.display = "none";
    inputField2.style.display = "none";
  }

  var filter, ul, li, a, i, txtValue;

  filter = inputField.value.toUpperCase();

  ul = searchList;

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function typeSearch() {
  var filter, ul, li, a, i, txtValue;

  filter = inputField.value.toUpperCase();

  ul = searchList;

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

function typeSearch2() {
  searchTermsWrapper2.style.display = "block";

  var filter, ul, li, a, i, txtValue;

  filter = inputField2.value.toUpperCase();

  ul = searchList2;

  li = ul.getElementsByTagName("li");

  for (i = 0; i < li.length; i++) {
    a = li[i];

    txtValue = a.textContent || a.innerText;

    if (txtValue.toUpperCase().indexOf(filter) > -1) {
      li[i].style.display = "";
    } else {
      li[i].style.display = "none";
    }
  }
}

searchTerms();

// detects selection of a search term.

document.addEventListener("click", function (event) {
  if (!event.target.matches(".list-term")) return;

  event.preventDefault();

  if (event.target.getAttribute("data-type") === "nicetohavein") {
    if (niceToHaveAllSkillsInput.value.length > 0) {
      niceToHaveAllSkillsInput.value =
        niceToHaveAllSkillsInput.value +
        "|" +
        htmlDecode(event.target.innerHTML);
    } else {
      niceToHaveAllSkillsInput.value = htmlDecode(event.target.innerHTML);
    }

    addSkillToList(
      event.target.innerHTML,
      selectedTechnologies2,
      searchTermsWrapper2
    );

    searchTermsWrapper2.style.display = "none";
    inputField2.style.display = "none";
  } else {
    if (mustHaveAllSkillsInput.value.length > 0) {
      mustHaveAllSkillsInput.value =
        mustHaveAllSkillsInput.value + "|" + htmlDecode(event.target.innerHTML);
    } else {
      mustHaveAllSkillsInput.value = htmlDecode(event.target.innerHTML);
    }

    addSkillToList(
      event.target.innerHTML,
      selectedTechnologies,
      searchTermsWrapper
    );

    searchTermsWrapper.style.display = "none";
    inputField.style.display = "none";
  }
});
