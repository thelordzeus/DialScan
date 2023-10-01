// pages/api/make-call.js
import twilio from "twilio";
import { NextResponse } from "next/server";

export async function POST(req) {
  const { phoneNumber } = req.body;

  const client = twilio(
    process.env.TWILIO_ACCOUNT_SID,
    process.env.TWILIO_AUTH_TOKEN
  );

  try {
    console.log(phoneNumber);
    const call = await client.calls.create({
      url: "http://demo.twillio.com/docs/voice.xml", // Replace with your server's URL for handling calls
      to: "+918795113404",
      from: "+3345214244",
    });

    console.log("Call initiated:", call.sid);
    NextResponse.status(200).json({ message: "Call initiated successfully" });
  } catch (error) {
    console.error("Error initiating call:", error);
    NextResponse.status(500).json({ error: "Error initiating call" });
  }
}
