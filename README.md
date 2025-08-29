# Electronic Voting Machine Simulator

A realistic simulation of a Brazilian electronic voting machine (Urna Eletrônica) built with HTML, CSS, and JavaScript. This project recreates the look, feel, and functionality of the actual voting machines used in Brazilian elections.

## 🗳️ Features

- **Authentic Design**: Recreates the visual appearance of a real Brazilian electronic voting machine
- **Interactive Keypad**: Functional numeric keypad with special action buttons
- **Candidate Display**: Shows candidate information including photos, names, parties, and running mates
- **Vote Confirmation**: CONFIRM and CLEAR buttons for vote validation
- **Blank Vote Option**: Ability to cast blank votes
- **Visual Feedback**: Blinking cursor and responsive button interactions
- **Multi-Stage Voting**: Supports multiple election rounds (Councilman and Mayor)

## 📋 Available Candidates

### 🏛️ For Councilman (5 digits)

| Number | Candidate | Party | Photo |
|--------|-----------|-------|-------|
| **38111** | John Doe | ABC | ![Councilman](images/38111.jpg) |
| **77222** | Robert Smith | DEFG | ![Councilman](images/77222.jpg) |

### 🏢 For Mayor (2 digits)

| Number | Candidate | Vice-Mayor | Party | Photos |
|--------|-----------|------------|-------|--------|
| **99** | Michael Johnson | Mike | ABC | ![Mayor](images/99.jpg) ![Vice](images/99_2.jpg) |
| **84** | David Wilson | Dave | QWERTY | ![Mayor](images/84.jpg) ![Vice](images/84_2.jpg) |

## 📁 Project Structure

```
Eletronic-Voting-Machine/
├── index.html          # Main HTML structure
├── style.css           # Styling and animations
├── scripts.js          # Voting machine logic and interactions
├── procedures.js       # Candidate data and election stages
├── images/             # Candidate photos
│   ├── 38111.jpg      # John Doe (Councilman)
│   ├── 77222.jpg      # Robert Smith (Councilman)
│   ├── 84.jpg         # David Wilson (Mayor)
│   ├── 84_2.jpg       # Dave (Vice-Mayor)
│   ├── 99.jpg         # Michael Johnson (Mayor)
│   └── 99_2.jpg       # Mike (Vice-Mayor)
├── LICENSE            # License file
└── README.md          # Project documentation
```

## 🛠️ Technologies Used

- **HTML5**: Structure and content
- **CSS3**: Styling and animations
- **JavaScript**: Interactive functionality and voting logic
- **Flexbox**: Layout management
- **CSS Animations**: Blinking cursor effect

## 🎮 How to Use

### Voting Process:
1. **Start**: The machine begins with the first stage (Councilman)
2. **Enter Number**: Click the numeric buttons to enter a candidate's number
3. **Review**: Check the candidate information displayed
4. **Actions**:
   - **CONFIRM**: Proceed to the next voting stage
   - **CLEAR**: Restart the current vote
   - **BLANK**: Cast a blank vote for this position

### Voting Stages:
1. **Councilman Vote**: Enter 5-digit number (38111 or 77222)
2. **Mayor Vote**: Enter 2-digit number (99 or 84)

## ⚙️ Customization

### Adding New Candidates:
Edit the `procedures.js` file to add new candidates or modify existing ones:

```javascript
{
  number: "12345",
  name: "New Candidate",
  party: "PARTY",
  photos: [
    {url: "candidate.jpg", caption: "Position"}
  ]
}
```

### Modifying Election Stages:
You can add new voting stages or modify existing ones in the `stages` array.


## 📄 License

This project is licensed under the terms specified in the LICENSE file.


**Note**: This is a simulation for educational purposes and is not affiliated with any official election system.
