import React from 'react';
import './ReviewTable.css'

interface Review {
  text: string;
  date: string;
  votes: number;
  reviewId: string;
}

interface ReviewTableProps {
  reviews: Array<Review>;
  onUpvote: (reviewId: string) => void; 
  onDownvote: (reviewId: string) => void; 
}

export const ReviewTable: React.FC<ReviewTableProps> = ({ reviews, onUpvote, onDownvote }) => {
   // Sort reviews by votes in descending order
  const sortedReviews = [...reviews].sort((a, b) => b.votes - a.votes);
  return (
    <div>
      <h2 className="text-xl font-semibold mb-2">Review Table</h2>
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-gray-200">
            <th className="py-2 px-4 border">Review</th>
            <th className="py-2 px-4 border">Date</th>
            <th className="py-2 px-4 border">Votes</th>
          </tr>
        </thead>
        <tbody>
          {sortedReviews.map((review) => (
            <tr key={review.reviewId} className="border">
              <td className="py-2 px-4 border">{review.text}</td>
              <td className="py-2 px-4 border">{review.date}</td>
              <td className="py-2 px-4 border">
                {review.votes}
                <button onClick={() => onUpvote(review.reviewId)} className='pl-5'>&#x25B2;</button>
                <button onClick={() => onDownvote(review.reviewId)}>&#x25BC;</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
