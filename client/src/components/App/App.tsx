import React, { useState } from 'react';
import { ReviewForm } from '../ReviewForm';
import { SentimentAnalysisResult } from '../SentimentAnalysisResult';
import { ReviewTable } from '../ReviewTable';

export const Assignment: React.FC = () => {
  // State to manage reviews and sentiment analysis result
  const [reviews, setReviews] = useState<any>([]);
  const [sentimentResult, setSentimentResult] = useState<string | null>(null);

  // Handle review submission
  const handleSubmitReview = (reviewText: string) => {
    setReviews((prevReviews: any) => [...prevReviews, reviewText]);
  };

  // Handle upvoting a review
  const handleUpvote = (reviewId: string) => {
    const updatedReviews = [...reviews];
    const reviewToUpdate = updatedReviews.find(
      (review) => review.reviewId === reviewId
    );

    if (reviewToUpdate) {
      reviewToUpdate.votes++;
      setReviews(updatedReviews);
    }
  };

  // Handle downvoting a review
  const handleDownvote = (reviewId: string) => {
    const updatedReviews = [...reviews];
    const reviewToUpdate = updatedReviews.find(
      (review) => review.reviewId === reviewId
    );

    if (reviewToUpdate && reviewToUpdate.votes > 0) {
      reviewToUpdate.votes--;
      setReviews(updatedReviews);
    }
  };

  // Handle sentiment analysis result
  const handleSentimentAnalysis = (sentiment: string) => {
    setSentimentResult(sentiment);
  };

  return (
    <div className='container mx-auto p-4'>
      <h1 className='text-3xl font-bold mb-4'>Sentiment Analysis App</h1>
      {/* ReviewForm component for submitting reviews and performing sentiment analysis */}
      <ReviewForm
        onSubmit={handleSubmitReview}
        onSentimentAnalysis={handleSentimentAnalysis}
      />
      {/* Display sentiment analysis result */}
      <SentimentAnalysisResult sentiment={sentimentResult} />
      {/* ReviewTable component to display reviews and allow upvoting/downvoting */}
      <ReviewTable
        reviews={reviews}
        onDownvote={handleDownvote}
        onUpvote={handleUpvote}
      />
    </div>
  );
};
