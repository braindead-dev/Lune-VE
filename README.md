# Lune VE: Website Repository

## Introduction
This repository contains the source code for Lune's official website. Lune, a virtual enterprise company, is dedicated to revolutionizing sleep experiences with tailored products catering to individual sleep habits and needs. This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Quiz Algorithm Logic

### Sleep Type Classification
The quiz implements a point-based classification system that categorizes users into four distinct sleep types:

1. **Stress-Relief Seeker**: For individuals whose sleep is primarily affected by mental stress and anxiety
2. **Deep Diver**: For those seeking more profound, uninterrupted sleep
3. **Night Owl**: For people with irregular sleep patterns or schedule-related sleep issues
4. **Sensory Seeker**: For individuals sensitive to environmental factors affecting sleep

### Scoring System
- Questions are weighted differently based on their relevance to each sleep type
- Points range from -1 to 2 for each answer:
  - -1: Indicates opposite characteristics of a sleep type
  - 1: Shows moderate alignment with a sleep type
  - 2: Strongly indicates characteristics of a sleep type

### Classification Process
1. Users answer 8 questions about their sleep habits and preferences
2. Each answer contributes points to one or more sleep type categories
3. Points are accumulated throughout the quiz
4. The sleep type with the highest total points becomes the user's primary classification

### Key Questions and Their Impact
- Questions 3-4: Initial classification indicators
- Questions 5-8: Deeper behavioral and preference analysis
- Early questions focus on general sleep patterns
- Later questions target specific sleep-related behaviors and environmental preferences

## Setup and Installation

1. **Clone the Repository**
   ```
   git clone https://github.com/braindead-dev/lune-ve.git
   ```

2. **Navigate to the Project Directory**
   ```
   cd lune-website
   ```

3. **Install Dependencies**
   ```
   npm install
   ```

4. **Run the Development Server**
   ```
   npm start
   ```

## Contributing

For team members looking to contribute:

1. Fork the repository.
2. Create your feature branch (`git checkout -b feature/YourFeatureName`).
3. Commit your changes (`git commit -m 'Add some feature'`).
4. Push to the branch (`git push origin feature/YourFeatureName`).
5. Open a new pull request.

Please ensure to update tests as appropriate and maintain the code quality and standards.

## Support
This project is no longer maintained as this project was built for the 2023-2024 school year, but you can reach me at contact@henrywa[.]ng if you have any questions.

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
