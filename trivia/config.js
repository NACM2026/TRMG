// =====================================================================
//  Day at the Downs — Derby Trivia : THE ONLY FILE YOU NEED TO EDIT
// =====================================================================
window.GAME_CONFIG = {
  // ---- Supabase (NACM project) : Project Settings -> API Keys ----
  supabaseUrl: "https://lbslumqezhxcebojmpip.supabase.co",
  supabaseKey: "sb_publishable_IFEZmvF1Jq3ZFxmq3jJWbg_YLtLFg23",   // publishable key ONLY, never the secret key

  // Phone link shown in the QR code. Leave "" to build it automatically from the
  // presenter's address (works as long as you open the presenter from GitHub Pages).
  playUrl: "",

  // ---- Branding ----
  org: "NACM Day at the Downs",
  title: "Derby Trivia",
  subtitle: "Churchill Downs • November 19, 2026",
  logo: "images/logo.png",            // NACM Day at the Downs logo

  // ---- Game settings ----
  secondsPerQuestion: 20,             // must match "seconds" in the database (default 20)
  leaderboardEvery: 5,                // show the leaderboard after every N questions
  prizeText: "Congratulations! See an NACM team member to claim your prize.",

  // ---- Questions (answers are NOT here — they live only in the database) ----
  questions: [
    { q: "In what year was the first Kentucky Derby run?",
      choices: ["1866", "1875", "1895", "1903"],
      fact: "May 17, 1875 — it's the longest continuously held sporting event in the U.S." },

    { q: "Which horse won the very first Kentucky Derby?",
      choices: ["Secretariat", "Regret", "Aristides", "Donerail"],
      fact: "Aristides, ridden by Oliver Lewis, won in front of about 10,000 fans." },

    { q: "Churchill Downs is named for…",
      choices: ["John & Henry Churchill, the founder's uncles", "Sir Winston Churchill's family", "Louisville's first mayor", "A church that stood on the property"],
      fact: "The brothers leased about 80 acres to their nephew to build the track." },

    { q: "Track founder Meriwether Lewis Clark Jr. was the grandson of…",
      choices: ["Daniel Boone", "Henry Clay", "Abraham Lincoln", "Explorer William Clark"],
      fact: "Yes — that William Clark, of the Lewis & Clark Expedition." },

    { q: "When were the famous Twin Spires built atop the grandstand?",
      choices: ["1875", "1895", "1920", "1952"],
      fact: "The 1895 grandstand and its spires are now part of a National Historic Landmark." },

    { q: "How long is today's Kentucky Derby?",
      choices: ["1¼ miles", "1½ miles", "1 mile", "1⅛ miles"],
      fact: "It was 1½ miles until 1896, then shortened to 1¼ miles (10 furlongs)." },

    { q: "About how many red roses are in the winner's garland?",
      choices: ["About 100", "About 250", "More than 400", "More than 1,000"],
      fact: "400+ roses are hand-sewn onto green satin — hence “The Run for the Roses.”" },

    { q: "What is the official drink of the Kentucky Derby?",
      choices: ["Old Fashioned", "Bourbon & Branch", "Kentucky Mule", "Mint Julep"],
      fact: "Official since 1939 — about 120,000 are served over Derby weekend." },

    { q: "What song is sung as the horses walk onto the track?",
      choices: ["Camptown Races", "My Old Kentucky Home", "Blue Moon of Kentucky", "Kentucky Woman"],
      fact: "Stephen Foster's “My Old Kentucky Home” is the state song." },

    { q: "Who holds the Derby record time of 1:59.40?",
      choices: ["Secretariat", "Seattle Slew", "American Pharoah", "Justify"],
      fact: "Secretariat, 1973 — the first horse to run the Derby in under two minutes." },

    { q: "Who is the biggest long shot ever to win the Derby, at 91-1?",
      choices: ["Rich Strike", "Mine That Bird", "Donerail", "Country House"],
      fact: "Donerail, 1913. Rich Strike (80-1 in 2022) is second." },

    { q: "How many fillies have won the Kentucky Derby?",
      choices: ["None", "1", "5", "3"],
      fact: "Regret (1915), Genuine Risk (1980) and Winning Colors (1988)." },

    { q: "Bill Hartack shares the record of 5 Derby wins by a jockey with…",
      choices: ["Bill Shoemaker", "Eddie Arcaro", "Pat Day", "Calvin Borel"],
      fact: "Eddie Arcaro won 5 Derbies, including two Triple Crowns (Whirlaway, Citation)." },

    { q: "The Kentucky Oaks winner (for fillies) gets a garland of…",
      choices: ["Lilies", "Orchids", "Daisies", "Carnations"],
      fact: "“Lilies for the fillies” — and the Oaks Lily is the Oaks' signature drink." },

    { q: "In May 2026, Golden Tempo won the 152nd Derby. What made trainer Cherie DeVaux historic?",
      choices: ["Youngest trainer ever to win", "First to win from the far outside post", "First woman to train a Derby winner", "First to win with a gray horse"],
      fact: "Golden Tempo rallied from last at 23-1 under jockey José Ortiz." }
  ]
};
