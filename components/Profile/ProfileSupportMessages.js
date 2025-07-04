import React from 'react';

const ProfileSupportMessages = ({ topPayments }) => {
  return (
    <div className="h-auto md:h-[350px] bg-blue-500/25 p-3 rounded-md w-[95%] md:w-[45%]">
      <h3 className="text-2xl font-bold mb-2">Top Supporters</h3>
      {topPayments.map((payment, index) => (
        <div key={index} className="flex gap-2 items-center">
          <img
            className="w-[40px] h-[40px] rounded-full"
            src="/avatar.gif"
            alt={`${payment.senderName}'s avatar`}
          />
          <p className="truncate w-full text-sm">
            <span className="font-semibold">{payment.senderName}</span> donated ₹{payment.amount} with a message &quot;{payment.message}&quot;
          </p>
        </div>
      ))}
    </div>
  );
};

export default ProfileSupportMessages;
