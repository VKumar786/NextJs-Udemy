"use server";

import { redirect } from "next/navigation";
// import { saveMeal } from "./meals";
import { revalidatePath } from "next/cache";

export const sendFeedback = async (prevState: any, formData: any) => {
  const data = {
    email: formData.get("email"),
    feedback: formData.get("feedback"),
  };

  await fetch("http://localhost:3000/api/hello", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  //   redirect("/contact");
//   revalidatePath("/contact", "page");
};
