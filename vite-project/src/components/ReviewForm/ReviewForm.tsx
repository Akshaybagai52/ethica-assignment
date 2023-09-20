import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (reviewText: string) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState<string>('');
  const [isPopupVisible, setPopupVisible] = useState<boolean>(false);

  const handleSubmit = () => {
    const newReview = {
      text: reviewText,
      date: new Date().toLocaleString(), // Capture the current date and time
      votes: 0, // Initialize votes to 0
    };
    onSubmit(newReview);
    setReviewText('');
    setPopupVisible(false);
  };
  // console.log(newReview)

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
          <div className="relative bg-white p-6 rounded shadow-lg  md:w-[600px] w-[80%]">
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
                Submit
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

