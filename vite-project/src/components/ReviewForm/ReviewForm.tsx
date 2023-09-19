// src/components/ReviewForm/ReviewForm.tsx
import React, { useState } from 'react';

interface ReviewFormProps {
  onSubmit: (reviewText: string) => void;
}

export const ReviewForm: React.FC<ReviewFormProps> = ({ onSubmit }) => {
  const [reviewText, setReviewText] = useState<string>('');

  const handleSubmit = () => {
    onSubmit(reviewText);
    setReviewText('');
  };

  return (
    <div className="mb-4">
      <h2 className="text-xl font-semibold mb-2">Add Review</h2>
      <textarea
        className="w-full p-2 border rounded"
        rows={4}
        placeholder="Write your review here..."
        value={reviewText}
        onChange={(e) => setReviewText(e.target.value)}
      ></textarea>
      <button
        className="mt-2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </div>
  );
};


