import React, { useState } from 'react';
import { ReviewForm } from '../ReviewForm';
import { SentimentAnalysisResult } from '../SentimentAnalysisResult';
import { ReviewTable } from '../ReviewTable';

export const Assignment: React.FC = () => {
  const [reviews, setReviews] = useState([]);
  const [sentimentResult, setSentimentResult] = useState<string | null>(null);

  const handleSubmitReview = (reviewText: string) => {
    // Handle review submission and sentiment analysis here
    // Update 'reviews' and 'sentimentResult' states accordingly
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Sentiment Analysis App</h1>
      <ReviewForm onSubmit={handleSubmitReview} />
      <SentimentAnalysisResult sentiment={sentimentResult} />
      <ReviewTable reviews={reviews} />
    </div>
  );
};


