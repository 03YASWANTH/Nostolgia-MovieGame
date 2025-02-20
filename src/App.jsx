import React, { useState } from 'react';
import { Film, Star, User2, UserCircle } from 'lucide-react';

const MovieGuessingGame = () => {
  const movies = 
      [
        {
          "name": "Baahubali",
          "hero": "Prabhas",
          "heroine": "Anushka Shetty",
          "director": "S.S. Rajamouli",
          "hints": ["War between two brothers for the throne", "Famous for 'Why Kattappa killed Baahubali?'"]
        },
        {
          "name": "Pushpa",
          "hero": "Allu Arjun",
          "heroine": "Rashmika Mandanna",
          "director": "Sukumar",
          "hints": ["Character has a signature 'Thaggede Le' gesture", "Story revolves around red sandalwood smuggling"]
        },
        {
          "name": "Arjun Reddy",
          "hero": "Vijay Deverakonda",
          "heroine": "Shalini Pandey",
          "director": "Sandeep Reddy Vanga",
          "hints": ["A hot-headed surgeon with anger issues", "Inspired Bollywood remake 'Kabir Singh'"]
        },
        {
          "name": "Srimanthudu",
          "hero": "Mahesh Babu",
          "heroine": "Shruti Haasan",
          "director": "Koratala Siva",
          "hints": ["A rich guy adopts a village", "Powerful message on rural development"]
        },
        {
          "name": "Jersey",
          "hero": "Nani",
          "heroine": "Shraddha Srinath",
          "director": "Gowtam Tinnanuri",
          "hints": ["Story of an ex-cricketer making a comeback", "Bollywood remake starred Shahid Kapoor"]
        },
        {
          "name": "Ala Vaikunthapurramuloo",
          "hero": "Allu Arjun",
          "heroine": "Pooja Hegde",
          "director": "Trivikram Srinivas",
          "hints": ["'Butta Bomma' song became a viral hit", "A story of switched identities at birth"]
        },
        {
          "name": "Magadheera",
          "hero": "Ram Charan",
          "heroine": "Kajal Aggarwal",
          "director": "S.S. Rajamouli",
          "hints": ["A love story spanning 400 years", "Features a famous reincarnation theme"]
        },
        {
          "name": "Eega",
          "hero": "Nani",
          "heroine": "Samantha Ruth Prabhu",
          "director": "S.S. Rajamouli",
          "hints": ["Hero is reborn as a housefly", "Revenge story with amazing VFX"]
        },
        {
          "name": "Gabbar Singh",
          "hero": "Pawan Kalyan",
          "heroine": "Shruti Haasan",
          "director": "Harish Shankar",
          "hints": ["Inspired by Bollywood's 'Dabangg'", "Features the iconic 'Kevvu Keka' song"]
        },
        {
          "name": "Pokiri",
          "hero": "Mahesh Babu",
          "heroine": "Ileana D'Cruz",
          "director": "Puri Jagannadh",
          "hints": ["A ruthless undercover cop", "Highest-grossing Telugu movie in 2006"]
        },
        {
          "name": "Temper",
          "hero": "Jr. NTR",
          "heroine": "Kajal Aggarwal",
          "director": "Puri Jagannadh",
          "hints": ["A corrupt cop turns righteous", "Inspired the Bollywood movie 'Simmba'"]
        },
        {
          "name": "Rangasthalam",
          "hero": "Ram Charan",
          "heroine": "Samantha Ruth Prabhu",
          "director": "Sukumar",
          "hints": ["Set in a village backdrop", "Revenge story with a deaf protagonist"]
        },
        {
          "name": "Janatha Garage",
          "hero": "Jr. NTR",
          "heroine": "Samantha Ruth Prabhu",
          "director": "Koratala Siva",
          "hints": ["A socially responsible mechanic group", "Mohanlal plays a crucial role"]
        },
        {
          "name": "Sye",
          "hero": "Nithiin",
          "heroine": "Genelia D'Souza",
          "director": "S.S. Rajamouli",
          "hints": ["A rugby-based movie", "Two rival college gangs unite for a cause"]
        },
        {
          "name": "Athadu",
          "hero": "Mahesh Babu",
          "heroine": "Trisha Krishnan",
          "director": "Trivikram Srinivas",
          "hints": ["A professional killer hiding in a village", "Famous dialogue: 'Nuvvu nenu pakkana unte, aa feeling eh vere!'"]
        },
        {
          "name": "Okkadu",
          "hero": "Mahesh Babu",
          "heroine": "Bhumika Chawla",
          "director": "Gunasekhar",
          "hints": ["A kabaddi player saves a girl from a goon", "Remade in multiple languages"]
        },
        {
          "name": "Mirchi",
          "hero": "Prabhas",
          "heroine": "Anushka Shetty",
          "director": "Koratala Siva",
          "hints": ["A reformed man goes back to his village", "Famous dialogue: 'Nelavanka kalaloki vachesindi'"]
        },
        {
          "name": "Khaidi No. 150",
          "hero": "Chiranjeevi",
          "heroine": "Kajal Aggarwal",
          "director": "V. V. Vinayak",
          "hints": ["Chiranjeevi’s comeback movie", "Deals with farmers' rights"]
        },
        {
          "name": "DJ - Duvvada Jagannadham",
          "hero": "Allu Arjun",
          "heroine": "Pooja Hegde",
          "director": "Harish Shankar",
          "hints": ["A Brahmin guy who fights crime", "Mass hit dialogues and songs"]
        },
        {
          "name": "Yevadu",
          "hero": "Ram Charan",
          "heroine": "Shruti Haasan",
          "director": "Vamsi Paidipally",
          "hints": ["Face transplant thriller", "Inspired by Hollywood's 'Face/Off'"]
        },
        {
          "name": "Legend",
          "hero": "Nandamuri Balakrishna",
          "heroine": "Radhika Apte",
          "director": "Boyapati Srinu",
          "hints": ["Power-packed political drama", "Famous punch dialogue: 'Simham single ga vaste jungle shake avutundi'"]
        },
        {
          "name": "Robo",
          "hero": "Rajinikanth",
          "heroine": "Aishwarya Rai",
          "director": "Shankar",
          "hints": ["A robot develops emotions", "Famous 'Chitti' character"]
        },
        {
          "name": "Businessman",
          "hero": "Mahesh Babu",
          "heroine": "Kajal Aggarwal",
          "director": "Puri Jagannadh",
          "hints": ["Crime lord rises to power in Mumbai", "Famous dialogue: 'Guns lo bullets ki, caste veru'"]
        },
        {
          "name": "Magadheera",
          "hero": "Ram Charan",
          "heroine": "Kajal Aggarwal",
          "director": "S.S. Rajamouli",
          "hints": ["A love story spanning 400 years", "Features a famous reincarnation theme"]
        },
        {
          "name": "Arundhati",
          "heroine": "Anushka Shetty",
          "director": "Kodi Ramakrishna",
          "hints": ["Arundhati fights against a black magician", "Horror and fantasy elements"]
        },
        {
          "name": "Vikramarkudu",
          "hero": "Raviteja",
          "heroine": "Anushka Shetty",
          "director": "S.S. Rajamouli",
          "hints": ["A thief and a police officer's souls get swapped", "Action-comedy"]
        },
        {
          "name": "Chatrapathi",
          "hero": "Prabhas",
          "heroine": "Shriya Saran",
          "director": "S.S. Rajamouli",
          "hints": ["A refugee becomes a powerful leader", "Action and drama"]
        },
        {
          "name": "Kick",
          "hero": "Raviteja",
          "heroine": "Ileana D'Cruz",
          "director": "Surrendra reddy",
          "hints": ["A guy who gets a kick out of helping others", "Remade in multiple languages"]
        },
      {
        "name": "Baahubali 2: The Conclusion",
        "hero": "Prabhas",
        "heroine": "Anushka Shetty",
        "director": "S.S. Rajamouli",
        "hints": ["Answers the question 'Why Kattappa killed Baahubali?'", "Epic war sequences and visual spectacle"]
      },
      {
        "name": "RRR",
        "hero": "NTR Jr., Ram Charan",
        "heroine": "Alia Bhatt, Olivia Morris",
        "director": "S.S. Rajamouli",
        "hints": ["Fictional story about two Indian revolutionaries", "High-octane action and patriotic themes"]
      },
      {
        "name": "K.G.F: Chapter 1",
        "hero": "Yash",
        "heroine": "Srinidhi Shetty",
        "director": "Prashanth Neel",
        "hints": ["Story of a powerful man who takes control of a gold mine", "Action-packed and visually stunning"]
      },
        {
        "name": "K.G.F: Chapter 2",
        "hero": "Yash",
        "heroine": "Srinidhi Shetty, Raveena Tandon",
        "director": "Prashanth Neel",
        "hints": ["Continues the story of Rocky's reign over the KGF", "Larger scale and even more action"]
      },
      {
        "name": "Pushpa: The Rise",
        "hero": "Allu Arjun",
        "heroine": "Rashmika Mandanna",
        "director": "Sukumar",
        "hints": ["Focuses on the rise of Pushpa Raj in the red sandalwood smuggling world", "Iconic 'Thaggede Le' dialogue"]
      },
      {
        "name": "Vikram",
        "hero": "Kamal Haasan, Vijay Sethupathi, Fahadh Faasil",
        "heroine": "None (focus on action and story)",
        "director": "Lokesh Kanagaraj",
        "hints": ["High-octane action thriller", "Interconnected with Lokesh Cinematic Universe (LCU)"]
      },
        {
        "name": "Major",
        "hero": "Adivi Sesh",
        "heroine": "Saiee Manjrekar",
        "director": "Sashi Kiran Tikka",
        "hints": ["Biopic of Major Sandeep Unnikrishnan", "Tribute to a national hero"]
      },
      {
        "name": "Sita Ramam",
        "hero": "Dulquer Salmaan",
        "heroine": "Mrunal Thakur",
        "director": "Hanu Raghavapudi",
        "hints": ["Romantic period drama", "Visually stunning and emotionally resonant"]
      },
      {
        "name": "Ponniyin Selvan: Part 1",
        "hero": "Vikram, Jayam Ravi, Karthi, Trisha Krishnan, Aishwarya Rai Bachchan",
        "heroine": "Aishwarya Rai Bachchan, Trisha Krishnan",
        "director": "Mani Ratnam",
        "hints": ["Epic historical fiction", "Based on Kalki Krishnamurthy's novel"]
      },
      {
        "name": "Ponniyin Selvan: Part 2",
        "hero": "Vikram, Jayam Ravi, Karthi, Trisha Krishnan, Aishwarya Rai Bachchan",
        "heroine": "Aishwarya Rai Bachchan, Trisha Krishnan",
        "director": "Mani Ratnam",
        "hints": ["Continues the story of the Chola dynasty", "Grandeur and political intrigue"]
      },
      {
        "name": "Virupaksha",
        "hero": "Sai Dharam Tej",
        "heroine": "Samyuktha Menon",
        "director": "Karthik Dandu",
        "hints": ["Mystery thriller with supernatural elements", "Engaging plot twists"]
      },
      {
        "name": "Dasara",
        "hero": "Nani",
        "heroine": "Keerthy Suresh",
        "director": "Srikanth Odela",
        "hints": ["Action drama set in a coal mine", "Raw and realistic portrayal of village life"]
      },
      {
        "name": "Waltair Veerayya",
        "hero": "Chiranjeevi",
        "heroine": "Shruti Haasan",
        "director": "Bobby Kolli",
        "hints": ["Action entertainer with mass elements", "Chiranjeevi in his element"]
      },
      {
        "name": "Veera Simha Reddy",
        "hero": "Nandamuri Balakrishna",
        "heroine": "Shruti Haasan",
        "director": "Gopichand Malineni",
        "hints": ["Action drama with powerful dialogues", "Balakrishna's larger-than-life persona"]
      },
        {
        "name": "Agent",
        "hero": "Akhil Akkineni",
        "heroine": "Sakshi Vaidya",
        "director": "Surender Reddy",
        "hints": ["Spy thriller", "High-octane action sequences"]
      },
      {
        "name": "Custody",
        "hero": "Naga Chaitanya",
        "heroine": "Krithi Shetty",
        "director": "Venkat Prabhu",
        "hints": ["Action thriller", "Naga Chaitanya in a different avatar"]
      },
        {
        "name": "Samajavaragamana",
        "hero": "Sree Vishnu",
        "heroine": "Reba Monica John",
        "director": "Ram Abbaraju",
        "hints": ["Comedy entertainer", "Relatable and hilarious situations"]
      },
      {
        "name": "Baby",
        "hero": "Anand Deverakonda, Vaishnavi Chaitanya",
        "heroine": "Vaishnavi Chaitanya",
        "director": "Sai Rajesh Neelam",
        "hints": ["Romantic drama", "Explores complex relationships"]
      },
        {
        "name": "Bro",
        "hero": "Pawan Kalyan, Sai Dharam Tej",
        "heroine": "Kethika Sharma, Priya Prakash Varrier",
        "director": "Samuthirakani",
        "hints": ["Fantasy comedy drama", "Remake of Tamil film 'Vinodhaya Sitham'"]
      },
      {
        "name": "Bholaa Shankar",
        "hero": "Chiranjeevi",
        "heroine": "Tamannaah Bhatia, Keerthy Suresh",
        "director": "Meher Ramesh",
        "hints": ["Action entertainer", "Remake of Tamil film 'Vedalam'"]
      },
      {
        "name": "Skanda",
        "hero": "Boyapati Srinu",
        "heroine": "Sreeleela",
        "director": "Boyapati Srinu",
        "hints": ["Action entertainer", "High-octane action sequences"]
      },
      [
        {
          "name": "Mayabazar",
          "hero": "N.T. Rama Rao, Akkineni Nageswara Rao",
          "heroine": "Savitri, S. Varalakshmi",
          "director": "K.V. Reddy",
          "hints": ["Mythological fantasy film", "Based on the epic Mahabharata"]
        },
        {
          "name": "Sankarabharanam",
          "hero": "J.V. Somayajulu",
          "heroine": "Manju Bhargavi",
          "director": "K. Viswanath",
          "hints": ["Classical music-based drama", "Revived interest in Carnatic music"]
        },
        {
          "name": "Sagarasangamam",
          "hero": "Kamal Haasan",
          "heroine": "Jayaprada",
          "director": "K. Viswanath",
          "hints": ["Story of a classical dancer", "Explores themes of art and life"]
        },
        {
          "name": "Swathi Muthyam",
          "hero": "Kamal Haasan",
          "heroine": "Radhika Sarathkumar",
          "director": "K. Viswanath",
          "hints": ["Innocent man with childlike behavior", "Heartwarming and emotional"]
        },
        {
          "name": "Shiva",
          "hero": "Nagarjuna Akkineni",
          "heroine": "Amala Akkineni",
          "director": "Ram Gopal Varma",
          "hints": ["Cult classic action film", "Groundbreaking for its time"]
        },
        {
          "name": "Gamyam",
          "hero": "Sharwanand",
          "heroine": "Kamalinee Mukherjee",
          "director": "Krish",
          "hints": ["Road movie with philosophical themes", "Explores self-discovery and life's purpose"]
        },
        {
          "name": "Vedam",
          "hero": "Allu Arjun, Anushka Shetty, Manchu Manoj",
          "heroine": "Anushka Shetty, Lekha Washington, Deeksha Seth",
          "director": "Krish",
          "hints": ["Intertwined stories of different people", "Explores social issues and human emotions"]
        },
        {
          "name": "Maryada Ramanna",
          "hero": "Sunil",
          "heroine": "Saloni Aswani",
          "director": "S.S. Rajamouli",
          "hints": ["Comedy with a unique premise", "Inspired by Buster Keaton's 'Our Hospitality'"]
        },
        {
          "name": "Manam",
          "hero": "Akkineni Nageswara Rao, Nagarjuna Akkineni, Naga Chaitanya",
          "heroine": "Shriya Saran, Samantha Ruth Prabhu",
          "director": "Vikram Kumar",
          "hints": ["Family drama with reincarnation", "Three generations of Akkineni family"]
        },
        {
          "name": "Premam",
          "hero": "Naga Chaitanya",
          "heroine": "Shruti Haasan, Madonna Sebastian, Anupama Parameswaran",
          "director": "Chandoo Mondeti",
          "hints": ["Coming-of-age romantic drama", "Three stages of love"]
        },
        {
          "name": "Pelli Choopulu",
          "hero": "Vijay Deverakonda",
          "heroine": "Ritu Varma",
          "director": "Tharun Bhascker Dhaassyam",
          "hints": ["Urban romantic comedy", "Two individuals with different dreams"]
        },
        {
          "name": "Arjun Reddy",
          "hero": "Vijay Deverakonda",
          "heroine": "Shalini Pandey",
          "director": "Sandeep Reddy Vanga",
          "hints": ["Intense romantic drama", "Controversial for its bold scenes"]
        },
        {
          "name": "Mahanati",
          "heroine": "Keerthy Suresh",
          "hero": "Dulquer Salmaan, Samantha Ruth Prabhu, Vijay Deverakonda",
          "director": "Nag Ashwin",
          "hints": ["Biopic of legendary actress Savitri", "Celebrates the life and legacy of a star"]
        },
        {
          "name": "C/o Kancharapalem",
          "hero": "Subba Rao, Radha Bessy, Karthik Rathnam",
          "heroine": "Praveena Paruchuri",
          "director": "Venkatesh Maha",
          "hints": ["Anthology film set in a small town", "Realistic portrayal of love and life"]
        },
        {
          "name": "Rangasthalam",
          "hero": "Ram Charan",
          "heroine": "Samantha Ruth Prabhu",
          "director": "Sukumar",
          "hints": ["Period action drama", "Set in a village backdrop"]
        },
        {
          "name": "Goodachari",
          "hero": "Adivi Sesh",
          "heroine": "Sobhita Dhulipala",
          "director": "Sashi Kiran Tikka",
          "hints": ["Spy thriller", "Twists and turns"]
        },
        {
          "name": "Ee Nagaraniki Emaindi",
          "hero": "Vishwak Sen, Sushanth, Abhinav Gomatam, Venkatesh Kakumanu",
          "heroine": "Simran Choudhary, Anisha Ambrose",
          "director": "Tharun Bhascker Dhaassyam",
          "hints": ["Coming-of-age comedy", "Four friends on a road trip"]
        },
        {
          "name": "Agent Sai Srinivasa Athreya",
          "hero": "Naveen Polishetty",
          "heroine": "Shruti Sharma",
          "director": "Swaroop RSJ",
          "hints": ["Detective comedy thriller", "Unique and engaging plot"]
        },
  
          {
            "name": "Arya",
            "hero": "Allu Arjun",
            "heroine": "Anu Mehta",
            "director": "Sukumar",
            "hints": ["Love story with a unique narrative", "Popularized the phrase 'Feel my love'"]
          },
          {
            "name": "Athadu",
            "hero": "Mahesh Babu",
            "heroine": "Trisha Krishnan",
            "director": "Trivikram Srinivas",
            "hints": ["Stylish action thriller", "A professional killer on the run"]
          },
          {
            "name": "Ghajini",
            "hero": "Suriya",
            "heroine": "Asin",
            "director": "A.R. Murugadoss",
            "hints": ["Revenge thriller with a unique memory loss concept", "Inspired the Aamir Khan Bollywood movie"]
          },
          {
            "name": "Happy Days",
            "hero": "Varun Sandesh, Nikhil Siddharth, Tamannaah Bhatia",
            "heroine": "Tamannaah Bhatia, Gayatri Rao, Monali Chowdhary",
            "director": "Sekhar Kammula",
            "hints": ["Nostalgic college life drama", "Captures the essence of friendship and love"]
          },
          {
            "name": "Leader",
            "hero": "Rana Daggubati",
            "heroine": "Richa Gangopadhyay",
            "director": "Sekhar Kammula",
            "hints": ["Political drama with a strong message", "A young man enters politics to make a difference"]
          },
          {
            "name": "Prasthanam",
            "hero": "Sharwanand",
            "heroine": "Ruby Parihar",
            "director": "Deva Katta",
            "hints": ["Intense political drama", "Power struggles within a family"]
          },
          {
            "name": "Vedam",
            "hero": "Allu Arjun, Anushka Shetty, Manchu Manoj",
            "heroine": "Anushka Shetty, Lekha Washington, Deeksha Seth",
            "director": "Krish",
            "hints": ["Multi-narrative film exploring different social issues", "Raw and realistic portrayal of characters"]
          },
          {
            "name": "Ye Maaya Chesave",
            "hero": "Naga Chaitanya",
            "heroine": "Samantha Ruth Prabhu",
            "director": "Gautham Menon",
            "hints": ["Romantic drama with beautiful music", "A love story with ups and downs"]
          },
          {
            "name": "Maryada Ramanna",
            "hero": "Sunil",
            "heroine": "Saloni Aswani",
            "director": "S.S. Rajamouli",
            "hints": ["Comedy inspired by a silent film", "Unique premise and entertaining execution"]
          },
          {
            "name": "Brindavanam",
            "hero": "Jr. NTR",
            "heroine": "Kajal Aggarwal, Samantha Ruth Prabhu",
            "director": "Vamshi Paidipally",
            "hints": ["Family entertainer with a love triangle", "Jr. NTR's energetic performance"]
          },
          {
            "name": "Don Seenu",
            "hero": "Raviteja",
            "heroine": "Shriya Saran",
            "director": "Gopichand Malineni",
            "hints": ["Action comedy with Raviteja's signature style", "A small-time thief dreams of becoming a don"]
          },
          {
            "name": "Simha",
            "hero": "Nandamuri Balakrishna",
            "heroine": "Nayantara, Sneha Ullal",
            "director": "Boyapati Srinu",
            "hints": ["Action drama with powerful dialogues", "Balakrishna's dual role"]
          },
          {
            "name": "Darling",
            "hero": "Prabhas",
            "heroine": "Kajal Aggarwal",
            "director": "A. Karunakaran",
            "hints": ["Romantic comedy with a unique twist", "Prabhas' charming performance"]
          },
          {
            "name": "Orange",
            "hero": "Ram Charan",
            "heroine": "Genelia D'Souza",
            "director": "Bhaskar",
            "hints": ["Romantic drama with a different perspective on love", "Visually appealing and thought-provoking"]
          }
    ]
    // ... (rest of the movies array remains the same)
  ];

  const [currentMovieIndex, setCurrentMovieIndex] = useState(0);
  const [attempts, setAttempts] = useState(0);
  const [guess, setGuess] = useState('');
  const [gameStatus, setGameStatus] = useState('playing'); // 'playing', 'won', 'lost'
  const [message, setMessage] = useState('');
  const [showHint, setShowHint] = useState(false);

  const getCurrentMovie = () => movies[currentMovieIndex];

  const getMaskedName = () => {
    const movieName = getCurrentMovie().name;
    return movieName.split('').map(char => char === ' ' ? ' ' : '_').join(' ');
  };

  const handleGuess = () => {
    const currentMovie = getCurrentMovie();
    
    if (guess.toLowerCase() === currentMovie.name.toLowerCase()) {
      setGameStatus('won');
      setMessage(`Correct! The movie was "${currentMovie.name}"`);
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      
      if (newAttempts === 3) {
        setGameStatus('lost');
        setMessage(`Out of attempts! The movie was "${currentMovie.name}"`);
      } else {
        setShowHint(true);
        setMessage(`Wrong guess! Try again. You have ${3 - newAttempts} attempts left.`);
      }
    }
    setGuess('');
  };

  const nextMovie = () => {
    if (currentMovieIndex + 1 < movies.length) {
      setCurrentMovieIndex(currentMovieIndex + 1);
      setAttempts(0);
      setGameStatus('playing');
      setMessage('');
      setShowHint(false);
    } else {
      setGameStatus('completed');
      setMessage('Congratulations! You completed all movies!');
    }
  };

  const getCurrentHint = () => {
    if (!showHint) return null;
    if (attempts === 1) return getCurrentMovie().hints[0];
    if (attempts === 2) return getCurrentMovie().hints[1];
    return null;
  };

  if (gameStatus === 'completed') {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-6 flex items-center justify-center">
        <div className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-lg shadow-xl p-6">
          <div className="mb-4 bg-green-100 p-4 rounded-lg">
            <p className="text-lg font-semibold">🎉 Game Over! You've completed all movies!</p>
          </div>
          <button 
            onClick={() => {
              setCurrentMovieIndex(0);
              setAttempts(0);
              setGameStatus('playing');
              setMessage('');
              setShowHint(false);
            }}
            className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            Play Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-900 to-blue-900 p-6">
      <div className="w-full max-w-2xl mx-auto bg-white/90 backdrop-blur rounded-lg shadow-xl">
        <div className="text-center border-b border-gray-200 p-6">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Guess the Telugu Movie!
          </h1>
        </div>
        
        <div className="space-y-6 p-6">
          <div className="text-center space-y-3">
            <p className="text-3xl font-mono tracking-widest">{getMaskedName()}</p>
            <p className="text-sm text-gray-600">Movie {currentMovieIndex + 1} of {movies.length}</p>
          </div>

          <div className="grid grid-cols-1 gap-4 bg-gray-50 p-4 rounded-lg">
            <div className="flex items-center gap-2">
              <UserCircle className="text-purple-600" />
              <p><span className="font-semibold">Hero:</span> {getCurrentMovie().hero}</p>
            </div>
            <div className="flex items-center gap-2">
              <User2 className="text-purple-600" />
              <p><span className="font-semibold">Heroine:</span> {getCurrentMovie().heroine}</p>
            </div>
            <div className="flex items-center gap-2">
              <Film className="text-purple-600" />
              <p><span className="font-semibold">Director:</span> {getCurrentMovie().director}</p>
            </div>
          </div>

          {getCurrentHint() && (
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 flex items-start gap-2">
              <Star className="h-4 w-4 text-blue-600 mt-1" />
              <p className="text-blue-800">Hint: {getCurrentHint()}</p>
            </div>
          )}

          {message && (
            <div className={`p-4 rounded-lg ${
              gameStatus === 'won' ? 'bg-green-50 text-green-800' : 
              gameStatus === 'lost' ? 'bg-red-50 text-red-800' : 
              'bg-yellow-50 text-yellow-800'
            }`}>
              <p>{message}</p>
            </div>
          )}

          <div className="space-y-4">
            <div className="flex space-x-2">
              <input
                type="text"
                value={guess}
                onChange={(e) => setGuess(e.target.value)}
                placeholder="Enter movie name"
                disabled={gameStatus !== 'playing'}
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
              />
              <button 
                onClick={handleGuess}
                disabled={gameStatus !== 'playing' || !guess.trim()}
                className="px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                Guess
              </button>
            </div>

            {(gameStatus === 'won' || gameStatus === 'lost') && (
              <button 
                onClick={nextMovie}
                className="w-full py-2 px-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white rounded-lg font-semibold transition-colors"
              >
                Next Movie
              </button>
            )}

            <div className="text-center text-sm text-gray-600">
              <p>Attempts remaining: {3 - attempts}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieGuessingGame;