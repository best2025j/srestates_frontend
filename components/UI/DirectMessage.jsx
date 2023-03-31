"use client";
import React from "react";
import Form from "../Form";

export default function DirectMessage() {
  return (
    <div className="flex flex-col w-full h-full ">
      <div className="text-center">
        <h1>Shoot Us a Direct Message If You Need Any Help</h1>
        <p>At Studentrealestate we major in two things, which are...</p>
      </div>
      <div> 
        <Form />
      </div>
    </div>
  );
}
