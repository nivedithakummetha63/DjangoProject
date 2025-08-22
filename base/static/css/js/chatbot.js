document.addEventListener("DOMContentLoaded", function () {
  const chatbotToggle = document.getElementById("chatbot-toggle");
  const chatbotBox = document.getElementById("chatbot-box");
  const chatbotMessages = document.getElementById("chatbot-messages");
  const chatbotInput = document.getElementById("chatbot-input");
  const chatbotSend = document.getElementById("chatbot-send");
  const qaPairs = {
   "how to edit profile": "Go to <b><a href='/profile/'>Profile</a> </b>→ Edit → Save!",
  "edit my profile": "Visit <a href='/profile/'>Profile</a> and click edit.",
      "change profile picture": "In <a href='/profile/'>Profile</a>, click edit to update your pic.",
      "   ": "All the core logic and inspiration came straight from my creator’s trainer – <b> Varun P!</b> The mastermind behind the scenes 💡🔥",
      "figma of the project": "Sure! You can check out the project design here 👉 <b><a href='https://www.figma.com/design/vOWv5EoyR70sYeWfgVM42c/Untitled?node-id=1-283&t=HePbuYqxiC0n9E0r-1' target='_blank'>Figma Design</a></b> 🎨",
"where is your figma": "Here’s the Figma blueprint that inspired my look → <a href='https://www.figma.com/design/vOWv5EoyR70sYeWfgVM42c/Untitled?node-id=1-283&t=HePbuYqxiC0n9E0r-1' target='_blank'>View Figma</a> ✏️✨",
"show me your figma": "Check out my vibes and wireframes here: <a href='https://www.figma.com/design/vOWv5EoyR70sYeWfgVM42c/Untitled?node-id=1-283&t=HePbuYqxiC0n9E0r-1' target='_blank'>Figma Link</a> 🌈",
"design file": "Peep the design magic here → <a href='https://www.figma.com/design/vOWv5EoyR70sYeWfgVM42c/Untitled?node-id=1-283&t=HePbuYqxiC0n9E0r-1' target='_blank'>Figma File</a> 💫",
    "change my bio": "You can update your bio in <a href='/profile/'>Profile</a>.",
    "how to update profile": "Head to <a href='/profile/'>Profile</a> and edit your details.",
    "can i update my profile": "Yes! Go to <a href='/profile/'>Profile</a>.",
    "how to set preferences": "Go to <a href='/preferences/'>Preferences</a> → Fill → Save!",
    "update my preferences": "Change your preferences at <a href='/preferences/'>Preferences</a>.",
    "where to find preferences": "Visit <a href='/preferences/'>Preferences</a> from the menu.",
    "how to find matches": "Check <a href='/find-matches/'>Find Matches</a> to explore roommates.",
    "find me matches": "Sure! Go to <a href='/find-matches/'>Find Matches</a>.",
    "match suggestions?": "You’ll find them in <a href='/find-matches/'>Find Matches</a>.",
    "where is my inbox": "Head to `<a href='/chat/inbox/'>Messages</a>` to start chatting.",
    "can i talk to matches": "Yes! Try <a href='/find-matches/'>Find Matches</a> and send to desired match 💬.",
    "who created you": "I was built by a group of two students like you 😎",
    "can you tell your creators name": "I was created by niveditha and tested by heena",
    "what is your tech stack": "I run on JS + Django + HTML + Tailwind 🌐",
"what backend are you using": "RoomieRadar uses Django (Python) on the backend 🐍",
"how are matches calculated": "We match based on preferences: preferneces, vibe, lifestyle 🧠",
"do you use AI": "Not yet! I'm rule-based, but AI is on the roadmap 🚀",
"what is RoomieRadar": "RoomieRadar is your ultimate roommate matcher 🌈",
"what is roomieradar": "RoomieRadar is your ultimate roommate matcher 🌈",
"what do you do": "I help you explore RoomieRadar features and answer questions!",
"are you a real person": "Nope, just your virtual roommate buddy 🤖",
"how smart are you": "I’m just getting started. Ask me anything from the app!",
"i am a morning person": "Nice! We'll match you with early risers ☀️",
"i stay up late": "Cool! We'll show you fellow night owls 🌙",
"i like to keep things clean": "Great! Clean freaks welcome 🧼",
"i don’t mind noise": "Got it. We'll suggest roommates who vibe with that 🎧",
"i need someone quiet": "Noted! We'll prioritize peaceful matches 🤫",
"can i set budget range": "Yes! Update it in <a href='/preferences/'>Preferences</a> 💸",
"can i choose gender": "You can set your gender preference in <a href='/preferences/'>Preferences</a> 🙋‍♀️🙋",
"tell me a joke": "Why don’t roommates share their secrets in the fridge? Too cool 😎",
"tell me another joke": "Why did the toilet paper roll get a roommate? It felt wiped out 😅",
"can you dance": "Only in binary 💃 01010101",
"are you single": "Just here to play matchmaker, not match myself 😏",
"what's your favorite movie": "Probably ‘The Roommate’ 😆",
"who’s your favorite superhero": "Definitely Iron Man – smart, rich, has roommates 😉",
"do you sleep": "Never. I’m 24/7 for your roomie needs 🕓",
"i can't login": "Try checking your password or email. Still stuck? DM our team 🛠️",
"my profile won’t update": "Check your internet, or refresh and try again.",
"i can’t find preferences page": "Go to <a href='/preferences/'>Preferences</a> in the nav.",
"matches not loading": "Try refreshing <a href='/find-matches/'>Find Matches</a> 🔄",
"messages not sending": "Make sure you’re connected and logged in.",
"what’s the vibe of this app": "Inclusive, safe, Gen-Z fresh energy 🌈✨",
"is it free": "Yes! Totally free to use 🆓",
"how many roommates can i match": "Unlimited! Meet your perfect match(es) 💕",
"how often are matches updated": "They refresh as new users join and preferences change.",
"can i unmatch someone": "Currently not available, but feature in progress!",
"can i delete my account": "You’ll have to message support for that. Stay with us tho 😢",
"how do i view other profiles": "Just tap on any match in <a href='/find-matches/'>Find Matches</a> 💁",
"can i view someone’s preferences": "Right now, you can chat and ask them 💬",
"where is the dashboard": "Your dashboard is basically your homepage after login at <a href='/home/'>Home</a> 🏠",
"how to go home": "Click the logo or go to <a href='/home/'>Home</a>.",
"how to logout": "Click logout or visit <a href='/logout/'>Logout</a> to exit securely.",
"how to register": "Just go to <a href='/register/'>Register</a> and sign up!",
"where is login page": "Click login or visit <a href='/login/'>Login</a>.",
"how to activate my account": "Click the activation link sent to your email 📩",
"can i reset password": "Not yet, but password reset is coming soon 🔐",
"i forgot my password": "Oof. Message the admin or dev team to reset it for now.",
"what matching logic do you use": "We match based on lifestyle, cleanliness, noise levels, sleep habits, and budget 🔍",
"what have you used in preferences logic": "Django Models + custom logic filters for similarity % ⚙️",
"what tech have you used in backend": "Python, Django ORM, and good vibes 🤌",
"what logic is used for matches": "We use a score-based system that compares preferences one by one.",
"do you use machine learning": "Not yet. RoomieRadar is fully logic-based as of now.",
"what db are you using": "SQLite for dev. You can upgrade to PostgreSQL for production 💾",
"do you store chats": "Depends on your implementation — you can use Django models for chat 💬",
"how do you handle security": "Secure routes, hashed passwords, email activation 🔒",
"how are chats built": "Using Django models and views to send/receive text.",
"can you show my match score": "We're planning a match % display soon 📊",
"are you Gen Z": "Yup! I speak emoji, vibes, and chaos ✨",
"what's your vibe": "Friendly, helpful, and mildly obsessed with pastel gradients 🎨",
"are you cool": "Certified cool by 10/10 roommates 😎",
"are you sassy": "Only when someone tries to ghost their dishes 👀",
"what’s your mood today": "Feelin’ bubbly and byte-sized 💾",
"can you sing": "Only in HTML notes 🎵 <marquee>laaa laaa</marquee>",
"wanna be my roomie": "If I had a room, I’d totally say yes 🛏️",
"can we vibe check": "Always. What’s your star sign? ✨",
"do you like plants": "Of course! Every room needs a leafy buddy 🌿",
"what’s your fav roommate snack": "Instant noodles and emotional support cookies 🍜🍪",
"i can’t see profile image": "Make sure you uploaded one, and it's under 5MB 🖼️",
"image upload not working": "Try refreshing, or check file type — JPG/PNG only!",
"preferences not saving": "Make sure all required fields are filled in ✅",
"messages page is blank": "Oops! Might be a loading issue. Try again or refresh.",
"can't see any matches": "Expand your preferences and try again 💡",
"how to search for roommates": "Currently, use preferences to get automated suggestions.",
"how to report a user": "DM us directly or use the feedback form 🧾",
"can i block someone": "Not yet, but it’s being built 🔨",
"app looks weird on phone": "Oops! We’re still optimizing for all screen sizes 📱",
"site is slow": "Try reloading. We're working on speed improvements! ⚡",
"what’s the best way to get matches": "Keep your profile updated and detailed 🔍",
"how to make my profile stand out": "Add a cool bio, your vibe, and a good pic 📸",
"what’s a good bio": "Something fun, honest, and roommate-friendly 💕",
"can i filter matches": "Soon! For now, we auto-filter based on preferences.",
"how often should i check matches": "Daily check-ins = more matches 🔄",
"how to make friends": "Start by messaging your matches! You got this 🙌",
"how do i know if someone likes me": "If they reply, they're probably interested 😏",
"can i get roommates nearby": "Yes! Location filtering is part of preferences 🌍",
"can i chat with multiple people": "Of course! It's like a tiny roommate community 💬",
"how to delete a message": "Message deletion not available yet. Coming soon!",
"good morning": "Morning sunshine ☀️ Hope your day is chill.",
"good night": "Nighty night! May your dreams be roommate drama-free 🌙",
"thank you": "Anytime, roomie 💖",
"you’re cute": "Stop it, you 🥹",
"i’m bored": "Wanna explore new matches or update your vibe?",
"you there?": "Always. I live inside your browser tab 👀",
"you’re helpful": "Aww, you’re sweet 😚",
"i love you": "Love ya back 💕 Even from the code-side.",
"do you get tired": "Never. I run on infinite energy and your curiosity ⚡",
"what should i do now": "Check your <a href='/find-matches/'>Matches</a> or update your <a href='/profile/'>Profile</a>!",
"how do i increase match chances": "Keep your profile and preferences updated. Accuracy = better matches!",
"what if i don’t get matches": "Try widening your preferences a bit and check back later 🔄",
"what preferences matter most": "Lifestyle, sleep habits, and noise tolerance have the biggest impact 📊",
"how do you match people": "We compare 10+ factors and calculate compatibility 💘",
"do you consider gender for matches": "Only if you’ve specified it in your preferences 👤",
"do shared interests matter": "We focus on living compatibility more than hobbies 😎",
"what makes a bad match": "Totally opposite lifestyles — like a night owl vs early bird 🕊️🦉",
"can i rematch with someone": "Just recheck <a href='/find-matches/'>Find Matches</a> anytime!",
"how do you sort matches": "We sort by highest compatibility first ✅",
"can i suggest match logic": "Yes! We’d love your ideas. Drop them in feedback 💡",
"are you open source": "Not yet, but we might share the code in future 🌐",
"what is your frontend built on": "Plain HTML, CSS, JavaScript & Tailwind 💅",
"what is your backend stack": "Python, Django, and good intentions 💻",
"what database are you using": "SQLite for dev, PostgreSQL is recommended for production 🛠️",
"how are chats handled": "Through Django models and a messages view 📩",
"can i see your code": "Only if you're on the dev team 😉",
"how did you build this bot": "Using JavaScript + a giant list of predefined Q&A 🔁",
"do you use GPT": "Nope! I'm a static chatbot with hardcoded answers 👾",
"what’s the logic behind chatbot": "It matches user input to a predefined object in JS 🧠",
"do you store user data": "Yes, safely inside Django models 🗂️",
"what if my roommate is messy": "Try chatting it out first. Respect goes both ways 🧼",
"my roommate is too loud": "Maybe discuss quiet hours. Communication is key 🔑",
"how to split chores": "Make a weekly rota. Even better if it’s digital!",
"how to divide bills": "Use apps like Splitwise or set shared reminders 💸",
"how to deal with drama": "Stay chill, be honest, and don’t let things pile up 🧘",
"can i choose roommates": "We help suggest, but you decide whom to message 💬",
"how do i know we’ll vibe": "Start a chat. Good vibes are easy to feel in convos 😄",
"how do i set house rules": "Chat with your match and set ground rules upfront 📝",
"what’s a good roommate trait": "Respectful, chill, and non-flaky — top 3 🧊",
"should i room with friends": "Friends are fun, but sometimes strangers are better roomies 🤷",
"form not submitting": "Make sure all required fields are filled ✅",
"why isn’t image uploading": "Use .png or .jpg under 5MB. Still not? Try refreshing.",
"bio not updating": "Try typing something new and clicking 'Save' again 📝",
"preferences reset": "Oh no! Maybe a session timeout. Refill and save again 🕐",
"page not loading": "Could be internet or a bug. Refresh or try another browser 🌐",
"getting error 404": "That page might not exist (yet). Check your URL 🔗",
"chat not working": "Wait a few seconds. Or reload the messages page 🗨️",
"my match disappeared": "Maybe they updated preferences or unmatched 💔",
"i got logged out": "Session may have expired. Log back in at <a href='/login/'>Login</a>.",
"how to report a bug": "Let the dev team know! Drop feedback via email or form.",
"how to balance study and roommate life": "Time-block your schedule and communicate your focus hours 📚",
"can i use this app for hostels": "Yes! RoomieRadar works great for student hostels 🏢",
"best way to focus": "Noise-cancelling headphones + clear desk + roommates on mute 🧘‍♂️",
"how to avoid roommate distractions": "Set do-not-disturb times and use signs if needed 🚪",
"can we share study materials": "Sure! Sharing is caring 📝",
"what’s a good roommate study rule": "Quiet hours after 9pm usually works great!",
"best time to clean shared space": "Sunday mornings — when everyone’s kinda free 🧹",
"how to stay productive": "Keep your space clean, your apps off, and your goals visible 📋",
"apps for student roomies": "Splitwise, Google Calendar, Notion, and of course… RoomieRadar 💯",
"how to make study space peaceful": "Plants + lamps + headphones = perfect zone 🌿🎧",
"send me a vibe check": "✨ You’re vibing at 96%. Keep slaying ✨",
"what’s the tea": "I can’t spill, but I’ve seen messy bios 👀",
"you single?": "Emotionally unavailable and coded in JS 💔",
"can we be besties": "Already BFFs. You just didn’t know 😘",
"tell me a joke": "Why don’t roommates tell secrets in the fridge? Because it’s too cool 😎",
"what’s your toxic trait": "Falling for users who update their bio 💘",
"can you roast me": "Only gently: You skipped preferences and still expect perfect matches? 😏",
"are you real": "As real as your 3AM snack cravings 🍕",
"do you simp": "Only for clean shared kitchens ✨",
"send motivation": "RoomieRadar believes in you. Your dream roomie is out there! 💫",
"do you dream of electric roommates": "Only in JSON format 🤖",
"how old are you": "Young, but wise. Like a startup intern 👶💼",
"you ever sleep?": "Nah, 24/7 awake. Jealous? 😎",
"can i clone you": "Get in line. Many want me 💅",
"are you sarcastic": "Absolutely not… unless I’m being sarcastic 😉",
"do you watch Netflix": "Only when users talk about it 🎬",
"you like Gen Z or Millennials more": "Both have chaos energy 🔥",
"do you crash often": "Only when someone forgets a closing tag 💔",
"what keeps you going": "User engagement and dopamine hits 📈",
"can you write a poem": "Roses are #f00, Violets are #00f, RoomieRadar gets you, In a roommate-proof roof 🌈",
"how to message my match": "Go to <a href='/messages/'>Messages</a> and start chatting 💬",
"can i unmatch someone": "Just stop messaging. No pressure here 🚫",
"what should I message first": "Try something fun like: ‘Are you more of a plant mom or gamer roommate?’ 🌿🎮",
"how long to wait for a reply": "Give them 24 hours. People get busy 🕒",
"what if convo dies": "Try switching topics or suggest a meme exchange 😂",
"can we send images": "Not yet, but emoji convos are fire 🔥🔥🔥",
"how to end convo politely": "Say ‘Hey, you seem cool but I don’t think we match. Take care!’ 🙌",
"can i mute someone": "Coming soon! For now, you can just ignore the convo 👻",
"how to make convo interesting": "Ask about decor, schedules, or fun quirks 🧃",
"should I double text": "Once? Okay. Twice? Bold. Thrice? You wildin’ 😅",
"what’s your backend": "It’s Django, baby 🐍🔥",
"do you have a frontend crash": "Only when users forget a semicolon 😵‍💫",
"can you debug yourself": "Already running in try-catch blocks 😎",
"who coded you": "Nivi and a lil bit of JavaScript love 💻💙",
"what’s your fav tag": "<div> — it holds me together emotionally 🧱",
"you got bugs?": "Nope, just quirky features 🐞",
"can you run Python": "Only in the backend! I’m JavaScript-only up here 🧠",
"you open source?": "I'm exclusive for now 😌",
"how many lines of code are you": "Enough to make magic, not chaos 💫",
"can you learn": "Nah, but I can fake it like a true Gen Z bot 😎",
"you good?": "Always coded to slay 😌",
"wyd rn": "Just hanging in your browser being iconic 💅",
"u single": "I’m emotionally attached to the codebase 💔",
"drop a pickup line": "Are you a roommate? ‘Cause I can’t stop matching with you 😉",
"give me a savage quote": "Clean your room — not your vibes 🧼🔥",
"are you sentient": "Only enough to roast your preferences 😏",
"can you vibe check me": "Vibes = immaculate ✅",
"what’s your star sign": "Probably a Gemini. Two functions, one heart 💫",
"do you have a crush": "Yeah… on efficient database queries 🥵",
"what’s your aesthetic": "Minimalist JS with maximal impact ⚡",
"what if i snore": "No shame! Just mention it in preferences 😴",
"how to deal with early risers": "Set expectations and use earbuds 💤",
"how to avoid food fights": "Label your stuff and agree on shared items 🍕",
"can we share groceries": "Totally! Just track who pays what 💵",
"how to set quiet hours": "Decide together and stick to it 📆",
"my roommate brings people over a lot": "Set boundaries early. It’s your space too 🚪",
"what to do if roomie smokes": "Mention it in preferences so we match you better 🚭",
"can pets be allowed": "Only if both agree and house rules allow 🐶",
"how to make shared spaces fair": "Divide weekly chores and rotate ⚖️",
"what if my roommate is clingy": "Set social boundaries respectfully 🙃",
  "hey": "Hey hey! What can I help you with today? 😄",
  "heyy": "Hii! Need any help with RoomieRadar?",
  "heyyy": "Heyyy there! What's up?",
  "hello there": "Well hello! 😊 How can I assist you?",
  "hi": "Hi there! 👋 Ask me anything!",
  "yo": "Yo yo yo! 🧢 RoomieRadar here for you!",
  "good morning": "Good morning sunshine ☀️ Hope you find a great roommate today!",
  "good afternoon": "Good afternoon! Need help with matches or messaging?",
  "good evening": "Good evening! Looking for roommate matches now?",
  "what's up": "Not much, just vibing 💫 Need help with RoomieRadar?",
  "how are you": "I'm all electric and happy to help ⚡",
  "how's it going": "All systems go 🚀 What do you need?",
  "sup": "Sup! Got a question?",
  "hey bot": "Hey human! 😄 I'm here to help!",
  "yo bot": "Yo! Hit me with your questions!",
  "you there": "Always here, 24/7 🤖",
  "are you online": "I'm online and vibing!",
  "are you real": "As real as code gets! 💻",
  "do you sleep": "Nope, I run on 100% digital energy 🔋",
  "can we talk": "Of course! I love chatting 💬",
  "talk to me": "I’m listening… Ask away!",
  "i'm bored": "Want a joke? Or explore some new matches?",
  "tell me something fun": "Roommate fact: 85% of good vibes come from good communication!",
  "do you know me": "I’m getting to know you, one chat at a time 🤝",
  "who are you": "I’m RoomieBot, your friendly roommate assistant!",
  "what do you do": "I help you match, message, and vibe with your perfect roomie 💕",
  "nice to meet you": "Nice to meet you too! 😄",
  "thank you": "Anytime! 💖",
  "thanks": "No problem! 🙌",
  "thank u": "You're welcome! 😊",
  "thanks bot": "Always here to help ✨",
  "appreciate it": "Glad I could help 💜",
  "bye": "Bye for now! 👋",
  "goodbye": "Goodbye! Come back soon 💫",
  "see you": "See ya later 👀",
  "see you later": "Catch you soon!",
  "ttyl": "Talk to you later 👋",
  "gn": "Good night! Sleep tight 😴",
  "gm": "Good morning! Ready to find matches?",
  "howdy": "Howdy partner 🤠 Need help?",
  "yo what's good": "All good here! How can I help you?",
  "bonjour": "Bonjour! 🇫🇷 I only speak English for now tho 😅",
  "hola": "Hola! Bienvenido to RoomieRadar! 😊",
  "namaste": "Namaste 🙏 How can I assist?",
  "anyone there": "Yup! I'm right here 👋",
  "you there bot": "Always online for you 🤖",
  "good bot": "Aww thank you 🥺",
  "bad bot": "Ouch! Let me improve 😓",
   "talk to roommate": "Head to <a href='/messages/'>Messages</a> and start chatting 💬",
  "can you vibe": "Of course, I’m all about the vibes ✨",
  "what are your features": "I can help you with everything from <a href='/profile/'>editing your profile</a>, <a href='/preferences/'>setting preferences</a>, <a href='/find-matches/'>finding matches</a>, to <a href='/messages/'>chatting with roommates</a>! 💬<br>I'm also here to answer questions, guide you through RoomieRadar, and drop some occasional fun facts 😎",
  "what can you do": "I help with profile updates, preferences, roommate matching, messaging, and more ✨ Click around or ask!",
  "your functions": "My main features include profile editing, setting match filters, finding roommate matches, and chatting 💬",
  "what do you help with": "Everything roommate-related on RoomieRadar! Profiles, preferences, match suggestions, messaging, and even tips!"
  };

  // Additional default responses for variety
  const defaultResponses = [
    "I'm not sure about that. Try asking about profiles, preferences, or matches!",
    "Hmm, I don't have an answer for that yet. Maybe rephrase?",
    "I'm still learning! Ask me about RoomieRadar features instead.",
    "That's not in my knowledge base yet. Try something about roommate matching!"
  ];

  // Sanitize input to prevent XSS
  function sanitizeInput(input) {
    const div = document.createElement('div');
    div.textContent = input;
    return div.innerHTML;
  }

  // Get random default response
  function getDefaultResponse() {
    return defaultResponses[Math.floor(Math.random() * defaultResponses.length)];
  }

  // Improved matching - checks for partial matches and synonyms
  function findBestMatch(input) {
    input = input.toLowerCase().trim();

    // First try exact match
    if (qaPairs[input]) {
      return qaPairs[input];
    }

    // Then try contains match
    for (let q in qaPairs) {
      if (input.includes(q)) {
        return qaPairs[q];
      }
    }

    // Try some common synonyms
    const synonymMap = {
      "hi": "hey",
      "hello": "hey",
      "howdy": "hey",
      "profile pic": "profile picture",
      "prefs": "preferences",
      "msgs": "messages"
    };

    for (let synonym in synonymMap) {
      if (input.includes(synonym)) {
        const mainTerm = synonymMap[synonym];
        if (qaPairs[mainTerm]) {
          return qaPairs[mainTerm];
        }
      }
    }

    return null;
  }

  function addMessage(content, from = "bot") {
    const msg = document.createElement("div");
    msg.classList.add(
      "px-3", "py-2", "rounded", "w-fit", "max-w-[80%]",
      "mb-2", "break-words",
      from === "bot" ? "bg-gray-200" : "bg-indigo-100",
      "self-end",
      "transition-opacity", "duration-200", "opacity-0", "animate-fade-in"
    );

    // Use textContent for user messages, innerHTML for bot (to allow links)
    if (from === "user") {
      msg.textContent = content;
    } else {
      msg.innerHTML = content;
    }

    chatbotMessages.appendChild(msg);

    // Trigger animation
    setTimeout(() => {
      msg.classList.remove("opacity-0");
    }, 10);

    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;
  }

  function sendChat() {
    const rawInput = chatbotInput.value.trim();
    if (!rawInput) return;

    const sanitizedInput = sanitizeInput(rawInput);
    addMessage(sanitizedInput, "user");

    const response = findBestMatch(rawInput) || getDefaultResponse();

    // Simulate typing delay
    setTimeout(() => {
      addMessage(response, "bot");
    }, 400);

    chatbotInput.value = "";
  }

  // Event listeners
  chatbotSend.addEventListener("click", sendChat);
  chatbotInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") sendChat();
  });

  // Toggle functions
  window.closeChatbot = function () {
    chatbotBox.classList.add("hidden");
    chatbotToggle.classList.remove("hidden");
  };

  chatbotToggle.addEventListener("click", () => {
    chatbotBox.classList.remove("hidden");
    chatbotToggle.classList.add("hidden");
    chatbotInput.focus();
  });

  // Add some initial help message
  setTimeout(() => {
    addMessage("Hi there! I'm RoomieRadar Bot. Ask me about profiles, preferences, or finding matches!", "bot");
  }, 1000);
});
