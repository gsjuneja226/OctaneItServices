import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Log the contact enquiry in server console for visibility
    console.log("[OCTANE ENQUIRY RECEIVED]:", {
      name: body.name,
      email: body.email,
      phone: body.phone,
      company: body.company,
      city: body.city,
      services: body.services,
      budget: body.budget,
      message: body.message,
      submittedAt: body.submittedAt
    });

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry received successfully! Our consultant will get in touch shortly."
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Enquiry API error:", error);
    return NextResponse.json(
      { success: false, message: "Invalid payload or internal error" },
      { status: 500 }
    );
  }
}

