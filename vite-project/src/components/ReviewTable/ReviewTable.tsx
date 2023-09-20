import React from 'react';

interface Review {
  text: string;
  date: string;
  votes: number;
}

interface ReviewTableProps {
  reviews: Array<Review>;
  onUpvote: (reviewId: number) => void;
  onDownvote: (reviewId: number) => void;
}


export const ReviewTable: React.FC<ReviewTableProps> = ({ reviews, onUpvote, onDownvote  }) => {
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
          {reviews.map((review, index) => (
            <tr key={index} className="border">
              <td className="py-2 px-4 border">{review.text}</td>
              <td className="py-2 px-4 border">{review.date}</td>
              <td className="py-2 px-4 border">
                {review.votes}
                <button onClick={onUpvote}>up</button>
                <button onClick={onDownvote}>down</button>
                {/* Add upvote and downvote buttons here */}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


