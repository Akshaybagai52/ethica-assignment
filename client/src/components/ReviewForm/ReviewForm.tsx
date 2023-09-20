import axios from 'axios';
import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (reviewText: ReviewProps) => void; // Function to submit a new review
  onSentimentAnalysis: (sentiment: string) => void; // Function to handle sentiment analysis result
}

interface ReviewProps {
  text: string;
  date: any;
  votes: number;
  reviewId: string;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit, onSentimentAnalysis }) => {
  const [reviewText, setReviewText] = useState<string>('');
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  // Function to generate a random 8-digit number as a reviewId
  function generateRandom8DigitNumber() {
    const min = 10000000; // Smallest 8-digit number (10000000)
    const max = 99999999; // Largest 8-digit number (99999999)

    // Generate a random number between min and max (inclusive)
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomNumber.toString();
  }

  // Function to perform sentiment analysis
  const getSentiment = async () => {
    try {
      const res = await axios.post('http://localhost:3000/analyze-sentiment', { text: reviewText });
      const response = res.data.score;
      // Determine sentiment based on the score
      const sentiment = response > 1 ? 'Positive' : response < -1 ? 'Negative' : 'Neutral';
      // Call the provided function to handle sentiment analysis result
      onSentimentAnalysis(sentiment);
    } catch (err) {
      console.error(err);
    }
  };

  // Function to handle review submission
  const handleSubmit = () => {
    const newReview: ReviewProps = {
      text: reviewText,
      date: new Date().toLocaleString(), // Capture the current date and time
      votes: 0, // Initialize votes to 0
      reviewId: generateRandom8DigitNumber(),
    };
    // Call the provided function to submit the new review
    onSubmit(newReview);
    setReviewText('');
    setPopupVisible(false);
    getSentiment(); // Perform sentiment analysis when submitting the review
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Add Review</h2>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={() => setPopupVisible(true)}
      >
        Add Review
      </button>
      {isPopupVisible && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative bg-white p-6 rounded shadow-lg md:w-[600px] w-[80%]">
            <h3 className="text-xl font-semibold mb-2">Write your review:</h3>
            <textarea
              className="w-full p-2 border rounded"
              rows={4}
              placeholder="Write your review here..."
              value={reviewText}
              onChange={(e) => setReviewText(e.target.value)}
            ></textarea>
            <div className="flex justify-end mt-4">
              <button
                className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 mr-2"
                onClick={handleSubmit}
              >
                Analyze
              </button>
              <button
                className="px-4 py-2 bg-gray-300 text-gray-600 rounded hover:bg-gray-400"
                onClick={() => setPopupVisible(false)}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
