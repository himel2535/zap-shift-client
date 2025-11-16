import React from "react";

const Accordion = () => {
  return (
    <div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" defaultChecked />
        <div className="collapse-title font-semibold text-secondary">
          How does this posture corrector work?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          A posture corrector works by providing support and gentle alignment to
          your shoulders, back, and spine, encouraging you to maintain proper
          posture throughout the day. Here’s how it typically functions: A
          posture corrector works by providing support and gentle alignment to
          your shoulders.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-secondary">
          Is it suitable for all ages and body types?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Yes, it's designed to be safe and effective for users of all ages and
          body types.
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-secondary">
          Does it really help with back pain and posture improvement?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Yes, it does! Many users report noticeable relief from back pain and
          improved posture within a short period. The system works by gently
          aligning your spine, reducing muscle tension, and strengthening your
          core. With consistent use, it naturally trains your body to maintain
          better posture and reduces discomfort throughout the day
        </div>
      </div>
      <div className="collapse collapse-arrow bg-base-100 border border-base-300">
        <input type="radio" name="my-accordion-2" />
        <div className="collapse-title font-semibold text-secondary">
          Does it have smart features like vibration alerts?
        </div>
        <div className="collapse-content text-sm text-gray-600">
          Yes! Some posture correctors do include smart features like vibration
          alerts. These sensors detect when you start slouching and gently
          remind you to sit or stand upright. It works like a real-time posture
          coach — helping you build better habits without being intrusive.
          However, vibration alerts are meant to remind you, not replace natural
          muscle strength. For best results, pair it with simple posture
          exercises.
        </div>
      </div>
    </div>
  );
};

export default Accordion;
